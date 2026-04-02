'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CountUpNumber from '@/app/_lib/count';
import { containerVars, itemVars, lineVars } from '@/app/_lib/animations';

const portfolioData = [
    {
        label: "Solar Farm Program",
        value: 60,
        color: "text-blue-500",
        bg: "bg-blue-500",
        hex: "#3b82f6" // Tailwind blue-500
    },
    {
        label: "Solar Agriculture",
        value: 15,
        color: "text-cyan-400",
        bg: "bg-cyan-400",
        hex: "#22d3ee" // Tailwind cyan-400
    },
    {
        label: "Solar Rooftop House",
        value: 8,
        color: "text-orange-400",
        bg: "bg-orange-400",
        hex: "#fb923c" // Tailwind orange-400
    },
    {
        label: "Solar College",
        value: 7,
        color: "text-purple-500",
        bg: "bg-purple-500",
        hex: "#a855f7" // Tailwind purple-500
    },
    {
        label: "Solar Monastery",
        value: 6,
        color: "text-indigo-600",
        bg: "bg-indigo-600",
        hex: "#4f46e5" // Tailwind indigo-600
    },
    {
        label: "Solar Factory",
        value: 4,
        color: "text-emerald-500",
        bg: "bg-emerald-500",
        hex: "#10b981" // Tailwind emerald-500
    },
];

const ecosystemData = [
    { label: "Engineering & Development", value: 40, bg: "bg-indigo-600", desc: "Core System & Blockchain Development" },
    { label: "Marketing & Promotion", value: 20, bg: "bg-emerald-400", desc: "Global Community & Brand Growth" },
    { label: "Business Development", value: 12, bg: "bg-purple-500", desc: "Partnership & Ecosystem Expansion" },
    { label: "Legal & Regulation", value: 10, bg: "bg-blue-400", desc: "Compliance & Security Standards" },
    { label: "Operational & Admin", value: 8, bg: "bg-orange-400", desc: "Daily Operations & Management" },
    { label: "Partners", value: 6, bg: "bg-indigo-900", desc: "Strategic Network Collaboration" },
    { label: "Contingency", value: 4, bg: "bg-pink-500", desc: "Emergency & Future Reserve Fund" },
];

export default function Ecosystem() {
    const [activeIndex, setActiveIndex] = useState(0);
    let cumulativePercent = 0;
    return (
        <section
            id='ecosystem'
            className="py-12 bg-background relative overflow-hidden">
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
                        Transparency & Ecosystem
                    </motion.p>
                    <motion.h2 variants={itemVars} className="text-4xl lg:text-5xl text-brand-dominant font-black uppercase mb-6 italic">
                        สนับสนุนการเชื่อมต่อระบบนิเวศ
                    </motion.h2>
                    <motion.p variants={itemVars} className="text-text-sub max-w-2xl font-light">
                        ทุกสัดส่วนโครงการและการบริหารจัดการ ถูกออกแบบมาเพื่อความสมดุลของระบบนิเวศ
                        เราตั้งใจทำให้ทุกยูนิตพลังงานที่ผลิตได้ กลายเป็นมูลค่าที่หมุนเวียนกลับไปหาทุกคนในชุมชนอย่างทั่วถึงและโปร่งใสที่สุด
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Donut Chart */}
                    <div className="lg:col-span-5 p-10 rounded-[3rem] bg-background border border-border/20 relative group">
                        <h3 className="text-center text-xs font-bold mb-8 uppercase tracking-widest text-text-main">
                            Energy Trade Reserves
                        </h3>

                        <div className="relative w-full max-w-[256px] aspect-square mx-auto mb-12 flex items-center justify-center">                            <svg viewBox="0 0 100 100"
                            className="w-full h-full transform -rotate-90 pointer-events-none">
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-input-bg pointer-events-none" />
                            {portfolioData.map((item, i) => {
                                const circumference = 2 * Math.PI * 40;
                                const strokeLength = (item.value / 100) * circumference;
                                const previousValues = portfolioData.slice(0, i).reduce((sum, current) => sum + current.value, 0);
                                const offset = (previousValues / 100) * circumference;
                                cumulativePercent += item.value;

                                return (
                                    <motion.circle
                                        key={i}
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        strokeWidth={8}
                                        whileHover={{ strokeWidth: 12, transition: { duration: 0.2 } }}
                                        onMouseEnter={() => setActiveIndex(i)}
                                        stroke={item.hex}
                                        strokeDasharray={`${strokeLength} ${circumference}`}
                                        strokeDashoffset={-offset}
                                        strokeLinecap="butt"
                                        className="cursor-pointer pointer-events-auto transition-all duration-300"
                                        initial={{ strokeDasharray: `0 ${circumference}` }}
                                        animate={{ strokeDasharray: `${strokeLength} ${circumference}` }}
                                    />
                                );
                            })}
                        </svg>

                            <div className="absolute flex items-center pointer-events-none z-20">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="text-center"
                                    >
                                        <p className={`text-4xl`}>
                                            <CountUpNumber duration={1} value={portfolioData[activeIndex].value} className='text-text-main' />%
                                        </p>
                                        <p className="text-[9px] sm:text-xs uppercase tracking-widest text-text-main mt-1 ">
                                            {portfolioData[activeIndex].label}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                            {portfolioData.map((item, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    className={`flex flex-col gap-1 cursor-pointer transition-all ${activeIndex === i ? 'opacity-100 scale-105' : 'opacity-50'}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${item.bg}`} />
                                        <span className="text-[10px] font-bold text-text-main uppercase tracking-tight">
                                            {item.label}
                                        </span>
                                    </div>
                                    <p className={`text-lg font-black ${item.color} ml-3`}>
                                        {item.value}%
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-7 p-10 rounded-[3rem] bg-background border border-border/20">
                        <h3 className="text-center text-xs font-bold mb-10 uppercase tracking-widest text-text-main ">
                            Ecosystem
                        </h3>

                        <div className="space-y-4">
                            {ecosystemData.map((item, i) => (
                                <div key={i} className="group">
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <span className="text-sm uppercase group-hover:text-green transition-colors duration-300">
                                                {item.label}
                                            </span>
                                            <p className="text-xs text-text-sub mt-0.5">{item.desc}</p>
                                        </div>
                                        <p className="text-xl font-black text-text-main group-hover:text-green transition-colors duration-300">
                                            <CountUpNumber value={item.value} className='text-text-main group-hover:text-green transition-colors duration-300' />%
                                        </p>
                                    </div>
                                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.value}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className={`h-full ${item.bg} opacity-70 group-hover:opacity-100 transition-all`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}