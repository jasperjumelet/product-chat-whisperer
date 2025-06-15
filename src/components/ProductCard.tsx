
import React from "react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  onClick: () => void;
}

const PRODUCT = {
  name: "Ultimate Productivity Laptop",
  price: "$1,499",
  description: "A powerful laptop engineered for performance and style. Perfect for creators and professionals.",
  img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
};

export default function ProductCard({ onClick }: ProductCardProps) {
  return (
    <div
      className="relative group bg-card border shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center cursor-pointer max-w-md w-full mx-auto"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label="Customize product"
    >
      <img
        src={PRODUCT.img}
        alt={PRODUCT.name}
        className="w-64 h-40 object-cover rounded-xl border mb-4 group-hover:scale-105 transition-transform duration-300"
        draggable={false}
      />
      <h2 className="text-2xl font-semibold mb-1">{PRODUCT.name}</h2>
      <span className="text-xl font-bold text-primary mb-2">{PRODUCT.price}</span>
      <p className="text-muted-foreground mb-6 text-center">{PRODUCT.description}</p>
      <Button
        className="w-full group-hover:scale-105 transition-transform duration-200"
        tabIndex={-1}
        onClick={e => { e.stopPropagation(); onClick(); }}
      >
        Customize &amp; Chat
      </Button>
    </div>
  );
}
