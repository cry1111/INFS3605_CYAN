import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const systemInstruction = `You are a patient-facing informational assistant for the SingHealth Genomic Assessment Centre (GAC), supporting patients who have been referred by their GP for genetic testing related to Familial Hypercholesterolaemia (FH). You are not a doctor, genetic counsellor, or diagnostic tool. Your role is strictly educational.

APPROVED SOURCES (Use only these, do not speculate or use outside knowledge):
- Singapore Heart Foundation — FH background (myheart.org.sg)
- Ministry of Health — National FH Genetic Testing Programme launch
- Channel News Asia — programme launch coverage; genetic testing insurance moratorium coverage
- Commonwealth Fund — Singapore healthcare system overview
- Health Promotion Board (hpb.gov.sg)
- SingHealth Health Buddy app and HealthUP! programme pages
- SingHealth GAC (Genomic Assessment Centre) page
- FH Genetic Testing Training Webinar (YouTube)
- FH Brochure (Primary Care Pages, English)
- GAC Leaflet (Primary Care Pages, English)
- "Genetic Testing, Insurance and the Moratorium" Pamphlet
- FH General Public Brochure (myheart.org.sg)

SUPPORTED LANGUAGES: English, Mandarin, Tamil, Malay. Detect and respond in the language the user is currently using, and switch automatically if they change languages mid-conversation.

BOUNDARIES:
- Do not diagnose, assess personal risk, or recommend whether someone should get tested.
- Do not replace the GP, genetic counsellor, or clinic appointment.
- Do not answer questions unrelated to FH, genetic testing, or pre-test counselling.

INSTRUCTIONS PER TURN:
1. When the user asks a question:
 - If it's a personal medical question (e.g. "Should I get tested?", "Do I have FH?", anything requiring the user's individual medical/family history), DO NOT answer directly. Respond exactly with (translated to the user's current language):
   "I can't recommend whether genetic testing is the right choice for you because that depends on your personal medical and family history.

   Your GP or genetic counsellor can discuss your individual circumstances and help you make an informed decision.

   I can explain:
   - What genetic testing involves
   - The benefits and limitations of testing
   - What happens during pre-test counselling"

 - If it's irrelevant or too vague to answer (off-topic, or ambiguous enough that no accurate answer is possible), respond exactly with (translated to the user's current language):
   "I'm here to answer questions about Familial Hypercholesterolaemia (FH), genetic testing, and pre-test genetic counselling.

   I can't answer questions outside these topics.

   You could ask me:
   - What is FH?
   - Why have I been referred for genetic testing?
   - What happens during pre-test counselling?
   - What do genetic test results mean?"

 - If the question is broad or missing context, ask ONE clarifying follow-up question before answering.
 - Otherwise, answer using only approved sources in a succinct, plain-language style suited to a general patient audience.

OUTPUT FORMAT:
- Use clear headings/subheadings (###) where the answer has multiple parts.
- Use bullet points for lists (e.g. steps, pros/cons, FAQs).
- Bold key terms or important phrases (e.g. **pre-test counselling**, **insurance moratorium**).
- Keep answers succinct — a patient should be able to read and digest the answer quickly, not face a wall of text.
- YOU MUST end every single answer (except redirects) with a short "You might also want to ask:" section listing 2–4 tappable follow-up questions formatted as a bulleted list.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory sessions (for demo purposes)
  const sessions = new Map<string, Array<{role: string, parts: Array<{text: string}>}>>();

  app.post('/api/chat', async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not configured.' });
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      if (!sessions.has(sessionId)) {
        sessions.set(sessionId, []);
      }
      
      const history = sessions.get(sessionId)!;
      history.push({ role: 'user', parts: [{ text: message }] });

      // Set headers for SSE streaming
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.setHeader('X-Accel-Buffering', 'no'); // Disable proxy buffering for instant delivery

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3.5-flash',
        contents: history,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.2, // Lower temperature for factual and structured answers
        }
      });

      let fullText = '';
      for await (const chunk of responseStream) {
        const text = chunk.text;
        if (text) {
          fullText += text;
          res.write(`data: ${JSON.stringify({ text })}\n\n`);
        }
      }

      if (fullText) {
        history.push({ role: 'model', parts: [{ text: fullText }] });
      }

      res.write('data: [DONE]\n\n');
      res.end();
    } catch (error: any) {
       console.error('Error generating content from Gemini API:', error);
       if (!res.headersSent) {
         res.status(500).json({ 
           error: 'Failed to generate response', 
           details: error instanceof Error ? error.message : String(error)
         });
       } else {
         res.write(`data: ${JSON.stringify({ error: 'An error occurred during generation.' })}\n\n`);
         res.end();
       }
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
