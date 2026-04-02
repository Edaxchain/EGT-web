"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/_lib/utils";

interface BackgroundProps {
    className?: string;
    variant?: "dot" | "line" | "mesh" | "glow";
}

export default function BackgroundDecoration({
    className,
    variant = "dot",
}: BackgroundProps) {
    if (variant === "line") {
        return (
            <div
                className={cn(
                    "absolute inset-0 overflow-hidden pointer-events-none select-none",
                    className,
                )}
            >
                {/* Secondary accent mesh for green background */}
                <motion.div
                    animate={{
                        opacity: [0.08, 0.12, 0.08],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ willChange: "opacity" }}
                    className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] bg-white/20 blur-[130px] rounded-full"
                />

                {/* Different pattern for Green: Modern Grid Line Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.06] bg-size-[64px_64px] bg-[linear-gradient(to_right,var(--text-main-static)_1px,transparent_1px),linear-gradient(to_bottom,var(--text-main-static)_1px,transparent_1px)]"
                    style={{
                        maskImage:
                            "radial-gradient(ellipse_at_center,black_40%,transparent_100%)",
                    }}
                />

                <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-black/5" />
            </div>
        );
    }

    if (variant === "mesh") {
        return (
            <div
                className={cn(
                    "absolute inset-0 overflow-hidden pointer-events-none select-none",
                    className,
                )}
            >
                <motion.div
                    animate={{
                        opacity: [0.08, 0.16, 0.08],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        willChange: "opacity",
                        background: `
                            radial-gradient(at 8% 8%, var(--brand-dominant) 0%, transparent 55%),
                            radial-gradient(at 92% 92%, var(--green) 0%, transparent 60%),
                            radial-gradient(at 88% 12%, var(--brand-subtle) 0%, transparent 50%),
                            radial-gradient(at 12% 88%, #fff 0%, transparent 35%)
                        `,
                    }}
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 opacity-[0.03] bg-size-[40px_40px] bg-[radial-gradient(var(--text-main)_1px,transparent_0)]" />
            </div>
        );
    }

    if (variant === "glow") {
        return (
            <div
                className={cn(
                    "absolute inset-0 overflow-hidden pointer-events-none select-none",
                    className,
                )}
            >
                <div className="absolute top-[-20%] left-[-10%] w-full h-full bg-linear-to-br from-brand-dominant/10 via-transparent to-transparent blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-full h-full bg-linear-to-tl from-green/10 via-transparent to-transparent blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.04] bg-size-[8px_8px] bg-[radial-gradient(var(--text-main)_1px,transparent_0)]" />
            </div>
        );
    }

    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none select-none",
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
