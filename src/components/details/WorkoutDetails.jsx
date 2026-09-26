import { Clock3, Flame, Star, Dumbbell, Target, Repeat } from "lucide-react";
import Image from "next/image";
import WorkoutActions from "./WorkoutActions";

export default function WorkoutDetails({ workout }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      {/* Main Details */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-xl border border-[#252a32] bg-[#101217]">
          <Image
            src={workout.image}
            alt="Details Picture"
            width={300}
            height={300}
            className="h-full min-h-87.5 w-full object-cover"
          />
        </div>

        {/* Workout Info */}
        <div>
          {/* Name */}
          <h1 className="mt-4 font-display text-3xl font-bold uppercase leading-none">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-zinc-500">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 mt-3">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c8ff00] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-7 overflow-hidden rounded-xl border border-[#252a32] bg-[#101217]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <div className="flex items-center gap-2">
                <Dumbbell size={14} className="text-[#c8ff00]" />
                <span className="text-[9px] uppercase text-zinc-500">
                  Equipment
                </span>
              </div>

              <span className="text-xs">{workout.equipment}</span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <div className="flex items-center gap-2">
                <Target size={14} className="text-[#c8ff00]" />
                <span className="text-[9px] uppercase text-zinc-500">
                  Difficulty
                </span>
              </div>

              <span className="text-xs">{workout.difficulty}</span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <div className="flex items-center gap-2">
                <Repeat size={14} className="text-[#c8ff00]" />
                <span className="text-[9px] uppercase text-zinc-500">Sets</span>
              </div>

              <span className="text-xs">{workout.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <span className="text-[9px] uppercase text-zinc-500">Reps</span>

              <span className="text-xs">{workout.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <div className="flex items-center gap-2">
                <Clock3 size={14} className="text-[#c8ff00]" />
                <span className="text-[9px] uppercase text-zinc-500">
                  Duration
                </span>
              </div>

              <span className="text-xs">{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
              <div className="flex items-center gap-2">
                <Flame size={14} className="text-[#c8ff00]" />
                <span className="text-[9px] uppercase text-zinc-500">
                  Calories
                </span>
              </div>

              <span className="text-xs">{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <Star size={14} className="text-[#c8ff00]" />
                <span className="text-[9px] uppercase text-zinc-500">
                  Rating
                </span>
              </div>

              <span className="text-xs">{workout.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 border-t border-[#252a32] pt-8">
            <h2 className="mt-2 font-display text-2xl font-bold uppercase">
              Instructions
            </h2>

            <ol className="list-decimal space-y-2 pl-5 max-w-4xl mt-3 text-zinc-400">
              {workout.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </section>
  );
}
