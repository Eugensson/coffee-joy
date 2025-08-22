"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Badge } from "@/components/badge";
import { Separator } from "@/components/separator";

import { ABOUT_DATA } from "@/constants";

export const About = () => {
  const scrollTriggerRef = useRef<HTMLDivElement>(null);
  const scrollableSectionRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1000vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <ul
          ref={scrollableSectionRef}
          className="h-screen py-14 w-[300vw] flex relative"
        >
          {ABOUT_DATA.map((item, index) => (
            <li
              key={index}
              className="relative w-screen h-screen flex flex-col justify-center items-center"
            >
              <div className="container mx-auto">
                <div className="relative flex gap-7.5">
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="size-40" />
                    <div className="max-w-150 text-center">
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">
                          {item.title.split(" ")[1]}
                        </span>
                      </h2>
                      <Separator className="mb-8" />
                      <p className="leading-relaxed mb-16 px-8 xl:px-0">
                        {item.description}
                      </p>
                      <button type="button" className="btn">
                        See more
                      </button>
                    </div>
                  </div>
                  <div className="hidden xl:flex flex-1 w-full h-[80vh] relative">
                    <Image
                      src={item.imgSrc}
                      alt="Coffee maker process"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
