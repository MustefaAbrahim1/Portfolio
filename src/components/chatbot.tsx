"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { MessageSquare, Bot, User, Send, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getChatbotResponse } from "@/app/actions";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! I'm a chatbot assistant. Ask me anything about this developer's skills or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const scrollAreaViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaViewportRef.current) {
      scrollAreaViewportRef.current.scrollTo({
        top: scrollAreaViewportRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");

    startTransition(async () => {
      const botResponse = await getChatbotResponse(currentInput);
      const botMessage: Message = { role: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mb-2"
            >
              <Card className="w-[calc(100vw-3rem)] max-w-sm h-[70vh] flex flex-col shadow-2xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-headline text-xl">Chat Assistant</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden p-0">
                  <ScrollArea className="h-full">
                    <div className="p-6 flex flex-col gap-4" ref={scrollAreaViewportRef}>
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-3 ${
                            message.role === "bot" ? "" : "justify-end"
                          }`}
                        >
                          {message.role === "bot" && (
                            <Avatar className="h-8 w-8 border-2 border-primary">
                              <AvatarFallback><Bot className="h-5 w-5 text-primary"/></AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`rounded-lg px-3 py-2 max-w-[80%] break-words ${
                              message.role === "bot"
                                ? "bg-muted"
                                : "bg-primary text-primary-foreground"
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                          {message.role === "user" && (
                            <Avatar className="h-8 w-8">
                               <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      ))}
                      {isPending && (
                        <div className="flex items-start gap-3">
                           <Avatar className="h-8 w-8 border-2 border-primary">
                              <AvatarFallback><Bot className="h-5 w-5 text-primary"/></AvatarFallback>
                            </Avatar>
                          <div className="rounded-lg px-3 py-2 bg-muted flex items-center">
                            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter>
                  <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                    <Input
                      id="message"
                      placeholder="Ask a question..."
                      className="flex-1"
                      autoComplete="off"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={isPending}
                    />
                    <Button type="submit" size="icon" disabled={isPending || !input.trim()}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            size="lg"
            className="rounded-full w-16 h-16 shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Chat"
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>
    </>
  );
}
