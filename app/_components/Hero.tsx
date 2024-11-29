"use client";

import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

export function Hero() {
  return (
    <div className="w-[calc(100%-0rem)] mx-auto h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={255}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full font-thunder"
      >
        <h2 className="text-white text-[5.2rem] lg:text-[14rem] font-bold text-center uppercase tracking-wider">
          Saad Sayyed
        </h2>
        <p className="text-white text-2xl lg:text-4xl max-w-xl lg:mt-20 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link
            href="/ai"
            className="px-4 py-2 text-xl bg-pink-500 hover:bg-pink-700 transition duration-200 rounded-lg text-black"
          >
            Talk to my AI
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-xl hover:bg-pink-500 transition duration-300 hover:text-black rounded-lg text-white"
          >
            Contact
          </Link>
        </div>
      </Vortex>
    </div>
  );
}
