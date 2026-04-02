'use client'
import { LayoutGrid, Banknote, ShieldCheck, Zap, Activity, ArrowUpRight, BarChart3, Star, Wallet, TrendingDown } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import CountUpNumber from '@/app/_lib/count';
import { itemVars, containerVars } from '@/app/_lib/animations';
import { motion } from 'framer-motion';


export default function Hero() {

    const dashboardData = [
        {
            label: "ค่าไฟสะสมรวม",
            value: "240,447.46",
            sub: "All Site Income Setup !",
            unit: "Verified THB",
            icon: <Banknote size={22} />,
            color: "text-green-light",
        },
        {
            label: "ไฟฟ้าผลิตได้วันนี้",
            value: "220.58",
            sub: "Energy Daily !",
            unit: "Current kW",
            icon: <Activity size={22} />,
            color: "text-panel-dark-text",
        },
        {
            label: "กำลังไฟฟ้าที่ผลิตขาย",
            value: "80.7",
            sub: "System Sell Pv Plant !",
            unit: "kW",
            icon: <Zap size={22} />,
            color: "text-green-light",
        },
        {
            label: "ส่วนลดความแปรผัน - ft",
            value: "-9,155.76",
            sub: "Redeem Income !",
            unit: "THB",
            icon: <TrendingDown size={22} />,
            color: "text-orange-400",
        },
        {
            label: "REST POINT",
            value: "24,558",
            sub: "Airdrop Program !",
            unit: "PTS",
            icon: <Star size={22} />,
            color: "text-yellow-400",

        },
        {
            label: "ค่าไฟสะสมเดือนปัจจุบัน",
            value: "24,668.56",
            sub: "Month Accumulated !",
            unit: "THB",
            icon: <Wallet size={26} />,
            color: "text-panel-dark-text",

        }
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scanLineMove {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-custom {
          animation: scanLineMove 3s linear infinite;
        }
      `}} />

            <section
                id='hero'
                className="min-h-screen bg-background text-text-main pt-6 pb-12 font-sans relative overflow-hidden">
                {/* Animation Scan Line */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--green-light)] to-transparent animate-scan-custom z-0 pointer-events-none"></div>

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--green)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left content */}
                        <motion.div
                            className="lg:col-span-5 space-y-4 lg:sticky lg:top-32"
                            initial="hidden"
                            animate="visible"
                            variants={containerVars}
                        >
                            <motion.h1
                                className="text-4xl lg:text-5xl leading-tight tracking-tighter font-black"
                                variants={itemVars}>
                                Service Adaptive Connect
                            </motion.h1>

                            <motion.p
                                className="text-lg text-text-sub font-light leading-relaxed max-w-md"
                                variants={itemVars}>
                                ระบบตรวจสอบและบริหารจัดการพลังงานอัจฉริยะแบบ Real-time
                                เชื่อมต่อทุกหน่วยผลิตไฟฟ้าเข้ากับเครือข่ายที่มีประสิทธิภาพสูงสุด
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-5"
                                variants={itemVars}>
                                <Button
                                    variant={'default'}
                                    className="px-10 py-4 h-auto bg-brand-dominant text-text-main font-extrabold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[var(--card-shadow)] flex items-center gap-2 group">
                                    EXPLORE PLATFORM
                                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Right content */}
                        <motion.div
                            className="lg:col-span-7 bg-panel-dark rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden group"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVars}
                        >

                            {/* Dashboard Header */}
                            <motion.div
                                variants={itemVars}
                                className="p-6 border-b border-border/50 flex justify-between items-center bg-panel-dark backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <LayoutGrid size={18} className="text-green" />
                                    <span className="text-xs font-bold tracking-widest text-panel-dark-text uppercase">Energy Portfolio</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green animate-ping"></div>
                                    <span className="text-xs text-green font-bold uppercase">Live Feed</span>
                                </div>
                            </motion.div>

                            {/* Rows Container */}
                            <div>
                                {dashboardData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVars}
                                        className="flex justify-between items-center px-4 py-3 hover:bg-green/[0.03] transition-colors border-b border-border/10 group/row">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner transition-all bg-panel-dark/20 border border-border group-hover/row:border-green/50`}>
                                                <div className={item.color === "text-panel-dark-text" ? "text-panel-dark-text" : item.color}>
                                                    {item.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-panel-dark-text uppercase tracking-wide">{item.label}</h4>
                                                <p className="text-xs text-text-sub font-brand italic">{item.sub}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-2xl font-black italic tracking-tight `}>
                                                
                                                <CountUpNumber value={item.value} className={item.color} />
                                                </p>
                                            <p className={`text-xs uppercase tracking-tight text-text-sub `}>
                                                {item.unit}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Bar Chart */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={containerVars}
                                    className="bg-panel-dark px-4 rounded-[2rem] relative overflow-hidden group/chart mt-2 shadow-inner">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-sm text-panel-dark-text tracking-widest mb-1">ไฟฟ้าผลิตได้ทั้งหมด</p>
                                            <h4 className="text-xl font-black italic uppercase"> <CountUpNumber value='60.56' className=' text-green-light' /> <span className="text-xs text-panel-dark-text opacity-30">Mwh</span></h4>
                                        </div>
                                        <BarChart3 className="text-green-light" size={20} />
                                    </div>

                                    <div className="h-28 flex items-end gap-1.5 px-2">
                                        {[30, 45, 35, 60, 55, 80, 95, 75, 85, 50, 65, 90, 97, 80, 70].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 relative overflow-hidden rounded-t-sm"
                                                style={{ height: '100%' }}
                                                variants={itemVars}
                                            >
                                                <div
                                                    className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[var(--brand-dominant)]/10 to-[var(--brand-dominant)]/70 transition-all duration-1000 ease-out"
                                                    style={{ height: `${h}%` }}
                                                ></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="m-2 flex justify-between text-xs text-text-sub tracking-widest">
                                        <span className='text-text-sub'>Node Sync History</span>
                                        <span className='text-text-sub'>Full Capacity Reach</span>
                                    </div>
                                </motion.div>

                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-panel-dark flex justify-center items-center gap-3 border-t border-border/10 backdrop-blur-sm">
                                <ShieldCheck size={14} className="text-green" />
                                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-brand-dominant italic">
                                    Secure IoT Data Transmission Verified
                                </span>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}