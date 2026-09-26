"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import FitLogContext from "../context/FitLogContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { plan, saved } = useContext(FitLogContext);

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#252a32]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Dumbel logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="flex h-7 w-7 items-center justify-center text-[#c8ff00] bg-[#08090b] backdrop-blur"
            src="/logo.png"
            alt="FITLOG"
            width={100}
            height={30}
          />
          <span className="font-display text-lg font-bold tracking-wide">
            FITLOG
          </span>
        </Link>
        {/* navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-wide transition ${pathname === "/" ? "bg-[#c8ff00] font-bold text-black" : "border border-[#343941] bg-[#111318] font-medium text-zinc-500 hover:border-[#4a5059] hover:text-white"}`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-wide transition ${pathname === "/my-plan" ? "bg-[#c8ff00] font-bold text-black" : "font-medium text-zinc-400 hover:text-white"}`}
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
              {plan.length}
            </span>
          </Link>

          <Link
            href=""
            className="flex items-center gap-1.5 rounded-full border border-[#343941] px-3 py-1.5 text-[10px] font-medium uppercase text-zinc-400"
          >
            Saved
            <span className="text-white">{saved.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
