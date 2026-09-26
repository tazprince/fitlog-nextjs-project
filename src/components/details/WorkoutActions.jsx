"use client";

import { useContext } from "react";
import { toast } from "sonner";

import { FitLogContext } from "../context/FitLogContext";
import { Bookmark, CalendarPlus } from "lucide-react";

export default function WorkoutActions({ workout }) {
  const { plan, saved, addToPlan, addToSaved } = useContext(FitLogContext);

  const handleAddToPlan = () => {
    const alreadyExists = plan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      toast.info("Workout is already in today's plan.");
      return;
    }

    addToPlan(workout);

    toast.success("Added to today's plan!");
  };

  const handleSave = () => {
    const alreadyExists = saved.some((item) => item.id === workout.id);

    if (alreadyExists) {
      toast.info("Workout is already saved.");
      return;
    }

    addToSaved(workout);

    toast.success("Saved for later!");
  };

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      {/* Add to Today's Plan */}
      <button
        onClick={handleAddToPlan}
        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#c8ff00] px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-[#d5ff4d] hover:cursor-alias"
      >
        {/* <CheckCircle2 size={15} /> */}
        <CalendarPlus size={15} />
        Add to Today&apos;s Plan
      </button>

      {/* Save for Later */}
      <button
        onClick={handleSave}
        className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#343941] bg-[#101217] px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00] hover:cursor-alias"
      >
        <Bookmark size={15} />
        Save for Later
      </button>
    </div>
  );
}
