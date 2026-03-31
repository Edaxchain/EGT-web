"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function Contact() {
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
            id="contact"
            className="relative w-full overflow-hidden py-24 px-8 md:px-12 lg:px-48 bg-[#4cc44c] transition-colors duration-500"
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
                            className="text-3xl md:text-5xl lg:text-5xl font-black text-black leading-tight"
                        >
                            เริ่มต้นประหยัดพลังงานวันนี้
                            <br />
                            <span className="text-white">
                                ให้เราช่วยออกแบบระบบที่เหมาะกับคุณ
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVars}
                            className="text-lg text-black/75 max-w-xl leading-relaxed"
                        >
                            ขอรับการประเมินและใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย
                            ทีมวิศวกรผู้เชี่ยวชาญพร้อมให้คำปรึกษาตลอด 24 ชั่วโมง
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right Side: Buttons */}
                <motion.div
                    className="flex-1 w-full lg:max-w-[500px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVars}
                >
                    <motion.div
                        variants={itemVars}
                        className="flex flex-wrap justify-center lg:justify-end gap-6 w-full"
                    >
                        <Button
                            asChild
                            variant="primary"
                            className="text-xl h-[72px] px-12"
                        >
                            <Link href="#">ขอใบเสนอราคา</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="text-xl h-[72px] px-12"
                        >
                            <Link href="#">ปรึกษาฟรี</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
