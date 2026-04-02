'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { containerVars, itemVars, } from '@/app/_lib/animations'

const faqData = [
    {
        q: "Blockchain ในระบบพลังงานคืออะไร?",
        a: "Blockchain คือฐานข้อมูลแบบกระจายศูนย์ที่บันทึกทุก transaction พลังงาน ตั้งแต่การผลิต การส่ง ไปถึงการบริโภค แบบ Immutable คือแก้ไขย้อนหลังไม่ได้ ทำให้ทุกฝ่ายมั่นใจในข้อมูลที่ถูกต้อง"
    },
    {
        q: "Smart Contract ปลอดภัยแค่ไหน?",
        a: "Smart Contract ของเราผ่านการ Audit และรันอยู่บนเครือข่ายที่มีความปลอดภัยสูง ข้อกำหนดถูกเขียนเป็นโค้ดที่ทำงานอัตโนมัติเมื่อเงื่อนไขครบถ้วน ลดข้อผิดพลาดจากมนุษย์และการปลอมแปลงข้อมูล"
    },
    {
        q: "ถ้าไฟฟ้าดับ ระบบ Blockchain จะเป็นอย่างไร??",
        a: "Blockchain ของเรากระจายอยู่บน Node มากกว่า 1,000 จุดทั่วโลก ข้อมูลทั้งหมดถูก Backup อัตโนมัติ แม้ Node บางส่วนจะล่ม ระบบยังทำงานได้ต่อเนื่อง และข้อมูลไม่มีวันสูญหาย"
    },
    {
        q: " Token มีมูลค่าอย่างไร?",
        a: "Token คือหน่วยแทนมูลค่าของพลังงานที่ผลิตได้จริง คุณสามารถนำไปใช้ชำระค่าไฟฟ้าภายในระบบนิเวศ หรือแลกเปลี่ยนเป็นสิทธิประโยชน์อื่นๆ ตามที่เครือข่ายกำหนดไว้"
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            id='faq'
            className="py-12 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVars} className="mb-10">
                    <motion.h2
                        variants={itemVars}
                        className="text-4xl lg:text-5xl text-brand-dominant font-black uppercase mb-6 italic">
                        คำถามที่พบบ่อย
                    </motion.h2>
                    <p className="text-text-sub max-w-2xl font-light">เรื่อง Blockchain ที่ลูกค้ามักสอบถาม</p>
                </motion.div>

                <motion.div 
                variants = {itemVars}
                className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqData.map((item, i) => (
                        <div
                            key={i}
                            className={`border rounded-3xl transition-all duration-300 ${openIndex === i
                                    ? 'border-border/50 bg-border/[0.02]'
                                    : 'border-border/10 bg-border/[0.01] hover:border-border/20'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center p-8 text-left"
                            >
                                <span className={`font-bold transition-colors ${openIndex === i ? 'text-green' : 'text-text-main'}`}>
                                    {item.q}
                                </span>
                                <div className="text-green">
                                    {openIndex === i ? <X size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 text-text-sub font-light leading-relaxed border-t border-border/50 pt-4">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}