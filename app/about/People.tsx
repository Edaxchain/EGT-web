"use client";

import { motion, Variants } from "framer-motion";
import { User, GraduationCap, Briefcase } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    education: string;
    experience: string;
    description: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "สมชาย วิทยาพลังงาน",
        role: "CEO & Co-Founder",
        education: "วิศวกรไฟฟ้า จุฬาลงกรณ์มหาวิทยาลัย",
        experience: "ประสบการณ์ด้านพลังงานทดแทนกว่า 15 ปี",
        description:
            "ผู้นำวิสัยทัศน์ในการขับเคลื่อน Green Energy Solutions ให้เป็นผู้นำด้านพลังงานสะอาดในไทย",
    },
    {
        name: "วิภา ใจดี",
        role: "COO",
        education: "บริหารธุรกิจ มหาวิทยาลัยธรรมศาสตร์",
        experience: "ประสบการณ์บริหารโครงการพลังงานกว่า 10 ปี",
        description:
            "ผู้เชี่ยวชาญด้านการจัดการปฏิบัติการและการขยายเครือข่ายโครงการทั่วประเทศ",
    },
    {
        name: "กิตติศักดิ์ พลังไทย",
        role: "CTO",
        education: "วิศวกรรมพลังงาน สถาบันเทคโนโลยีพระจอมเกล้าฯ",
        experience: "เชี่ยวชาญการออกแบบระบบ Solar & EV มากกว่า 12 ปี",
        description:
            "ผู้อยู่เบื้องหลังนวัตกรรม Energy Block และการออกแบบระบบทางวิศวกรรมที่แม่นยำ",
    },
];

export default function People() {
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

    return (
        <section
            id="people"
            className="relative w-full overflow-hidden py-24 px-8 md:px-12 lg:px-48 bg-green-light"
        >
            <motion.div
                className="w-full relative z-10 text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
            >
                <div className="max-w-3xl mx-auto">
                    <motion.h1
                        variants={itemVars}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-text-main-static mb-6 tracking-tight"
                    >
                        ผู้เชี่ยวชาญที่อยู่เบื้องหลัง
                        <br />
                        <span className="text-background-static">
                            ความสำเร็จ
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVars}
                        className="text-lg text-text-sub-static max-w-2xl mx-auto leading-relaxed"
                    >
                        ทีมวิศวกรและผู้เชี่ยวชาญด้านพลังงานที่มีประสบการณ์และความหลงใหลในการสร้างอนาคตพลังงานสะอาด
                    </motion.p>
                </div>
            </motion.div>

            {/* Team Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVars}
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        variants={itemVars}
                        className={`group relative border border-green p-8 rounded-[40px] bg-background transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-green/5 ${
                            index === teamMembers.length - 1 &&
                            teamMembers.length % 2 !== 0
                                ? "sm:max-xl:col-span-2 sm:max-xl:w-full sm:max-xl:max-w-[calc(50%-16px)] sm:max-xl:justify-self-center"
                                : ""
                        }`}
                    >
                        {/* Name & Role */}
                        <div className="mb-6 relative z-10 text-left">
                            <User className="w-12 h-12 text-green mb-4 transition-transform duration-300 group-hover:scale-110" />
                            <div className="space-y-1">
                                <h3 className="text-2xl font-bold group-hover:text-green transition-colors">
                                    {member.name}
                                </h3>
                                <div className="inline-block bg-green/10 text-green px-3 py-1 rounded-full text-sm font-bold border border-green/20">
                                    {member.role}
                                </div>
                            </div>
                        </div>

                        {/* Description & Details */}
                        <div className="space-y-4 mt-auto">
                            <p className="text-text-sub text-lg leading-relaxed">
                                {member.description}
                            </p>
                            <div className="pt-6 border-t border-black/10 flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-text-sub font-medium">
                                    <GraduationCap className="w-6 h-6 text-text-main/80" />
                                    {member.education}
                                </div>
                                <div className="flex items-center gap-2 text-text-sub font-medium">
                                    <Briefcase className="w-6 h-6 text-text-main/80" />
                                    {member.experience}
                                </div>
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
