"use client";

import { motion, Variants } from "framer-motion";
import {
    Smartphone,
    Network,
    Brain,
    Activity,
    Zap,
    TrendingUp,
    Leaf,
} from "lucide-react";

export default function Technology() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const features = [
        {
            icon: Smartphone,
            title: "Smart Monitoring",
            description:
                "ติดตามการผลิตไฟฟ้าแบบเรียลไทม์ผ่านแอปพลิเคชันบนมือถือ",
        },
        {
            icon: Network,
            title: "Fintech & Blockchain",
            description:
                "บูรณาการเทคโนโลยี Blockchain เพื่อความโปร่งใสและน่าเชื่อถือ",
        },
        {
            icon: Brain,
            title: "AI Energy Optimization",
            description: "ลดต้นทุน เพิ่มประสิทธิภาพสูงสุดด้วยปัญญาประดิษฐ์",
        },
    ];

    const chartData = [40, 65, 80, 55, 90, 75, 45, 60, 85, 70, 50, 40];

    return (
        <section
            id="technology"
            className="relative w-full overflow-hidden py-24 px-8 md:px-12 lg:px-48 bg-green-light"
        >
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
                {/* Left Side: Content */}
                <motion.div
                    className="flex-1 space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVars}
                >
                    <div className="space-y-6">
                        <motion.h2
                            variants={itemVars}
                            className="text-3xl md:text-5xl lg:text-6xl font-black text-text-main-static leading-tight"
                        >
                            ขับเคลื่อนพลังงาน ด้วยนวัตกรรม
                            <br />
                            <span className="text-background-static">
                                Fintech
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVars}
                            className="text-lg text-text-sub-static max-w-xl leading-relaxed"
                        >
                            Energy Block แพลตฟอร์ม X-Pal Bridge
                            บริหารจัดการพลังงานแบบออนไลน์ โปร่งใส ตรวจสอบได้
                            และสร้างผลตอบแทนสูงสุด
                        </motion.p>
                    </div>

                    <div className="space-y-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={itemVars}
                                whileHover={{ x: 10 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                                className="flex gap-6 items-start group cursor-pointer"
                            >
                                <div className="p-4 rounded-2xl">
                                    <feature.icon className="w-6 h-6 text-black/70 group-hover:text-black group-hover:scale-125 transition-all duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black/70 group-hover:text-black transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-black/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Dashboard Mockup */}
                <motion.div
                    className="flex-1 w-full lg:max-w-[500px]"
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="relative bg-background p-8 md:p-10 rounded-[40px] shadow-2xl border border-foreground/50 dark:border-foreground/50 overflow-hidden">
                        {/* Dashboard Header */}
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h3 className="font-black text-lg text-text-main">
                                    ENERGY BLOCK
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                                    <span className="text-[10px] uppercase font-bold text-green tracking-widest leading-none">
                                        ระบบทำงานปกติ
                                    </span>
                                </div>
                            </div>
                            <Activity className="w-6 h-6 text-green/50" />
                        </div>

                        {/* Main Value */}
                        <div className="mb-10">
                            <div className="text-[56px] font-black leading-none text-text-main flex items-baseline gap-2">
                                125.8
                                <span className="text-xl font-medium text-text-sub opacity-50">
                                    kWh วันนี้
                                </span>
                            </div>
                        </div>

                        {/* Secondary Stats */}
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="p-5 bg-background rounded-3xl border border-foreground/50">
                                <p className="text-[10px] font-bold text-text-sub uppercase mb-2">
                                    ประสิทธิภาพ
                                </p>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green" />
                                    <span className="text-2xl font-bold text-text-main">
                                        94%
                                    </span>
                                </div>
                            </div>
                            <div className="p-5 bg-background rounded-3xl border border-foreground/50">
                                <p className="text-[10px] font-bold text-text-sub uppercase mb-2">
                                    ประหยัดวันนี้
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-text-main">
                                        ฿480
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Mini Bar Chart Mockup */}
                        <div>
                            <p className="text-[12px] font-bold text-text-sub uppercase mb-6 flex justify-between">
                                การผลิตพลังงาน (12 เดือน)
                                <Zap className="w-3 h-3 text-green" />
                            </p>
                            <div className="h-24 flex items-end justify-between gap-1">
                                {chartData.map((val, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${val}%` }}
                                        transition={{
                                            delay: 0.1 + i * 0.05,
                                            duration: 1,
                                        }}
                                        className="w-full bg-green/20 dark:bg-green/10 rounded-t-sm relative group"
                                    >
                                        <div className="absolute inset-0 bg-green/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Carbon Footprint */}
                        <div className="mt-10 pt-8 border-t border-foreground/50 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green/10 rounded-xl">
                                    <Leaf className="w-5 h-5 text-green" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-text-sub uppercase">
                                        CO₂ ลดลงปีนี้
                                    </p>
                                    <p className="text-lg font-bold text-text-main">
                                        12,400 ตัน
                                    </p>
                                </div>
                            </div>
                            <div className="bg-green/10 text-green rounded-full px-3 py-1 text-[10px] font-bold">
                                +12% YoY
                            </div>
                        </div>

                        {/* Decorative Background Glows */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green/10 blur-[80px] rounded-full -ml-24 -mb-24 pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
