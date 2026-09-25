import Link from "next/link";
import { Clock3, Flame, Star, Dumbbell, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function WorkoutCard({ workout }) {
  //    card design by combained me , google and ai
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-lg border border-[#252a32] bg-[#101217] transition hover:-translate-y-1 hover:border-[#3a404a] mt-4"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#181b21]">
        <Image
          src={workout.image}
          alt={workout.name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Arrow */}
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition group-hover:bg-[#c8ff00] group-hover:text-black">
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups?.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#c8ff00] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-none">
          {workout.name}
        </h3>

        {/* Equipment */}
        <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
          <Dumbbell size={13} />
          <span>{workout.equipment}</span>
        </div>

        {/* Stats */}
        <div className="mt-5 flex items-center gap-4 border-t border-[#252a32] pt-4">
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
            <Clock3 size={13} />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
            <Flame size={13} />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
            <Star size={13} />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
