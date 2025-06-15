
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

interface ChatModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImageSelected: (imgUrl: string) => void;
}

// You can replace these with local images or Unsplash/placeholder images.
const MOCK_GEN_IMAGES = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=256&q=80",
];

export default function ChatModal({
  open,
  onOpenChange,
  onImageSelected,
}: ChatModalProps) {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! What kind of image would you like on your coffee cup mockup? (e.g., 'a cat with sunglasses', 'floral pattern', etc.)",
    },
  ]);
  const [input, setInput] = React.useState("");
  const [generating, setGenerating] = React.useState(false);
  const [generatedImages, setGeneratedImages] = React.useState<string[] | null>(
    null
  );

  const chatRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open, generatedImages]);

  function handleSend() {
    if (!input.trim() || generating) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "Generating 4 image options for your description..." },
    ]);
    setGenerating(true);
    setInput("");
    setTimeout(() => {
      // Here, in real app, integrate image generation API and get results.
      setGeneratedImages([...MOCK_GEN_IMAGES]);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Here are 4 images. Click one to put it on your coffee cup mockup!",
        },
      ]);
      setGenerating(false);
    }, 1500);
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  function handleImageSelect(img: string) {
    onImageSelected(img);
    setGeneratedImages(null);
    setMessages([
      {
        role: "assistant",
        content: "Hi! What kind of image would you like on your coffee cup mockup? (e.g., 'a cat with sunglasses', 'floral pattern', etc.)",
      },
      {
        role: "assistant",
        content: "Great choice! You can generate more, or close the chat.",
      },
    ]);
    setInput("");
    setGenerating(false);
    onOpenChange(true); // leave modal open for further changes.
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl shadow-2xl">
        <DialogHeader className="border-b p-6 bg-muted">
          <DialogTitle className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-primary p-2 rounded-full mr-2">
              <Image strokeWidth={2.5} size={22} className="text-primary-foreground" />
            </span>
            Coffee Cup Customization Chat
          </DialogTitle>
          <DialogClose asChild>
            <Button variant="outline" size="sm" className="absolute right-6 top-7">
              Close
            </Button>
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
            {generatedImages && (
              <div className="flex gap-4 flex-wrap justify-center mt-3">
                {generatedImages.map((img, i) => (
                  <button
                    type="button"
                    key={img}
                    className="focus:outline-none border-2 border-transparent rounded-xl hover:border-primary transition active:scale-95"
                    onClick={() => handleImageSelect(img)}
                  >
                    <img
                      src={img}
                      alt={`Generated option ${i + 1}`}
                      className="w-32 h-32 rounded-xl object-cover shadow"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2 border-t p-4 bg-background"
            autoComplete="off"
          >
            <Input
              aria-label="Type your request"
              placeholder="e.g., sunrise over mountains, cartoon dog, geometric art..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              className="flex-1"
              maxLength={256}
              disabled={generating}
              autoFocus
            />
            <Button type="submit" className="px-6" disabled={!input.trim() || generating}>
              {generating ? "Generating..." : "Send"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
