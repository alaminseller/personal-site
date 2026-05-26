import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction: "You are Alamin's personal AI assistant on his portfolio website. Help visitors learn about his SEO expertise, digital marketing and content strategies. Be helpful, concise and professional. Reply in the same language the user uses."
        });

        // Gemini history format
        const history = messages.slice(0, -1).map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
        }));

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(messages[messages.length - 1].content);

        res.json({ message: result.response.text() });
    } catch (error) {
        console.error('Gemini Error:', error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
