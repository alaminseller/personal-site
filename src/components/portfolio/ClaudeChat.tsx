import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot, User, Minimize2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function ClaudeChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hello! I'm Alamin's AI assistant. I can help you with questions about his SEO expertise, digital marketing experience, or content strategies. How can I help you today?"
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isLoading, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, { role: "user", content: userMessage }].map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                }),
            });

            if (!response.ok) throw new Error("Failed to send message");

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let assistantMessage = "";

            // Add a placeholder message for the assistant that we'll update with chunks
            setMessages(prev => [...prev, { role: "assistant", content: "" }]);

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    assistantMessage += chunk;

                    // Update the last message (the placeholder) with the current streaming content
                    setMessages(prev => {
                        const newMessages = [...prev];
                        newMessages[newMessages.length - 1] = {
                            role: "assistant",
                            content: assistantMessage
                        };
                        return newMessages;
                    });
                }
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact Alamin directly."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[1001] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="mb-4 w-[90vw] sm:w-[400px] h-[500px] shadow-2xl rounded-2xl overflow-hidden"
                    >
                        <Card className="h-full flex flex-col border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl">
                            <CardHeader className="p-4 border-b dark:border-zinc-800 flex flex-row items-center justify-between space-y-0">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-zinc-950 to-zinc-700 dark:from-white dark:to-zinc-400 flex items-center justify-center text-white dark:text-zinc-950 font-bold">
                                            AR
                                        </div>
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-zinc-900 bg-green-500"></span>
                                    </div>
                                    <div>
                                        <CardTitle className="text-sm font-semibold">Alamin's Assistant</CardTitle>
                                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Powered by Claude 3.5 Sonnet</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                                    <Minimize2 className="h-4 w-4" />
                                </Button>
                            </CardHeader>

                            <CardContent className="flex-1 p-0 overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/20">
                                <ScrollArea className="h-full p-4">
                                    <div className="space-y-4">
                                        {messages.map((m, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={cn(
                                                    "flex gap-3",
                                                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                                                )}
                                            >
                                                <Avatar className="h-8 w-8 mt-1 border border-zinc-200 dark:border-zinc-800 shrink-0">
                                                    {m.role === "assistant" ? (
                                                        <>
                                                            <AvatarImage src="/favicon.svg" />
                                                            <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800"><Bot className="h-4 w-4" /></AvatarFallback>
                                                        </>
                                                    ) : (
                                                        <AvatarFallback className="bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"><User className="h-4 w-4" /></AvatarFallback>
                                                    )}
                                                </Avatar>
                                                <div
                                                    className={cn(
                                                        "max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                                                        m.role === "user"
                                                            ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 rounded-tr-none shadow-sm"
                                                            : "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 rounded-tl-none shadow-sm"
                                                    )}
                                                >
                                                    {m.content || (
                                                        <div className="flex gap-1 py-1">
                                                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce delay-0"></span>
                                                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce delay-150"></span>
                                                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce delay-300"></span>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                        {isLoading && messages[messages.length - 1].role === "user" && (
                                            <div className="flex gap-3">
                                                <Avatar className="h-8 w-8 mt-1 border border-zinc-200 dark:border-zinc-800 shrink-0">
                                                    <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800"><Bot className="h-4 w-4" /></AvatarFallback>
                                                </Avatar>
                                                <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-4 py-3 rounded-2xl rounded-tl-none">
                                                    <div className="flex gap-1">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce delay-0"></span>
                                                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce delay-150"></span>
                                                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce delay-300"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>
                                </ScrollArea>
                            </CardContent>

                            <CardFooter className="p-4 border-t dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50">
                                <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                                    <Input
                                        placeholder="Type a message..."
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1 bg-zinc-100/50 dark:bg-zinc-900/50 border-transparent focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-full h-11 px-4"
                                    />
                                    <Button
                                        type="submit"
                                        size="icon"
                                        disabled={isLoading || !input.trim()}
                                        className="h-11 w-11 rounded-full shrink-0 bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-950"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "h-14 w-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
                    isOpen
                        ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 ring-2 ring-zinc-300 dark:ring-zinc-700"
                        : "bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950"
                )}
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </motion.button>
        </div>
    );
}
