"use client";

import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import heroLight from "@/app/_assets/solar_panel_day.png";
import heroDark from "@/app/_assets/solar_panel_night.png";

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
            className="relative flex flex-col lg:flex-row h-auto lg:h-[60vh] min-h-[540px] bg-panel-dark overflow-hidden items-start px-12 lg:px-48"
        >
            {/* Background Image Container */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] pointer-events-none z-0">
                <div className="relative w-full h-full">
                    {/* Light Mode Image */}
                    <div className="absolute inset-0 block dark:hidden">
                        <Image
                            src={heroLight}
                            alt="Solar Hero Light"
                            fill
                            className="object-cover"
                            priority
                            style={{
                                maskImage:
                                    "linear-gradient(to left, black 20%, transparent 95%)",
                                WebkitMaskImage:
                                    "linear-gradient(to left, black 20%, transparent 95%)",
                            }}
                        />
                    </div>
                    {/* Dark Mode Image */}
                    <div className="absolute inset-0 hidden dark:block">
                        <Image
                            src={heroDark}
                            alt="Solar Hero Dark"
                            fill
                            className="object-cover opacity-80"
                            priority
                            style={{
                                maskImage:
                                    "linear-gradient(to left, black 20%, transparent 95%)",
                                WebkitMaskImage:
                                    "linear-gradient(to left, black 20%, transparent 95%)",
                            }}
                        />
                    </div>
                </div>
            </div>
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
                        <span className="text-green">ครบวงจร</span>{" "}
                        ลดค่าไฟสูงสุด 70%
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        className="text-lg leading-relaxed mb-10 max-w-lg mx-auto text-text-sub lg:mx-0"
                    >
                        นวัตกรรมด้านพลังงานเพื่อการเชื่อมต่อที่ยั่งยืน
                        สู่การพัฒนาชุมชน ควบคุมโดยวิศวกรผู้เชี่ยวชาญกว่า 10 ปี
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVars}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 w-full"
                    >
                        <Button asChild className="text-xl h-[52px] px-8">
                            <Link href="#">ขอใบเสนอราคา</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="text-xl h-[52px] px-8"
                        >
                            <Link href="#">ปรึกษาฟรี</Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
