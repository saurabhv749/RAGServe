import { Request, Response } from 'express';
import { ask } from '../assistant';

export const askAssistant =  async (req: Request, res: Response) => {
    const { message } = req.body;
  
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: "You did not asked anything.", message: null });
      return;
    }
  
    const generatedResponse = await ask(message);
    res.json({ error: null, message: generatedResponse });
  }

