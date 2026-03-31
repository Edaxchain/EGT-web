"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Calculator, CheckCircle2 } from "lucide-react"
import { Input } from "@/app/_components/ui/input"
import { Slider } from "@/app/_components/ui/slider"
import { Button } from "@/app/_components/ui/button"
import Link from "next/link"

export default function Hero() {
    const [bill, setBill] = useState<number | "">(2000);
    const [dayUsage, setDayUsage] = useState<number[]>([60])

    const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === "") {
            setBill("");
            return;
        }
        const num = parseInt(value, 10);
        setBill(isNaN(num) ? "" : num);
    };

    const results = useMemo(() => {
        const currentBill = Number(bill);

        if (currentBill === 0) {
            return { kw: "0.00", panels: 0, area: "0.0", saving: "0" };
        }
        const monthlyUnits = currentBill / 4.7
        const dayUnits = monthlyUnits * (dayUsage[0] / 100)
        const recommendedKW = dayUnits / 30 / 4
        if (currentBill === 0) {
            return { kw: "0.00", panels: 0, area: "0.0", saving: "0" };
        }

        return {
            kw: Math.max(recommendedKW, 1.5).toFixed(2),
            panels: Math.ceil(recommendedKW * 1000 / 550),
            area: (Math.ceil(recommendedKW * 1000 / 550) * 2.6).toFixed(1),
            saving: (dayUnits * 4.7).toLocaleString(undefined, { maximumFractionDigits: 0 })
        }
    }, [bill, dayUsage])



    return (
        <section className="relative min-h-screen pt-12 pb-12 bg-brand-subtle overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-dominant/80 rounded-full blur-3xl -mr-64 -mt-32" />
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-dominant/10 rounded-full text-brand-dominant font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4" /> ประสบการณ์ธุรกิจไฟฟ้ากว่า 10 ปี
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-black text-brand-strong leading-[1.1] italic">
                        บริการแบบครบวงจรตามมาตรฐานสากล
                    </h1>

                    <p className="text-lg text-text-sub max-w-md leading-relaxed">
                        ออกแบบและควบคุมการติดตั้งโดยทีมงานวิศวกรผู้ชำนาญการ
                        พร้อมนวัตกรรม <span className="font-bold text-brand-strong">REST Activities</span> ที่ช่วยให้คุณคุ้มค่ามากกว่าแค่การประหยัดไฟ
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm font-medium">
                        <span className="text-brand-dominant">• อุปกรณ์ผ่านมาตรฐาน</span>
                        <span className="text-brand-dominant">• ทีมงานทุกคนผ่านการอบรม</span>
                        <span className="text-brand-dominant">• ออกแบบ, คำนวนความเข้มของแสงแดดในแต่ละพื้นที่</span>

                    </div>
                </motion.div>

                {/* Right Side: Calculator Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-foreground/5 p-8 lg:p-10 rounded-[3.5rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-border/40 relative z-10"
                >
                    <div className="space-y-8">
                        <h3 className="text-xl font-black text-brand-strong flex items-center gap-3">
                            <Calculator className="text-brand-dominant" />
                            เช็คความคุ้มค่าสำหรับคุณ
                        </h3>

                        {/* Input */}
                        <div className="space-y-3">
                            <p className="text-sm font-bold text-text-main">ค่าไฟเฉลี่ยต่อเดือน (บาท)</p>
                            <div className="relative">
                                <Input
                                    type="number"
                                    value={bill}
                                    onChange={handleBillChange}
                                    onFocus={(e) => e.target.select()}
                                    placeholder="0"
                                    className="h-16 rounded-2xl text-2xl font-black border-2 focus:border-brand-dominant pl-6 pr-16 bg-surface/30"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-text-main">THB</span>
                            </div>
                        </div>

                        {/* Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm font-bold text-text-main">
                                <p>สัดส่วนการใช้ไฟกลางวัน</p>
                                <p className="text-brand-dominant">{dayUsage[0]}%</p>
                            </div>
                            <Slider
                                defaultValue={[60]}
                                max={100}
                                step={5}
                                onValueChange={setDayUsage}
                                className="py-4"
                            />
                        </div>

                        {/* Result Box */}
                        <div className="bg-brand-dominant/5 rounded-[2.5rem] p-6 grid grid-cols-2 gap-4 border border-brand-dominant/10">
                            <div className="space-y-1">
                                <p className="text-xl uppercase font-bold text-text-main tracking-wider">ระบบที่แนะนำ</p>
                                <p className="text-xl font-black text-brand-strong">{results.kw} <span className="text-xs font-normal">kW</span></p>
                            </div>
                            <div className="space-y-1 text-right">
                                <p className="text-xl uppercase font-bold text-text-main tracking-wider">ประหยัดได้ประมาณ</p>
                                <p className="text-xl font-black text-brand-strong">{results.saving} <span className="text-xs font-normal">บาท/เดือน</span></p>
                            </div>
                            <div className="space-y-1 border-t border-brand-dominant/10 pt-3">
                                <p className="text-lg uppercase font-bold text-text-main tracking-wider">จำนวนแผง</p>
                                <p className="text-lg font-bold text-brand-strong">{results.panels} <span className="text-xs font-normal">แผง</span></p>
                            </div>
                            <div className="space-y-1 text-right border-t border-brand-dominant/10 pt-3">
                                <p className="text-lg uppercase font-bold text-text-main tracking-wider">พื้นที่ขั้นต่ำ</p>
                                <p className="text-lg font-bold text-brand-strong">{results.area} <span className="text-xs font-normal">ตร.ม.</span></p>
                            </div>
                        </div>

                        <Button asChild
                        className="w-full h-16 rounded-full bg-brand-strong hover:bg-brand-dominant text-text-main-inverted text-lg font-bold transition-all shadow-xl shadow-brand-strong/20">
                            <Link href={'/services#package'}>ดูแพ็กเกจที่เหมาะกับคุณ</Link>
                        </Button>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}