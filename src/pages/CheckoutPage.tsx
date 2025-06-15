
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const PRODUCT = {
  name: "Customizable Coffee Cup",
  price: "$8.99",
  description:
    "Your custom AI-generated cup! Please review your design and checkout below.",
};

export default function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const mockImage =
    location.state?.mockImage ||
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="min-h-screen flex flex-col items-center bg-background py-10 px-4">
      <div className="w-full max-w-lg mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 flex gap-2 items-center group"
        >
          <ArrowLeft size={18} className="transition group-hover:-translate-x-1" />
          Back
        </Button>
        <h1 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
          Checkout
        </h1>
        <div className="bg-secondary/40 rounded-2xl shadow-md mb-8 p-6 flex flex-col items-center gap-4">
          <img
            src={mockImage}
            alt={PRODUCT.name}
            className="rounded-xl shadow w-40 h-40 object-cover border bg-white aspect-square"
            draggable={false}
          />
          <div className="w-full flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">{PRODUCT.name}</span>
            <span className="text-primary text-xl font-bold">{PRODUCT.price}</span>
            <p className="text-muted-foreground mt-2 mb-2 text-center">{PRODUCT.description}</p>
          </div>
        </div>
        <form
          className="bg-secondary/40 rounded-xl p-6 shadow-md flex flex-col gap-5"
          onSubmit={e => {
            e.preventDefault();
            alert("This is a demo. Payment processing coming soon!");
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded bg-background"
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Shipping Address</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded bg-background"
              required
              placeholder="123 Coffee St, City, Country"
            />
          </div>
          <Button type="submit" className="w-full mt-2 py-3 text-base font-semibold">
            Place Order
          </Button>
        </form>
      </div>
    </div>
  );
}
