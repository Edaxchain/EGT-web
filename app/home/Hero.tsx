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
            className="relative flex flex-col lg:flex-row h-auto lg:h-[60vh] min-h-[540px] bg-panel-dark overflow-hidden border-b border-amber/10 items-start px-6 md:px-[52px]"
        >
            {/* Left Content */}
            <motion.div
                className="flex-1 w-full flex flex-col items-center lg:items-start py-24 px-10 lg:px-12 z-10 text-center lg:text-left justify-center"
                initial="hidden"
                animate="visible"
                variants={containerVars}
            >
                <div className="max-w-2xl flex flex-col">

                    {/* Headline */}
                    <motion.h1
                        variants={itemVars}
                        className="font-brand text-4xl md:text-6xl font-black text-panel-dark-text leading-[0.95] tracking-tighter mb-6"
                    >
                        ติดตั้งโซล่าเซลล์
                        <span className="text-amber">ครบวงจร</span>
                        <br />
                        <span className="italic font-editorial font-light text-panel-dark-text">
                            ลดค่าไฟสูงสุด 70%
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        className="font-brand text-lg text-panel-dark-muted leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
                    >
                        AMEV is developing{" "}
                        <span className="text-panel-dark-text">
                            368 megawatts of renewable energy infrastructure
                        </span>{" "}
                        across Thailand and Southeast Asia — combining solar
                        power generation with blockchain technology.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVars}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 w-full"
                    >
                        <Button
                            asChild
                            className="font-brand text-[13px] font-bold bg-button-primary text-button-primary-text hover:bg-button-primary-hover rounded-[6px] h-[52px] px-8 shadow-lg shadow-amber/10 transition-all hover:-translate-y-1"
                        >
                            <Link href="#" className="flex items-center gap-2">
                                Get a Free Quote{" "}
                                <ArrowRight size={18} strokeWidth={3} />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="font-brand text-[13px] bg-panel-dark font-medium border-panel-dark-border/60 text-panel-dark-muted hover:text-panel-dark-text hover:border-panel-dark-border rounded-[9px] h-[52px] px-8 hover:bg-bg-raised transition-all hover:-translate-y-1"
                        >
                            <Link href="#">Explore solutions</Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Content */}
            <div className="flex-1 w-full flex flex-col items-center justify-center lg:justify-start h-full p-4 relative lg:pt-0 gap-8 md:gap-4 lg:mt-0">
                {/* Dashboard Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 20 }}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 60,
                        delay: 0.8,
                    }}
                    className="w-full max-w-md bg-amber-deep/5 backdrop-blur-xl border border-panel-dark-border rounded-t-2xl overflow-hidden shadow-2xl relative z-20 transition-all hover:border-amber/40"
                >
                    <div className="bg-amber-pale/5 px-4 py-2 flex items-center justify-between border-b border-panel-dark-border">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-amber/30" />
                            <div className="w-2 h-2 rounded-full bg-amber/20" />
                            <div className="w-2 h-2 rounded-full bg-amber/10" />
                        </div>
                        <div className="text-[7px] font-brand text-panel-dark-muted/60 tracking-widest">
                            app.amev.io/dashboard
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl animate-bounce">
                                    ☀️
                                </div>
                                <div>
                                    <div className="font-brand text-xl font-bold text-panel-dark-text">
                                        SOLR Token
                                    </div>
                                    <div className="font-brand text-[10px] text-panel-dark-muted/60 uppercase tracking-wider">
                                        1 token = 1 kWh generated
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-brand text-xl font-black text-panel-dark-text">
                                    $0.0412
                                </div>
                                <div className="font-brand text-[10px] font-bold text-green-400">
                                    ↑ +2.3% today
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber/10 border border-amber/20 p-2 rounded-xl flex justify-between items-center">
                            <div className="font-brand text-[10px] font-bold text-amber/50 uppercase">
                                Est. monthly earnings · 100kW system
                            </div>
                            <div className="font-brand text-lg font-black text-amber">
                                ~$1,880 / mo
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
