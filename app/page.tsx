"use client";

import { useEffect } from "react";

import { Hero } from "@/components/hero";
import { Explore } from "@/components/explore";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <>
      <Hero />
      <Explore />
      <div className="h-1000" />
    </>
  );
};

export default Home;
