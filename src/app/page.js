import Hero from "../components/home/Hero";
import getWorkouts from "@/lib/api";
import WorkoutGrid from "@/components/home/WorkoutGrid";

const  Home = async() => {
  const workouts = await getWorkouts();

  return (
    <div className="min-h-screen bg-[#08090b] text-white">


      <main>
        <Hero />
        <WorkoutGrid workouts={workouts}></WorkoutGrid>
       
      </main>


    </div>
  );
};

export default Home;