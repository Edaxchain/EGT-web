"use client";

import { motion } from "framer-motion";
import { containerVars, itemVars } from "@/app/_lib/animations";
import {
    ShieldCheck,
    Cpu,
    Building2,
    Landmark,
    Handshake,
    Globe,
    Zap,
    HeartPulse,
} from "lucide-react";
import BackgroundDecoration from "@/app/_components/ui/backgroundDecoration";

interface Partner {
    name: string;
    description: string;
    icon: any;
}

const strategicPartners: Partner[] = [
    {
        name: "กฟน. (MEA)",
        description: "พันธมิตรด้านการเชื่อมต่อระบบกริดในเขตนครหลวง",
        icon: Landmark,
    },
    {
        name: "กฟภ. (PEA)",
        description: "ความร่วมมือด้านการจ่ายไฟฟ้าขนานไฟส่วนภูมิภาค",
        icon: Landmark,
    },
    {
        name: "KBank",
        description: "สถาบันการเงินที่สนับสนุนการลงทุนพลังงานสีเขียว",
        icon: Building2,
    },
    {
        name: "SCB",
        description: "พันธมิตรด้านสินเชื่อโครงการเพื่อความยั่งยืน",
        icon: Building2,
    },
];

const technologyPartners: Partner[] = [
    {
        name: "Huawei Solar",
        description: "ผู้นำระบบ Inverter และ FusionSolar Smart PV",
        icon: Cpu,
    },
    {
        name: "Longi Solar",
        description: "แผงโซล่าเซลล์ประสิทธิภาพสูงระดับ Tier 1",
        icon: ShieldCheck,
    },
    {
        name: "Sungrow",
        description: "นวัตกรรมระบบกักเก็บพลังงาน (ESS) ระดับโลก",
        icon: Zap,
    },
    {
        name: "Growatt",
        description: "ระบบ Smart Energy Management สำหรับบ้านพักอาศัย",
        icon: HeartPulse,
    },
];

export default function Partner() {
    return (
        <section
            id="partner"
            className="relative w-full overflow-hidden py-24 px-8 md:px-12 lg:px-48 bg-background"
        >
            <BackgroundDecoration variant="glow"/>
            <motion.div
                className="w-full relative z-10 text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
            >
                <div className="max-w-4xl mx-auto space-y-6">
                    <motion.h2
                        variants={itemVars}
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
                    >
                        เครือข่ายพันธมิตร <br />
                        <span className="text-green/80">
                            สู่การเติบโตร่วมกัน
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVars}
                        className="text-lg text-text-sub max-w-2xl mx-auto leading-relaxed"
                    >
                        เราร่วมงานกับหน่วยงานรัฐและเอกชนชั้นนำ
                        เพื่อส่งมอบเทคโนโลยีและบริการที่ดีที่สุด <br />
                        ภายใต้มาตรฐานสากลและความน่าเชื่อถือสูงสุด
                    </motion.p>
                </div>
            </motion.div>

            {/* Partner Layout: Left vs Right */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-7xl mx-auto">
                {/* Central Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border origin-top">
                    <div className="sticky top-1/2 -translate-x-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center z-10 shadow-sm">
                        <Globe size={20} className="animate-pulse" />
                    </div>
                </div>

                {/* Left Column: Strategic */}
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="flex items-center justify-center md:justify-start gap-6 mb-10 md:flex-row-reverse md:text-right">
                        <Handshake className="w-12 h-12 text-green" />
                        <h3 className="text-4xl font-black">
                            Strategic <br />{" "}
                            <span className="text-green uppercase text-sm tracking-[0.2em]">
                                Alliance
                            </span>
                        </h3>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-10">
                        {strategicPartners.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVars}
                                whileHover={{ x: -10 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                                className="flex gap-6 items-start md:flex-row-reverse md:text-right group cursor-pointer"
                            >
                                <div className="p-4 rounded-2xl shrink-0">
                                    <item.icon className="w-7 h-7 text-text-main/80 group-hover:text-text-main group-hover:scale-125 transition-all duration-300" />
                                </div>
                                <div className="space-y-1 grow">
                                    <h4 className="text-xl font-bold mb-2 text-text-main/80 group-hover:text-text-main transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-text-main/80 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Technology */}
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
                        <Cpu className="w-12 h-12 text-green" />
                        <h3 className="text-4xl font-black">
                            Innovation <br />{" "}
                            <span className="text-green uppercase text-sm tracking-[0.2em]">
                                Partners
                            </span>
                        </h3>
                    </div>

                    <div className="flex flex-col items-center md:items-start space-y-10">
                        {technologyPartners.map((item, i) => (
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
                                    <item.icon className="w-7 h-7 text-text-main/80 group-hover:text-text-main group-hover:scale-125 transition-all duration-300" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-bold mb-2 text-text-main/80 group-hover:text-text-main transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-text-main/80 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
