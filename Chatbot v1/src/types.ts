export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export interface ChatSession {
  sessionId: string;
}
