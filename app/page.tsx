"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Hero from "@/components/Hero";

function SplashScreen({ isAnimatingOut }: any) {
  const words = "unleashing the power of entrepreneurship";
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center align-middle overflow-hidden rounded-md bg-neutral-950  ">
      <TextGenerateEffect className="text-center" words={words} />

      <div className="w-full h-40 relative mx-2 lg:mx-0">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
    </div>
  );
}
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      setIsLoading(false);
    }, 3000); // Change this to control the duration of the splash screen

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between -mt-24 ">
      {isLoading && <SplashScreen isAnimatingOut={isAnimatingOut} />}
      {!isLoading && (
        <section className="w-full ">
          <Hero />
          
          <div className="w-full justify-center  items-center flex flex-col py-10">
            <p className="text-4xl font-bold text-orange-800">What is ISET?</p>
            <p className="text-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec varius elementum, enim nibh suscipit nulla, at volutpat dui mauris sed metus. Nulla facilisi.</p>
          </div>
        </section>
      )}
    </main>
  );
}
