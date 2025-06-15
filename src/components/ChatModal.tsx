
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { messageSquare } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ChatModal({ open, onOpenChange }: ChatModalProps) {
  const [messages, setMessages] = React.useState<Message[]>([
    { role: "assistant", content: "Hello! What would you like to customize or add to your laptop?" }
  ]);
  const [input, setInput] = React.useState("");
  const chatRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  function handleSend() {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      {
        role: "assistant",
        content: `You said: "${input}". (This is an example response. In a real app, an assistant would respond based on your request.)`,
      },
    ]);
    setInput("");
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl shadow-2xl">
        <DialogHeader className="border-b p-6 bg-muted">
          <DialogTitle className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-primary p-2 rounded-full mr-2">
              <messageSquare strokeWidth={2.5} size={22} className="text-primary-foreground" />
            </span>
            Product Customization Chat
          </DialogTitle>
          <DialogClose asChild>
            <Button variant="outline" size="sm" className="absolute right-6 top-7">Close</Button>
          </DialogClose>
        </DialogHeader>
        <div className="h-[400px] flex flex-col bg-background">
          <div ref={chatRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "assistant"
                    ? "flex gap-3 items-start"
                    : "flex gap-3 items-start flex-row-reverse"
                }
              >
                <div
                  className={
                    msg.role === "assistant"
                      ? "bg-secondary px-4 py-2 rounded-lg shadow-sm max-w-lg text-sm"
                      : "bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-md max-w-lg text-sm"
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={e => { e.preventDefault(); handleSend(); }}
            className="flex gap-2 border-t p-4 bg-background"
            autoComplete="off"
          >
            <Input
              aria-label="Type your request"
              placeholder="e.g., Add more RAM, change color, engrave my name..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              className="flex-1"
              maxLength={256}
              autoFocus
            />
            <Button type="submit" className="px-6" disabled={!input.trim()}>
              Send
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
