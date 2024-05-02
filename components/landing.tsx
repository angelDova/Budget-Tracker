"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Hero } from "./hero";
import { EditedVideos } from "./edited-videos";
import { EditedShorts } from "./edited-shorts";
import { Channels } from "./channels";
import { Calendly } from "./calendly";
import { Footer } from "./footer";

export const Landing = () => {
  // Data AOS Animations
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <div className="relative mx-auto min-h-screen max-w-5xl items-center justify-center space-y-80 px-4 pb-16 pt-32 sm:px-6 md:pb-32 md:pt-52">
        {/* Hero */}
        <Hero />

        {/* Edited Videos*/}
        <EditedVideos />

        {/* Shorts Edited Videos*/}

        <EditedShorts />

        {/* Channels Worked With*/}
        <Channels />

        {/* Calendly Booking Page*/}
        <Calendly />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
