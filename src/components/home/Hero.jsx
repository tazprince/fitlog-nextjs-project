import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="px-5 pt-5 lg:px-8">
      <div className="mx-auto flex min-h-100 max-w-7xl flex-col items-center justify-between overflow-hidden rounded-xl border border-[#252a32] bg-[#14171d] px-6 py-8 sm:px-5 lg:flex-row lg:px-10">
        <div className="w-full lg:w-[65%]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8ff00]">
            Workout Library
          </p>
          {/* Heading */}
          <h1 className="text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
            Train with Intent. log <br />
            Every set
          </h1>
          {/* Description */}
          <p className="mt-6 max-w-lg text-xs leading-6 text-zinc-500 sm:text-sm">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#c8ff00] px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-[#d5ff4d]"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Image */}
        <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-[35%] lg:justify-end">
          <Image
            src="/banner.png"
            alt="Workout"
            width={220}
            height={220}
            className="h-auto w-32 sm:w-45 lg:w-75"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
