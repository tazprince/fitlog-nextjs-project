import getWorkoutById from "@/lib/singleapi";
import WorkoutDetails from "../../../components/details/WorkoutDetails";
import React from "react";

const WorkDetailsPage = async ({ params }) => {
  const { id } = await params;
  const workout = await getWorkoutById(id);
  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0d0f12] px-6 py-20 text-center text-white">
        <h1 className="text-3xl font-bold">Workout Not Found</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#08090b] text-white">
     <WorkoutDetails workout={workout} />
    </div>
  );
};

export default WorkDetailsPage;
