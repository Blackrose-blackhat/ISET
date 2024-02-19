"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Hero from "@/components/Hero";

function SplashScreen({isAnimatingOut}:any) {
  const words = "unleashing the power of entrepreneurship";
  return (
    <div className={`h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md ${isAnimatingOut ? 'animate-out' : ''}`}>
      <TextGenerateEffect className="text-6xl uppercase" words={words} />

      <div className="w-full h-40 relative">
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
    }, 8000); // Change this to control the duration of the splash screen

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      {isLoading && <SplashScreen isAnimatingOut={isAnimatingOut} />}
      {!isLoading && <section>
        <Hero />
        </section>}
    </main>
  );
}