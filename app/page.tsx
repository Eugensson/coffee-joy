"use client";

import { useEffect } from "react";

import { Hero } from "@/components/hero";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div>
      <Hero />
      <div className="h-1000" />
    </div>
  );
};

export default Home;
