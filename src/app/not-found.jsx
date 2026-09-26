import Link from "next/link";


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

        <div className="mt-5">
          <Link
            href="/"
            className={` rounded-full px-4 py-2 text-[11px] uppercase tracking-wide transition  text-black" border border-[#343941] bg-[#111318] font-medium text-zinc-500 hover:border-[#4a5059] hover:text-white"}`}
          >
          Go Home
          </Link>
        </div>

        
        
      </div>
    </main>
  );
};

export default NotFound;