"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/_lib/utils";

export default function BackgroundDecoration({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className,
            )}
        >
            <div className="absolute inset-0 bg-brand-subtle opacity-10" />
            <motion.div
                animate={{
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "opacity" }}
                className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-dominant/5 blur-[100px] rounded-full"
            />
            <motion.div
                animate={{
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "opacity" }}
                className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-dominant/5 blur-[100px] rounded-full"
            />
            <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_center,var(--brand-dominant)_2.5px,transparent_0)] bg-size-[64px_64px]" />
        </div>
    );
}
