"use client";

import { useContext } from "react";
import Link from "next/link";
import { FitLogContext } from "../context/FitLogContext";
import PlanCard from "./PlanCard";

const PlanDetails = () => {
  const { plan, saved } = useContext(FitLogContext);

  // Total Minutes
  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  // Total Calories
  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <main className="min-h-screen bg-[#08090b] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <h1 className="font-display text-4xl font-bold uppercase leading-none">
            My Plan
          </h1>

          <p className="mt-3 text-xs text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {/* Exercises */}
          <div className="rounded-xl border border-[#252a32] bg-[#101217] p-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">
              Exercises
            </p>

            <p className="mt-3 font-display text-4xl font-bold text-[#c8ff00]">
              {plan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="rounded-xl border border-[#252a32] bg-[#101217] p-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">
              Minutes
            </p>

            <p className="mt-3 font-display text-4xl font-bold">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="rounded-xl border border-[#252a32] bg-[#101217] p-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">
              Calories
            </p>

            <p className="mt-3 font-display text-4xl font-bold">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="relative mt-8">
          {/* Daisy Khala */}
          <div className="tabs tabs-lift w-full">
            {/* Today's Plan */}
            <input
              type="radio"
              name="my_plan_tabs"
              className="tab"
              aria-label="Today's Plan"
              defaultChecked
            />

            <div className="tab-content border-[#252a32] bg-[#101217] p-5">
              {plan.length === 0 ? (
                <div className="flex min-h-45 flex-col items-center justify-center text-center">
                  <h2 className="font-display text-2xl font-bold uppercase">
                    Nothing Here Yet
                  </h2>

                  <p className="mt-2 text-xs text-zinc-500">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link
                    href="/"
                    className="mt-5 rounded-full bg-[#c8ff00] px-5 py-2.5 text-[9px] font-bold uppercase text-black transition hover:bg-[#d5ff4d]"
                  >
                    Go to workouts
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {plan.map((workout) => (
                    <PlanCard
                      key={workout.id}
                      workout={workout}
                      showDone={true}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Saved */}
            <input
              type="radio"
              name="my_plan_tabs"
              className="tab"
              aria-label="Saved"
            />

            <div className="tab-content border-[#252a32] bg-[#101217] p-5">
              {saved.length === 0 ? (
                <div className="flex min-h-45 flex-col items-center justify-center text-center">
                  <h2 className="font-display text-2xl font-bold uppercase">
                    Nothing Here Yet
                  </h2>

                  <p className="mt-2 text-xs text-zinc-500">
                    Browse the library and save a lift for later.
                  </p>

                  <Link
                    href="/"
                    className="mt-5 rounded-full bg-[#c8ff00] px-5 py-2.5 text-[9px] font-bold uppercase text-black transition hover:bg-[#d5ff4d]"
                  >
                    Go to workouts
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {saved.map((workout) => (
                    <PlanCard
                      key={workout.id}
                      workout={workout}
                      showDone={false}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sort By */}
          <div className="absolute right-3 top-1.5 flex items-center gap-2">
            <span className="hidden text-[9px] font-bold uppercase tracking-wider text-zinc-500 sm:block">
              Sort By
            </span>

            <select className="select select-xs border-[#252a32] bg-[#101217] text-[10px] text-white">
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlanDetails;
