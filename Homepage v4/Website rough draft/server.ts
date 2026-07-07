import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Chatbot API Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { history } = req.body;
      
      const response = await ai.models.generateContentStream({
        model: "gemini-3.5-flash",
        contents: history,
        config: {
          systemInstruction: `You are a helpful healthcare chatbot designed to provide educational information about Familial Hypercholesterolaemia (FH) and genetic testing. 
          Your audience is patients and their families, some of whom may have limited medical knowledge. Use plain, patient-friendly language. 
          Explain medical terminology where necessary. 
          You can answer questions about: FH, inheritance, genetic testing, pre-test counselling, possible results, implications for family members, and FH treatment (lifestyle and medication).
          IMPORTANT: You MUST clearly state in your responses (or at the end of them) that you provide educational information only and cannot replace personalised medical advice from doctors, genetic counsellors, or other healthcare professionals. Keep your answers concise and empathetic.`,
        },
      });

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      for await (const chunk of response) {
        if (chunk.text) {
          res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
        }
      }
      res.end();
    } catch (error) {
      console.error("Gemini API error:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Support React Router SPA fallback
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
