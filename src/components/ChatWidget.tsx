import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Maximize2, Minimize2, MoreHorizontal } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi! I'm Alamin's personal AI assistant. How can I help you today?"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isLoading, isOpen]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setIsLoading(true);

        try {
            const res = await fetch("http://localhost:3001/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, { role: "user", content: userMsg }]
                }),
            });

            const data = await res.json();
            if (data.message) {
                setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
            } else {
                throw new Error("Invalid response");
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "Sorry, I'm having trouble connecting to the server. Please check if the Gemini backend is running."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-[24px] right-[24px] z-[9999] flex flex-col items-end pointer-events-none font-sans">
            {/* Chat Popup */}
            {isOpen && (
                <div className="pointer-events-auto mb-4 w-[340px] h-[480px] bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 border border-zinc-100">
                    {/* Header */}
                    <div className="p-4 bg-white border-b flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold text-sm">
                                    AR
                                </div>
                                <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div>
                                <h3 className="text-zinc-900 font-bold text-sm leading-tight">Alamin's Assistant</h3>
                                <p className="text-zinc-400 text-[10px] font-medium uppercase tracking-wider">Powered by Gemini</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="p-1.5 text-zinc-400 hover:text-zinc-600 transition-colors">
                                <Maximize2 className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => setIsOpen(false)} className="p-1.5 text-zinc-400 hover:text-red-500 transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 bg-[#F8F9FA] overflow-y-auto p-4 space-y-4">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                                {m.role === "assistant" && (
                                    <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">
                                        A
                                    </div>
                                )}
                                <div className={`max-w-[80%] p-3 px-4 rounded-[18px] text-[13px] leading-relaxed shadow-sm ${m.role === "user"
                                    ? "bg-zinc-900 text-white rounded-tr-none"
                                    : "bg-white text-zinc-800 border-zinc-100 border rounded-tl-none font-medium"
                                    }`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">
                                    A
                                </div>
                                <div className="bg-white border p-3.5 px-4 rounded-[18px] rounded-tl-none flex gap-1.5 items-center shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce delay-150"></span>
                                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce delay-300"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-zinc-50">
                        <form onSubmit={handleSend} className="relative flex items-center">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Message Alamin's AI..."
                                className="w-full bg-zinc-50 rounded-[15px] pl-4 pr-12 py-3 text-[13px] text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-200 resize-none max-h-[120px] placeholder:text-zinc-400"
                                rows={1}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 top-2 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-all active:scale-95 disabled:bg-zinc-200"
                            >
                                <Send className="w-3.5 h-3.5" />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto w-[54px] h-[54px] bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 active:scale-95 transition-all"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </button>
        </div>
    );
};
