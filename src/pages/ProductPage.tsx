
import * as React from "react";
import ProductCard from "@/components/ProductCard";
import ChatModal from "@/components/ChatModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const [chatOpen, setChatOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 flex gap-2 items-center group"
        >
          <ArrowLeft size={18} className="transition group-hover:-translate-x-1" />
          Back to Home
        </Button>
        <ProductCard onClick={() => setChatOpen(true)} />
      </div>
      <ChatModal open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}
