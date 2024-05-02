"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Particles } from "./particles";

export const Hero = () => {
  return (
    <div className="pt-20">
      <Particles className="absolute inset-0 -z-10" />
      <div className="px-8 text-center">
        <div className="mb-6" data-aos="fade-down">
          <div className="relative inline-flex before:absolute before:inset-0">
            <Link
              href={"https://github.com/angelDova"}
              className="group inline-flex w-full items-center justify-center rounded-full border border-slate-100/40 px-3 py-1 text-sm font-medium text-zinc-300 transition duration-150 ease-in-out hover:text-white"
              target="_blank"
            >
              <span className="relative inline-flex items-center">
                My Socials{" "}
                <span className="text-primary-500 ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
        </div>
        <h1
          className="bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400 bg-clip-text pb-4  text-7xl font-extrabold tracking-tight text-transparent lg:text-8xl"
          data-aos="fade-down"
        >
          Track Your Budget
        </h1>
        <p
          className="mb-8 text-lg font-medium text-zinc-300/40"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Transform your financing with a budget based tracker
        </p>
        <div
          className="mx-auto flex max-w-xs flex-col items-center gap-4 sm:inline-flex  sm:max-w-none sm:flex-row sm:justify-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <Link
            href={"#calendly"}
            className="font-medioum group flex w-full items-center justify-center whitespace-nowrap rounded bg-gradient-to-r from-white/80 via-white to-white/80 px-4 py-1.5 text-zinc-900 transition duration-150 ease-in-out hover:bg-white"
          >
            Book a free call
            <ArrowRight className="text-primary-500 ml-1 h-3 w-3 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
