import Anthropic from "@anthropic-ai/sdk";

// Vercel Edge Runtime for better performance and streaming support
export const config = {
  runtime: "edge",
};

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export default async function handler(req: Request) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Call Claude API with streaming
    const stream = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 4096,
      messages,
      stream: true,
    });

    // Create a streaming response back to the client
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            // Only send text deltas to the client
            if (chunk.type === "content_block_delta" && "text" in chunk.delta) {
              controller.enqueue(encoder.encode(chunk.delta.text));
            }
          }
          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error: any) {
    console.error("Claude API Error:", error);
    return new Response(JSON.stringify({ 
      error: "Failed to communicate with Claude.",
      details: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
