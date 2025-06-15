
import React from "react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  onClick: () => void;
  mockImageUrl: string;
}

const PRODUCT = {
  name: "Customizable Coffee Cup",
  price: "$8.99",
  description:
    "Design your very own coffee cup! Generate a custom image via chat and see it on your mockup instantly.",
};

export default function ProductCard({
  onClick,
  mockImageUrl,
}: ProductCardProps) {
  return (
    <div
      className="relative group bg-card border shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center cursor-pointer max-w-md w-full mx-auto"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label="Customize product"
    >
      <img
        src={mockImageUrl}
        alt={PRODUCT.name}
        className="w-52 h-52 object-cover rounded-xl border mb-4 bg-white"
        draggable={false}
      />
      <h2 className="text-2xl font-semibold mb-1">{PRODUCT.name}</h2>
      <span className="text-xl font-bold text-primary mb-2">{PRODUCT.price}</span>
      <p className="text-muted-foreground mb-6 text-center">{PRODUCT.description}</p>
      <Button
        className="w-full group-hover:scale-105 transition-transform duration-200"
        tabIndex={-1}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        Customize &amp; Chat
      </Button>
    </div>
  );
}
