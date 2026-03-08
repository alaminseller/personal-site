const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
app.use(cors());
app.use(express.json());

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        const response = await client.messages.create({
            model: 'claude-3-5-haiku-20241022',
            max_tokens: 1024,
            system: "You are Alamin's personal AI assistant on his portfolio website. Help visitors learn about his SEO expertise, digital marketing experience, and content strategies. Be helpful, concise and professional.",
            messages: messages
        });
        res.json({ message: response.content[0].text });
    } catch (error) {
        console.error('Claude API Error:', error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
