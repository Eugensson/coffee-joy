"use client";

import { Badge } from "@/components/badge";
import { Separator } from "@/components/separator";

export const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white" id="home">
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]" />
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container flex flex-col xl:flex-row items-center z-20 relative">
        <div
          data-scoll
          data-scroll-speed="0.4"
          className="h-full xl:pb-12 flex-1 flex flex-col items-center justify-center gap-10 text-center"
        >
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden xl:flex xl:size-40" />
            <h1 className="h1 text-white">
              <span className="text-accent">Coffee</span> & Joy
            </h1>
          </div>
          <Separator />
          <p className="lead font-light max-w-75 md:max-w-107.5 xl:max-w-140 mb-4">
            Experience the joy of specialty coffee in a cozy café where every
            cup is brewed with passion, warmth, and a touch of artistry.
          </p>
          <button type="button" className="btn">
            Our menu
          </button>
        </div>
      </div>
    </section>
  );
};
