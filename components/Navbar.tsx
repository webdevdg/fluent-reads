"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

export const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center 
        py-2 px-4 border-b border-primary/10 bg-secondary h-20">
            <Link href="/">
                <h1 className={cn("text-xl md:text-3xl font-bold text-primary",
                    font.className
                )}>
                    fluent-reads
                </h1>
            </Link>
            <ModeToggle />


        </div>
    )
}

