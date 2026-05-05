import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ─── Knowledge Base ─── */
const KNOWLEDGE_BASE = {
  pricing: "My website packages start from $250 for Basic (1-3 pages), $400-$600 for Standard (4-7 pages), and $700-$1000 for Premium (full-scale projects).",
  delivery: "Delivery usually takes 5–7 days for basic sites, 7–10 days for standard, and 10–14 days for premium projects depending on the complexity.",
  services: "I offer Website Design & Development (React/Tailwind), WordPress Sites (WooCommerce), Landing Pages, UI/UX Design (Figma), and Digital Marketing (SEO).",
  contact: "You can reach Alamin at hello@alaminrafi.com or by filling out the contact form on this website! 📩",
  greeting: "Hi! I'm Alamin's auto-reply assistant. I can help you with pricing, services, and delivery info. What can I help you with? 👋",
  fallback: "I'm not sure about that, but I can definitely tell you about our services, pricing, or delivery timelines! You can also contact Alamin directly at hello@alaminrafi.com."
};

/* ─── Matcher Logic ─── */
const getAutoResponse = (input: string): string => {
  const query = input.toLowerCase();
  
  if (query.includes("price") || query.includes("cost") || query.includes("how much") || query.includes("$") || query.includes("package")) {
    return KNOWLEDGE_BASE.pricing;
  }
  if (query.includes("time") || query.includes("delivery") || query.includes("how long") || query.includes("duration") || query.includes("days")) {
    return KNOWLEDGE_BASE.delivery;
  }
  if (query.includes("service") || query.includes("offer") || query.includes("what can you") || query.includes("build") || query.includes("work")) {
    return KNOWLEDGE_BASE.services;
  }
  if (query.includes("contact") || query.includes("email") || query.includes("talk") || query.includes("hire") || query.includes("message")) {
    return KNOWLEDGE_BASE.contact;
  }
  if (query.includes("hi") || query.includes("hello") || query.includes("hey") || query.includes("help")) {
    return KNOWLEDGE_BASE.greeting;
  }
  
  return KNOWLEDGE_BASE.fallback;
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: KNOWLEDGE_BASE.greeting }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    // Add user message
    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Simulate thinking/typing
    setTimeout(() => {
      const response = getAutoResponse(trimmed);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-[9999] flex flex-col items-end">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] max-w-[340px] sm:w-[380px] h-[480px] sm:h-[500px] bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-100 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="px-4 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm border border-white/30">
                  AR
                </div>
                <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-400 border-2 border-white dark:border-zinc-950 rounded-full" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm leading-tight">Alamin Rafi</h3>
                <p className="text-white/70 text-[10px] font-medium uppercase tracking-wider">Online Assistant</p>
              </div>
            </div>
            <button 
              onClick={handleToggle} 
              title="Close chat"
              aria-label="Close chat"
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-zinc-50 dark:bg-zinc-900/50 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mb-1 ${
                  msg.role === "assistant" ? "bg-gradient-to-br from-violet-600 to-cyan-500 text-white" : "bg-zinc-800 dark:bg-zinc-700 text-white"
                }`}>
                  {msg.role === "assistant" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === "user" 
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-br-sm" 
                    : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-100 dark:border-zinc-700 rounded-bl-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 shrink-0">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about pricing or services..."
                rows={1}
                className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-[13px] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 resize-none transition-all"
              />
              <button
                type="submit"
                title="Send message"
                aria-label="Send message"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-gradient-to-br from-violet-600 to-cyan-500 text-white rounded-xl flex items-center justify-center hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        title={isOpen ? "Close chat" : "Chat with Alamin's Assistant"}
        aria-label={isOpen ? "Close chat" : "Chat with Alamin's Assistant"}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 rotate-90" : "bg-gradient-to-br from-violet-600 to-cyan-500 text-white"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatWidget;
