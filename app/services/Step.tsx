"use client"

import { Search, PenTool, ClipboardCheck, FileText } from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"
import { motion } from "framer-motion"
import { containerVars, itemVars, lineVars } from "@/app/_lib/animations"

export default function InstallationSteps() {
    const steps = [
        {
            id: 1,
            title: "สำรวจก่อนการติดตั้ง",
            icon: <Search className="w-6 h-6" />,
            color: "bg-[#6366f1]",
            details: [
                "สำรวจพื้นที่หลังคาอาคารเพื่อออกแบบและกำหนดตำแหน่ง",
                "สำรวจจุดติดตั้งตู้ไฟฟ้าและอินเวอร์เตอร์ให้เหมาะสม",
                "สำรวจจุดเดินสายไฟจากแผงโซล่าเซลล์ไปยังตู้ไฟฟ้า",
                "สำรวจจุดเชื่อมต่อระบบโซล่าเซลล์เข้ากับการไฟฟ้า"
            ]
        },
        {
            id: 2,
            title: "ติดตั้งระบบ",
            icon: <PenTool className="w-6 h-6" />,
            color: "bg-[#10b981]",
            details: [
                "เลือกใช้อินเวอร์เตอร์และแผงโซล่าเซลล์ที่มีคุณภาพ",
                "ติดตั้งโครงสร้างและแผงตามแบบที่วางไว้",
                "ติดตั้งตู้ไฟฟ้าของระบบโซล่าเซลล์",
                "ติดตั้งท่อเดินสายไฟและเชื่อมต่อระบบเข้ากับการไฟฟ้า"
            ]
        },
        {
            id: 3,
            title: "ตรวจสอบหลังการติดตั้ง",
            icon: <ClipboardCheck className="w-6 h-6" />,
            color: "bg-[#3b82f6]",
            details: [
                "ตรวจสอบความเรียบร้อยของการติดตั้งทั้งหมด",
                "ตรวจเช็คอุปกรณ์ต่างๆ ให้พร้อมใช้งาน",
                "ทดสอบการทำงานของระบบโซล่าเซลล์ที่ติดตั้ง"
            ]
        },
        {
            id: 4,
            title: "ขออนุญาตกับหน่วยงาน",
            icon: <FileText className="w-6 h-6" />,
            color: "bg-[#f97316]",
            details: [
                "ขออนุญาตประกอบกิจการพลังงานกับ กกพ.",
                "ขออนุญาตติดตั้งและเข้าร่วมโครงการขายไฟคืน"
            ]
        }
    ]

    return (
        <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVars}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl font-extrabold text-brand-strong mb-6 tracking-tight">
                        ขั้นตอนขอรับการติดตั้ง
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed">
                        เริ่มต้นตั้งแต่ออกแบบจนถึงเชื่อมต่อการไฟฟ้า
                        เราดูแลทุกรายละเอียดเพื่อให้คุณมั่นใจในระบบพลังงานสะอาดที่ยั่งยืน
                    </p>
                </motion.div>

                <div className="relative">

                    <motion.div
                        variants={containerVars}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
                    >
                        {steps.map((step) => (
                            <motion.div
                                key={step.id}
                                variants={itemVars}
                                className="h-full flex">
                                <Card className="relative overflow-hidden border-border bg-surface rounded-[2rem] transition-all duration-300 hover:shadow-xl group h-full flex flex-col w-full">                                    <CardHeader className="pb-4 shrink-0">
                                    {/* Icon Badge */}
                                    <div className={`w-12 h-12 ${step.color} text-text-main rounded-2xl flex items-center justify-center mb-4 shadow-md transition-transform group-hover:scale-110`}>
                                        {step.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dominant">Step 0{step.id}</span>
                                        <CardTitle className="text-xl font-bold leading-tight">{step.title}</CardTitle>
                                    </div>
                                </CardHeader>

                                    <CardContent className="flex-grow">
                                        <ul className="space-y-3">
                                            {step.details.map((detail, idx) => (
                                                <li key={idx} className="text-[13px] text-text-main font-light leading-snug flex gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-dominant mt-1.5 shrink-0" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

