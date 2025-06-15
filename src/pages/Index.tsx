
// Home page with beautiful layout and CTA to the product page

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PRODUCT = {
  name: "Ultimate Productivity Laptop",
  price: "$1,499",
  description: "A powerful laptop engineered for performance and style. Perfect for creators and professionals.",
  img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-20 px-6">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-12 gap-10 place-items-center">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-2">
            Discover the <span className="text-primary">Ultimate Productivity Laptop</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Unlock your potential with blazing speed, seamless multitasking, and stunning design. Create, work, or play without limits.
          </p>
          <p className="text-xl font-semibold mb-4 text-primary">{PRODUCT.price}</p>
          <Link to="/product">
            <Button size="lg" className="px-10 py-5 text-lg shadow-lg transition hover:scale-105">
              Customize &amp; Buy Now
            </Button>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center">
          <img
            src={PRODUCT.img}
            alt={PRODUCT.name}
            className="rounded-2xl shadow-xl w-full max-w-md object-cover border"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
