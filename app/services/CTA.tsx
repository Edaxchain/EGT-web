'use client'
import { Button } from "../_components/ui/button"


export default function CTAS() {
    return (
        <section
            id="CTA"
            className="relative overflow-hidden bg-brand-subtle py-16 px-6">
            {/* Background Pattern (Dot Grid) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle, var(--brand-subtle) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">

                {/* Left Content */}
                <div className="text-center md:text-left flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight italic">
                        พร้อมติดตั้งพลังงานสะอาดวันนี้!
                    </h2>
                    <p className="text-text-main font-brand max-w-xl leading-relaxed">
                        ไม่ว่าจะเป็นระบบโซล่าเซลล์หรือสถานีชาร์จ EV ให้เราช่วยออกแบบสิ่งที่เหมาะสมที่สุดสำหรับคุณ
                        ฟรีค่าสำรวจหน้างานและออกแบบโดยวิศวกรผู้ชำนาญการ
                    </p>
                </div>

                {/* Right Actions */}
                <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
                    <Button
                        size="lg"
                        className="w-64 bg-brand-dominant hover:bg-brand-strong text-text-main font-bold py-7 rounded-xl shadow-lg transition-all hover:-translate-y-1 active:scale-95 border-none"
                    >
                        ติดต่อรับเสนอราคาฟรี
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="w-64 bg-transparent border-border/50 hover:border-border hover:bg-brand-strong text-text-main font-medium py-6 rounded-xl transition-all"
                    >
                        ปรึกษาผู้เชี่ยวชาญ
                    </Button>

                    <div className="text-center md:text-right mt-2">
                        <span className="block text-[13px] text-text-main/50 uppercase tracking-widest mb-1">โทรหาเรา</span>
                        <strong className="text-lg md:text-xl text-text-main tracking-tight">
                            02-103-4555 | 086-897-2555
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    )
}