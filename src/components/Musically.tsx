import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function Musically() {
  return (
    <div className="relative w-full mt-[-5rem] bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <Spotlight
        className="-top-78 lg:left-[7rem] md:left-60 md:-top-20"
        fill="yellow"
      />

      <div>
        <h1 className="text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-[12rem] lg:text-9xl">
          Musically
        </h1>
      </div>

      <div className="w-[40rem] h-38 bg-transparent mb-4 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent mask-image: radial-gradient(350px 200px at top, transparent 20%, white)"></div>
      </div>

      <div className="mt-[-6.5rem] md:mt-[-14rem] lg:mt-[-14rem]">
        <h1 className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <br /> Master the art of music
        </h1>
      </div>

      <div className="md:mt-[-2rem] flex flex-col gap-1 justify-center items-center">
        <p className="font-normal mt-[3.5rem] lg:mt-20 text-base text-neutral-300 max-w-lg text-center mx-auto z-50">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential
        </p>
        <div className="mt-[2rem]">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href="/courses"> Explore Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
