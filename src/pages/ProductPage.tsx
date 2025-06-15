
import * as React from "react";
import ProductCard from "@/components/ProductCard";
import ChatModal from "@/components/ChatModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Default coffee cup with empty/white label
const DEFAULT_CUP_IMG =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80";

export default function ProductPage() {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [mockImage, setMockImage] = React.useState(DEFAULT_CUP_IMG);

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 flex gap-2 items-center group"
        >
          <ArrowLeft size={18} className="transition group-hover:-translate-x-1" />
          Back to Home
        </Button>
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold mb-2">Customizable Coffee Cup</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            🎨 Use the chat below to describe the image you want to appear on your coffee cup! <br />
            We'll generate 4 images—pick your favorite to see it on your mockup in real-time.
          </p>
        </div>
        <ProductCard mockImageUrl={mockImage} onClick={() => setChatOpen(true)} />
      </div>
      <ChatModal
        open={chatOpen}
        onOpenChange={setChatOpen}
        onImageSelected={setMockImage}
      />
    </div>
  );
}
