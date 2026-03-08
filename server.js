const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.json || req.body;

        if (!messages) {
            return res.status(400).json({ error: 'Messages are required' });
        }

        const response = await anthropic.messages.create({
            model: "claude-3-5-haiku-20241022", // Using the correct current haiku name
            max_tokens: 1024,
            system: "You are Alamin's personal AI assistant. Help visitors learn about his SEO expertise, digital marketing experience, and content strategies. Be concise and professional.",
            messages: messages.map(m => ({ role: m.role, content: m.content })),
        });

        res.json({ message: response.content[0].text });
    } catch (error) {
        console.error('Anthropic API Error:', error);
        res.status(500).json({ error: 'Failed to communicate with Claude' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
