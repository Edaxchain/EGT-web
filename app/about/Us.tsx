"use client";

import { motion, Variants } from "framer-motion";
import { Medal, Leaf, Microscope } from "lucide-react";
import BackgroundDecoration from "@/app/_components/ui/backgroundDecoration";
const containerVars = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVars: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const timelineItemVars: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const features = [
    {
        icon: Medal,
        title: "รางวัลและการรับรอง",
        description: "ได้รับการรับรองจาก ISO 9001, กฟน. และ EGAT",
    },
    {
        icon: Leaf,
        title: "ความยั่งยืน",
        description:
            "ลดการปล่อย CO₂ ได้กว่า 12,400 ตันต่อปี เทียบเท่าการปลูกต้นไม้ 570,000 ต้น",
    },
    {
        icon: Microscope,
        title: "นวัตกรรม",
        description:
            "พัฒนาแพลตฟอร์ม Energy Block และ D-Mobility สำหรับการบริหารจัดการพลังงานอัจฉริยะ",
    },
];

const timelineData = [
    {
        year: "2557 / 2014",
        title: "ก่อตั้งบริษัท",
        description:
            "เริ่มต้นธุรกิจพลังงานแสงอาทิตย์สำหรับที่พักอาศัยในกรุงเทพมหานคร ด้วยทีมวิศวกร 3 คน",
    },
    {
        year: "2559 / 2016",
        title: "ขยายสู่ตลาดอุตสาหกรรม",
        description:
            "ติดตั้งระบบโซล่าเซลล์ขนาดใหญ่สำหรับโรงงานและนิคมอุตสาหกรรมในภาคตะวันออก",
    },
    {
        year: "2562 / 2019",
        title: "เปิดตัว EV Charging",
        description:
            "เปิดตัวบริการติดตั้งสถานีชาร์จรถยนต์ไฟฟ้า รองรับการเติบโตของ EV ในประเทศไทย",
    },
    {
        year: "2565 / 2022",
        title: "เปิดตัว Energy Block Platform",
        description:
            "เปิดตัวแพลตฟอร์มบริหารพลังงานอัจฉริยะ ผสาน Blockchain และ AI เพื่อความโปร่งใส",
    },
    {
        year: "2567 / 2024",
        title: "500+ โครงการทั่วประเทศ",
        description:
            "ฉลองความสำเร็จ 500+ โครงการ และขยายทีมสู่กว่า 80 คน พร้อมสาขาใน 5 จังหวัด",
    },
];

export default function Us() {
    return (
        <section
            id="us"
            className="relative w-full overflow-hidden py-24 px-8 md:px-12 lg:px-48 bg-background transition-colors duration-500"
        >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <BackgroundDecoration />

                {/* Left Side: Content */}
                <motion.div
                    className="space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVars}
                >
                    <div className="space-y-6">
                        <motion.div variants={itemVars} className="space-y-2">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                                Green Energy Solutions <br />
                                <span className="text-green">
                                    ผู้นำพลังงานสะอาดของไทย
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={itemVars}
                            className="text-lg text-text-sub leading-relaxed mb-10 max-w-lg lg:mx-0"
                        >
                            Green Energy Solutions ก่อตั้งขึ้นในปี 2557
                            ด้วยความมุ่งมั่นที่จะเปลี่ยนแปลงวิธีที่ประเทศไทยผลิตและใช้พลังงาน
                            เราเชื่อว่าพลังงานสะอาดไม่ใช่แค่ทางเลือก
                            แต่คือความจำเป็นสำหรับอนาคต
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
                                    <feature.icon className="w-6 h-6 text-text-main/80 group-hover:text-text-main group-hover:scale-125 transition-all duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-text-main/80 group-hover:text-text-main transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-text-main/80 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Vertical Timeline */}
                <motion.div
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVars}
                >
                    {/* Single Vertical Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.5,
                            delay: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute left-[20px] md:left-[28px] top-[16px] bottom-0 w-[2px] bg-green origin-top z-0"
                    ></motion.div>

                    <div className="space-y-12 relative z-10">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={timelineItemVars}
                                className="relative flex gap-8 items-start pl-12 md:pl-16 box-content z-10"
                            >
                                {/* Eraser for the last item - hides the line below the center of the dot */}
                                {index === timelineData.length - 1 && (
                                    <div className="absolute left-[20px] md:left-[28px] top-[16px] bottom-[-200px] w-5 -ml-[9px] bg-background z-1"></div>
                                )}

                                {/* Dot */}
                                <div className="absolute left-[13px] md:left-[21px] top-2 w-[16px] h-[16px] rounded-full bg-green border-2 border-background ring-2 ring-green z-10 shadow-sm"></div>

                                <div className="flex-1 space-y-2">
                                    <span className="inline-block px-3 py-1 bg-green/10 text-green rounded-full text-xs font-bold font-mono">
                                        {item.year}
                                    </span>
                                    <h4 className="text-xl font-bold">
                                        {item.title}
                                    </h4>
                                    <p className="leading-relaxed">
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
