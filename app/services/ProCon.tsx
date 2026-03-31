"use client"

import { motion } from "framer-motion"
import { CheckCircle2, HelpCircle, Sun, BatteryCharging, Leaf, Zap, ShieldCheck, AlertCircle } from "lucide-react"
import { containerVars, itemVars } from "@/app/_lib/animations"

export default function ProCons() {
  const pros = [
    { icon: <Zap className="w-5 h-5" />, text: "ผลิตไฟฟ้าได้ทุกขนาด ทั้งในบ้าน การเกษตร หรือโรงงานอุตสาหกรรม" },
    { icon: <Sun className="w-5 h-5" />, text: "พลังงานที่ไม่จำกัด ผลิตไฟฟ้าจากแสงอาทิตย์ได้ตลอดไป" },
    { icon: <Zap className="text-brand-dominant w-5 h-5" />, text: "ช่วยลดค่าไฟฟ้าได้มากถึง 60 - 90% (ขึ้นอยู่กับการออกแบบ)" },
    { icon: <Leaf className="w-5 h-5" />, text: "พลังงานสะอาดที่เป็นมิตรต่อสิ่งแวดล้อม" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "ปลอดภัย ไม่มีมลพิษที่ส่งผลเสียต่อสุขภาพ" },
  ]

  const cons = [
    { icon: <AlertCircle className="w-5 h-5" />, text: "ปริมาณการผลิตขึ้นอยู่กับแสงอาทิตย์ในแต่ละวัน" },
    { icon: <BatteryCharging className="w-5 h-5" />, text: "พลังงานขึ้นอยู่กับจำนวนแผงที่ติดตั้ง" },
    { icon: <HelpCircle className="w-5 h-5" />, text: "ควรศึกษาและคำนวณก่อนติดตั้ง เพื่อความคุ้มค่าสูงสุด" },
    { icon: <AlertCircle className="w-5 h-5" />, text: "ไม่สามารถใช้พลังงานโซล่าเซลล์ได้โดยตรงในตอนกลางคืน" },
    { icon: <BatteryCharging className="w-5 h-5" />, text: "หากต้องการใช้ตอนกลางคืน ต้องมีอุปกรณ์แบตเตอรี่เพิ่มเติม" },
  ]

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVars}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-extrabold text-brand-strong mb-4">
            เจาะลึก ข้อดี & ข้อควรพิจารณา
          </h2>
          <p className="text-text-sub font-light">ข้อมูลจริงเพื่อประกอบการตัดสินใจก่อนการลงทุน</p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border origin-top">
            <div className="sticky top-1/2 -translate-x-1/2 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center z-10 shadow-sm">
              <Sun className="w-4 h-4 text-brand-dominant animate-pulse" />
            </div>
          </div>

          {/* Pros */}
          <motion.div 
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-3 mb-8 md:justify-end">
              <h3 className="text-2xl font-bold text-brand-strong uppercase tracking-wider">ข้อดี</h3>
              <CheckCircle2 className="w-7 h-7 text-brand-dominant" />
            </div>
            
            <div className="space-y-6">
              {pros.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVars}
                  className="flex gap-4 md:flex-row-reverse text-left md:text-right group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-dominant/10 flex items-center justify-center text-brand-dominant transition-colors group-hover:bg-brand-dominant group-hover:text-white">
                    {item.icon}
                  </div>
                  <p className="text-text-main font-light leading-relaxed pt-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cons */}
          <motion.div 
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="w-7 h-7 text-text-sub" />
              <h3 className="text-2xl font-bold text-text-sub uppercase tracking-wider">ข้อควรพิจารณา</h3>
            </div>

            <div className="space-y-6">
              {cons.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVars}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-text-sub/20 flex items-center justify-center text-text-main transition-colors group-hover:bg-text-sub group-hover:text-text-main-inverted">
                    {item.icon}
                  </div>
                  <p className="text-text-main font-light leading-relaxed pt-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

