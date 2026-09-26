import { Link } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08090b] px-5 text-white">
      <div className="text-center">
        <h1 className="font-display text-7xl font-bold text-[#c8ff00]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold uppercase">
          Page Not Found
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          The page you are looking for does not exist.
        </p>

        
        
      </div>
    </main>
  );
};

export default NotFound;