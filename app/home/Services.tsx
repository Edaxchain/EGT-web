"use client";

import { motion, Variants } from "framer-motion";
import { Home, Zap, Battery, RefreshCcw, Car, Globe } from "lucide-react";

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
            className="relative w-full bg-panel-dark overflow-hidden p-12 lg:p-24 lg:px-48 "
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVars}
                        className="text-center group relative border border-green p-8 rounded-3xl transition-all duration-300 flex flex-col items-center text-center hover:bg-green/5 hover:border-green hover:-translate-y-2 hover:shadow-2xl hover:shadow-green/5"
                    >
                        <service.icon className="w-12 h-12 text-green/90 mb-6 transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="text-xl font-bold mb-3 group-hover:text-green transition-colors">
                            {service.title}
                        </h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
