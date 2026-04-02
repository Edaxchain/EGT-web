"use client";

import { motion, Variants } from "framer-motion";
import { Home, Zap, Battery } from "lucide-react";
import BackgroundDecoration from "@/app/_components/ui/backgroundDecoration";

const projects = [
    {
        title: "บ้านพักอาศัย",
        subtitle: "10 kWp",
        description: "บ้านพักอาศัย — กรุงเทพฯ",
        detail: "ระบบ On-Grid ลดค่าไฟได้ 80% ต่อเดือน",
        location: "ลาดพร้าว กทม.",
        capacityLabel: "ติดตั้ง 10 kWp",
        icon: Home,
    },
    {
        title: "สำนักงาน",
        subtitle: "50 kWp",
        description: "อาคารสำนักงาน — นนทบุรี",
        detail: "ระบบ Hybrid พร้อมแบตเตอรี่สำรอง 100 kWh",
        location: "เมืองนนทบุรี",
        capacityLabel: "ติดตั้ง 50 kWp",
        icon: Battery,
    },
    {
        title: "โรงงาน",
        subtitle: "1,000 kWp",
        description: "โรงงานอุตสาหกรรม — ชลบุรี",
        detail: "ระบบ On-Grid ขนาดใหญ่ ลดต้นทุนการผลิต 45%",
        location: "นิคมฯ อมตะซิตี้ ชลบุรี",
        capacityLabel: "ติดตั้ง 1 MWp",
        icon: Zap,
    },
];

export default function Works() {
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
            id="works"
            className="relative w-full overflow-hidden py-24 px-8 md:px-12 lg:px-48 bg-background"
        >
            <BackgroundDecoration />
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
                        โครงการที่ติดตั้งใช้งานแล้ว กว่า 500+ แห่ง
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        className="text-lg text-text-sub max-w-2xl mx-auto"
                    >
                        สัมผัสความสำเร็จจากการติดตั้งใช้งานจริงที่เห็นผลลัพธ์ชัดเจน
                        การันตีคุณภาพทุกขั้นตอนโดยทีมวิศวกรผู้เชี่ยวชาญประสบการณ์สูง
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
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVars}
                        className={`group relative border border-green p-8 rounded-[40px] transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-green/5 ${
                            index === projects.length - 1 &&
                            projects.length % 2 !== 0
                                ? "sm:max-xl:col-span-2 sm:max-xl:w-full sm:max-xl:max-w-[calc(50%-16px)] sm:max-xl:justify-self-center"
                                : ""
                        }`}
                    >
                        {/* Title & Capacity */}
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="flex flex-col gap-1">
                                <project.icon className="w-12 h-12 text-green mb-4 transition-transform duration-300 group-hover:scale-110" />
                                <h3 className="text-2xl font-bold group-hover:text-green transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="bg-green/10 text-green px-4 py-1.5 rounded-full text-sm font-bold border border-green/20">
                                {project.subtitle}
                            </div>
                        </div>

                        {/* Description & Detail */}
                        <div className="space-y-2 mb-8">
                            <p className="text-text-sub text-lg">
                                {project.description}
                            </p>
                            <p className="text-green text-lg font-medium">
                                {project.detail}
                            </p>
                        </div>

                        {/* Footer Info */}
                        <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-text-sub font-medium">
                                <span className="text-xl">📍</span>
                                {project.location}
                            </div>
                            <div className="text-text-sub opacity-60">
                                {project.capacityLabel}
                            </div>
                        </div>

                        {/* Hover Decorative Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-green/10 transition-all duration-500" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
