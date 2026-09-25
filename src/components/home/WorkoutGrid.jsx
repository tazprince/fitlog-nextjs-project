import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutGrid = ({ workouts }) => {
  return (
    <section id="library" className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      {/* Section Heading */}
      <div>
        <h2 className="mt-2 font-display text-xl font-bold uppercase leading-none">
          The Library
        </h2>
        <p className="max-w-sm text-xs leading-5 text-zinc-500 mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* card grid */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {
                workouts.map((workout)=>{
                    return <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
                })
            }

        </div>

    </section>
  );
};

export default WorkoutGrid;
