
import * as React from "react";
// import ProductCard from "@/components/ProductCard";
import MugModel from "@/components/MugModel";
import ChatModal from "@/components/ChatModal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Default coffee cup with empty/white label
const DEFAULT_CUP_IMG =
  "image.png";

export default function ProductPage() {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [mockImage, setMockImage] = React.useState(DEFAULT_CUP_IMG);

  const handleCustomizeClick = () => {
    setChatOpen(true);
  };
  const PRODUCT = {
    name: "Customizable Coffee Cup",
    price: "$8.99",
    description:
      "Design your very own coffee cup! Generate a custom image via chat and see it on your mockup instantly.",
  };
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
        {/* Replace ProductCard with 3D model */}
        <div className="border rounded-lg overflow-hidden">
          <MugModel imageUrl={mockImage} />
        </div>
        <h2 className="text-2xl font-semibold mb-1">{PRODUCT.name}</h2>
          <span className="text-xl font-bold text-primary mb-2">{PRODUCT.price}</span>
          <p className="text-muted-foreground mb-6 text-center">{PRODUCT.description}</p>
          <Button
            className="w-full group-hover:scale-105 transition-transform duration-200"
            tabIndex={-1}
            onClick={(e) => {
              e.stopPropagation();
              handleCustomizeClick();
            }}
          >
            Customize &amp; Chat
          </Button>
        {/* <ProductCard mockImageUrl={mockImage} onClick={() => setChatOpen(true)} /> */}
        <div className="w-full flex justify-center mt-8">
          <Button
            size="lg"
            className="flex gap-2 items-center px-10 py-4 text-base font-semibold shadow-lg"
            onClick={() => navigate("/checkout", { state: { mockImage } })}
          >
            <ShoppingCart size={20} />
            Checkout
          </Button>
        </div>
      </div>
      <ChatModal
        open={chatOpen}
        onOpenChange={setChatOpen}
        onImageSelected={setMockImage}
      />
    </div>
  );
}
