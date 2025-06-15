
// Home page with beautiful layout, expanded with CTA, and a mockup carousel

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Example mockup images--replace with yours as needed.
const MOCK_MUG_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    label: "Space Cat",
  },
  {
    url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    label: "Abstract Pattern",
  },
  {
    url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
    label: "Cozy Living Room",
  },
  {
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    label: "Forest Lights",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    label: "Lake & Trees",
  },
];

const PRODUCT = {
  name: "Customizable Coffee Cup",
  price: "$8.99",
  description:
    "Design your own coffee cup! Generate a unique image using our AI chat and place it on your personal mockup.",
  img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-background py-20 px-6">
      {/* Hero */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-12 gap-10 place-items-center">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-2">
            Make your <span className="text-primary">perfect coffee cup</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Generate your own artwork with our AI chat and see it instantly on a cup mockup. Try descriptors like <em>"floral design"</em>, <em>"space cat"</em>, or your own ideas!
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

      {/* Tip/info */}
      <div className="mt-10 text-muted-foreground text-sm max-w-xl text-center">
        <span className="font-semibold">How does it work?</span> Use the chat to describe any image you'd like on your cup—after you hit send, four unique images are generated for you to pick from. Chosen image appears instantly on your very own mug mockup!
      </div>

      {/* Carousel of Generated Mockups */}
      <section className="w-full max-w-xl mt-16 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">Recent Mug Designs</h2>
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {MOCK_MUG_IMAGES.map(({ url, label }, idx) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <figure className="flex flex-col items-center">
                    <img
                      src={url}
                      alt={label}
                      className="object-cover rounded-xl shadow-lg w-56 h-56 border bg-white mb-3"
                      draggable={false}
                    />
                    <figcaption className="text-muted-foreground text-base">{label}</figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      
      {/* Secondary Call to Action Section */}
      <section className="w-full py-12 border-t max-w-3xl flex flex-col items-center gap-7">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center">Ready to design your personalized coffee mug?</h3>
        <p className="text-lg text-muted-foreground text-center max-w-xl">
          Unleash your creativity! Describe <span className="text-primary font-semibold">anything</span> you'd like on your mug, then choose your favorite from four AI-generated images. 
          Place your design on a real product and make your mornings unique.
        </p>
        <Link to="/product">
          <Button className="px-8 py-4 text-lg shadow-xl animate-bounce hover:scale-110">
            Create My Mug Now
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Index;

