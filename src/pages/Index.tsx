
// Home page with beautiful layout and CTA to the product page

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PRODUCT = {
  name: "Customizable Coffee Cup",
  price: "$8.99",
  description:
    "Design your own coffee cup! Generate a unique image using our AI chat and place it on your personal mockup.",
  img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-20 px-6">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-12 gap-10 place-items-center">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-2">
            Make your <span className="text-primary">perfect coffee cup</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Generate your own artwork using a chat and see it instantly on the cup mockup. Try descriptors like <em>"floral design"</em>, <em>"space cat"</em>, or your own ideas!
          </p>
          <p className="text-xl font-semibold mb-4 text-primary">{PRODUCT.price}</p>
          <Link to="/product">
            <Button size="lg" className="px-10 py-5 text-lg shadow-lg transition hover:scale-105">
              Start Customizing
            </Button>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center">
          <img
            src={PRODUCT.img}
            alt={PRODUCT.name}
            className="rounded-2xl shadow-xl w-full max-w-md object-cover border bg-white"
            draggable={false}
          />
        </div>
      </div>
      <div className="mt-10 text-muted-foreground text-sm max-w-xl text-center">
        <span className="font-semibold">Tip:</span> After describing your desired image in the chat, you'll choose one of four generated options. Your pick instantly updates the product mock!
      </div>
    </div>
  );
};

export default Index;
