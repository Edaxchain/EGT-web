"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Hero() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section
            id="hero"
            className="relative flex flex-col lg:flex-row h-auto lg:h-[60vh] min-h-[540px] bg-panel-dark overflow-hidden border-b border-amber/10 items-start px-12 lg:px-48"
        >
            {/* Left Content */}
            <motion.div
                className="flex-1 w-full flex flex-col items-center lg:items-start py-12 md:py-24 z-10 text-center lg:text-left justify-center"
                initial="hidden"
                animate="visible"
                variants={containerVars}
            >
                <div className="max-w-2xl">
                    {/* Headline */}
                    <motion.h1
                        variants={itemVars}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-panel-dark-text leading-[0.95] tracking-tighter mb-6"
                    >
                        ติดตั้งโซล่าเซลล์ ครบวงจร
                        <br />
                        <span className="text-green">ครบวงจร</span>{' '}
                        ลดค่าไฟสูงสุด 70%
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        className="text-lg text-panel-dark-muted leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
                    >
                        นวัตกรรมด้านพลังงานเพื่อการเชื่อมต่อที่ยั่งยืน
                        สู่การพัฒนาชุมชน ควบคุมโดยวิศวกรผู้เชี่ยวชาญกว่า 10 ปี
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVars}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 w-full"
                    >
                        <Button
                            asChild
                            className="text-lg bg-green text-text-main-inverted rounded-[10px] h-[52px] px-8 shadow-lg shadow-amber/10 transition-all hover:-translate-y-1"
                        >
                            <Link href="#">ขอใบเสนอราคา</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="text-lg border-green-dark text-green-dark hover:text-green-dark hover:border-green-dark rounded-full h-[52px] px-8 hover:bg-green-dark/20 transition-all hover:-translate-y-1"
                        >
                            <Link href="#">ปรึกษาฟรี</Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
