import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#252a32]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Dumbel logo */}
        <Link href="/" className="flex items-center gap-2">
            <Image className="flex h-7 w-7 items-center justify-center text-[#c8ff00] bg-[#08090b] backdrop-blur" src="/logo.png" alt="FITLOG" width={100} height={30} />
          <span className="font-display text-lg font-bold tracking-wide">
            FITLOG
          </span>
        </Link>
        {/* navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className="rounded-full bg-[#c8ff00] px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-black"
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className="rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-zinc-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </nav>
        {/* counters (plan and saved) */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full bg-[#c8ff00] px-3 py-1.5 text-[10px] font-bold uppercase text-black"
          >
            Plan
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[9px] text-[#c8ff00]">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full border border-[#343941] px-3 py-1.5 text-[10px] font-medium uppercase text-zinc-400"
          >
            Saved
            <span className="text-white">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
