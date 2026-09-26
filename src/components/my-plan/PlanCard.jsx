import { Check, Clock3, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const PlanCard = ({
  workout,
  onRemove,
  onDone,
  showDone = false,
  isDone = false,
}) => {
  const handleRemove = () => {
    onRemove(workout.id);

    toast.success("Workout removed.");
  };

  const handleDone = () => {
    onDone(workout.id);
    toast.success("Workout marked as done");
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#252a32] bg-[#101217] p-3 sm:flex-row sm:items-center">
      {/* Image */}
      <div className="h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-28">
        <Image
          src={workout.image}
          alt={workout.name}
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Workout Info */}
      <div className="min-w-0 flex-1">
        <h2 className="font-display text-xl font-bold uppercase leading-none">
          {workout.name}
        </h2>

        <p className="mt-2 text-xs text-zinc-500">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
            <Clock3 size={12} />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
            <Flame size={12} />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
            <Star size={12} />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">
        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#343941] px-3 py-2 text-[9px] font-bold uppercase text-zinc-300 transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
        >
          View Details
        </Link>

        {showDone && (
          <button
            onClick={handleDone}
            className={`flex items-center gap-1 rounded-full px-3 py-2 text-[9px] font-bold uppercase ${
              isDone
                ? "bg-zinc-700 text-zinc-400"
                : "bg-[#c8ff00] text-black hover:bg-[#d5ff4d]"
            }`}
          >
            <Check size={12} />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        {/* Remove */}
        <button
          onClick={handleRemove}
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition hover:bg-[#252a32] hover:text-white"
          aria-label="Remove workout"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
