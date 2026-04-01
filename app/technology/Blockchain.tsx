'use client'
import { motion } from 'framer-motion';
import { containerVars, itemVars } from '@/app/_lib/animations';
import { ShieldCheck, Gift, Smartphone } from 'lucide-react';

export default function Blockchain() {
    const steps = [
        {
            num: "01",
            title: "ผลิตพลังงาน",
            desc: "โซล่าเซลล์บ้านคุณผลิตไฟฟ้า IoT Sensor วัดและส่งข้อมูลแบบ Real-time",
            color: "border-green",
        },
        {
            num: "02",
            title: "บันทึก Blockchain",
            desc: "ข้อมูลพลังงานถูกบันทึกลง Blockchain ทันที พร้อม Timestamp ที่ตรวจสอบได้",
            color: "border-violet-500",
        },
        {
            num: "03",
            title: "Smart Contract ทำงาน",
            desc: "เมื่อมีผู้ซื้อ สัญญาอัตโนมัติจับคู่ราคา ตรวจสอบเงื่อนไข และดำเนินการทันที",
            color: "border-blue-400",
        },
        {
            num: "04",
            title: "จ่ายเงินอัตโนมัติ",
            desc: "เงินโอนตรงถึงผู้ผลิตพลังงานทันทีที่ไฟฟ้าถูกส่ง ไม่มีตัวกลาง ไม่มีค่าธรรมเนียม",
            color: "border-yellow-500",
        }
    ];

    return (
        <section className="py-12 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVars}
                    className="mb-10"
                >
                    <motion.p variants={itemVars} className="text-text-main text-xs tracking-[0.3em] mb-6 uppercase">
                        BLOCKCHAIN & REWARD SYSTEM
                    </motion.p>
                    <motion.h2 variants={itemVars} className="text-4xl lg:text-5xl text-brand-dominant font-black uppercase mb-6 italic">
                        ความโปร่งใสที่ตรวจสอบได้จริง
                    </motion.h2>
                    <motion.p variants={itemVars} className="text-text-sub max-w-2xl font-light">
                        เราเปลี่ยนทุกกิโลวัตต์-ชั่วโมงที่คุณผลิตได้ ให้กลายเป็นคุณค่าผ่านระบบ Blockchain
                        เพื่อสร้างระบบนิเวศพลังงานที่ยุติธรรมและยั่งยืนสำหรับทุกคนในชุมชน
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left */}
                    <motion.div
                        className="lg:col-span-5 space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVars}
                    >
                        <motion.div variants={itemVars} className="p-8 rounded-2xl bg-white/[0.03] border border-border hover:border-brand-dominant transition-all duration-500 group">
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center text-brand-dominant group-hover:scale-110 transition-transform">
                                    <Gift size={22} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">REST POINT AIRDROP</h4>
                                    <p className="text-sm text-gray-500">แต้มจากการผลิตพลังงานสะอาด บันทึกบน Ledger กระจายศูนย์</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVars} className="p-8 rounded-2xl bg-white/[0.03] border border-border hover:border-yellow-400 transition-all duration-500 group">
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                                    <Smartphone size={22} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1 uppercase tracking-tight">X-PAL BRIDGE</h4>
                                    <p className="text-sm text-text-sub">เชื่อมต่อเพื่อแลกเปลี่ยนแต้มเป็นผลิตภัณฑ์ในเครือข่ายพันธมิตร</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVars} className="p-8 rounded-2xl bg-white/[0.03] border border-border hover:border-blue-500 transition-all duration-500 group">
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={22} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">ENERGY STORAGE POOL</h4>
                                    <p className="text-sm text-text-sub">จัดสรรรายได้ 35% เข้าสู่กองทุนสำรองเพื่อเสถียรภาพของระบบ</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right */}
                    <div className="lg:col-span-7 relative h-full pt-4">
                        <div className="relative ml-4 lg:ml-20">                     
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                style={{ originY: 0 }}
                                className="absolute left-[27px] top-8 bottom-20 w-[2px] bg-border z-0"
                            />
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVars}
                                className="space-y-8 relative z-10"
                            >
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVars}
                                        className="flex items-start gap-10"
                                    >
                                        <div className={`relative flex-shrink-0 w-14 h-14 rounded-full border ${step.color} bg-background flex items-center justify-center transition-all group-hover:scale-110 shadow-xl z-10`}>
                                            <span className="text-xs font-black text-text-main">{step.num}</span>
                                        </div>
                                        <div className="flex flex-col pt-1">
                                            <h4 className="text-xl italic text-text-main leading-tight">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-text-sub max-w-sm mt-2 font-light leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}