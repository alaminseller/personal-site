import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, MoreHorizontal, Minimize2 } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! I'm Alamin's personal AI assistant. How can I help you learn about his SEO expertise or digital marketing today?"
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
            const res = await fetch("/api/chat", {
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
                content: "Sorry, I'm having trouble connecting to the server. Please try again."
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
        <div className="fixed bottom-[24px] right-[24px] z-[9999] flex flex-col items-end pointer-events-none">
            {/* Chat Popup */}
            {isOpen && (
                <div className="pointer-events-auto mb-4 w-[340px] h-[480px] bg-white rounded-[20px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
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
                                <p className="text-zinc-500 text-[11px]">Powered by Claude</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-600 transition-colors">
                            <Minimize2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 bg-zinc-50 overflow-y-auto p-4 space-y-4">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                                {m.role === "assistant" && (
                                    <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center text-white text-[10px] shrink-0 mt-1">
                                        A
                                    </div>
                                )}
                                <div className={`max-w-[80%] p-3 rounded-[15px] text-xs leading-relaxed ${m.role === "user"
                                    ? "bg-zinc-900 text-white rounded-tr-none"
                                    : "bg-white text-zinc-800 border rounded-tl-none"
                                    }`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex gap-2">
                                <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center text-white text-[10px] shrink-0 mt-1">
                                    A
                                </div>
                                <div className="bg-white border p-3 rounded-[15px] rounded-tl-none flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce delay-150"></span>
                                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce delay-300"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t">
                        <form onSubmit={handleSend} className="relative flex items-center">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your message..."
                                className="w-full bg-zinc-100 rounded-[15px] pl-3 pr-10 py-2.5 text-xs text-zinc-900 focus:outline-none resize-none max-h-[100px]"
                                rows={1}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 top-1.5 w-7 h-7 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors disabled:bg-zinc-300"
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
                className="pointer-events-auto w-[54px] h-[54px] bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </button>
        </div>
    );
};
