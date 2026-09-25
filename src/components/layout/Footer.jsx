import Image from "next/image";
import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[#252a32] bg-[#08090b]">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                {/* Brand-logo */}
                <div className='flex items-center gap-3'>
                    <Image className="h-6 w-6 -rotate-45 text-[#c8ff00] bg-[#08090b] backdrop-blur" src="/logo.png" alt="FITLOG" width={100} height={30} />
                    <span className='font-display text-sm font-bold tracking-wide'>
                        FITLOG
                    </span>
                </div>

                {/* copyride section */}
                <p className='text-[10px] text-zinc-600'>
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;