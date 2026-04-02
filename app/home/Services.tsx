"use client";

import { motion, Variants } from "framer-motion";
import {
    Home,
    Zap,
    Battery,
    RefreshCcw,
    Car,
    Globe,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        title: "Solar Rooftop",
        description: "ติดตั้งโซล่าเซลล์บนหลังคา",
        icon: Home,
    },
    {
        title: "On-Grid System",
        description: "เชื่อมต่อระบบไฟฟ้ากับการไฟฟ้า",
        icon: Zap,
    },
    {
        title: "Off-Grid System",
        description: "ใฃ้พลังงานอิสระ ",
        icon: Battery,
    },
    {
        title: "Hybrid System",
        description: "ผสมผสานระบบทั้งสอง",
        icon: RefreshCcw,
    },
    {
        title: "EV Charger",
        description: "ติดตั้งเครื่องชาร์จรถยนต์ไฟฟ้า",
        icon: Car,
    },
    {
        title: "Energy Platform",
        description: "บริหารพลังงานด้วยเทคโนโลยี",
        icon: Globe,
    },
];

export default function Services() {
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
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section
            id="services"
            className="relative w-full overflow-hidden py-24 px-8 md:px-12 lg:px-48 bg-background"
        >
            <motion.div
                className="w-full relative z-10 text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
            >
                <div className="max-w-2xl mx-auto">
                    {/* Headline */}
                    <motion.h1
                        variants={itemVars}
                        className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-text-main"
                    >
                        บริการของเรา
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        className="text-lg text-text-sub max-w-lg mx-auto"
                    >
                        นวัตกรรมด้านพลังงานเพื่อการเชื่อมต่อที่ยั่งยืน
                        สู่การพัฒนาชุมชน ควบคุมโดยวิศวกรผู้เชี่ยวชาญ
                    </motion.p>
                </div>
            </motion.div>

            {/* Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVars}
                        className="text-left group relative bg-surface border-2 border-green/10 p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col items-start hover:border-green/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green/10 overflow-hidden"
                    >
                        {/* Decorative Background Index */}
                        <span className="absolute -top-4 -right-2 text-8xl font-black text-green/5 select-none group-hover:text-green/10 transition-colors duration-500">
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>

                        {/* Icon Container */}
                        <div className="relative mb-8">
                            <service.icon className="w-12 h-12 text-green/80 mb-6 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        {/* Content */}
                        <div className="space-y-4 relative z-10">
                            <h3 className="text-2xl font-black text-text-main group-hover:text-green transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-text-sub text-base leading-relaxed group-hover:text-text-main transition-colors duration-300">
                                {service.description}
                            </p>
                        </div>

                        {/* Bottom Interaction */}
                        <div className="mt-8 flex items-center gap-2 text-green font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                            <span>DETAILS</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>

                        {/* Hover Border Glow */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-green/80 group-hover:w-full transition-all duration-700 ease-out" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
