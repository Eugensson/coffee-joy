"use client";

import { useEffect } from "react";

import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { About } from "@/components/about";
import { Explore } from "@/components/explore";
import { OpeningHours } from "@/components/opening-hours";

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
      <About />
      <Menu />
      <OpeningHours />
      <div className="h-1000" />
    </>
  );
};

export default Home;
