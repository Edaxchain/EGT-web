'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVars, itemVars } from '@/app/_lib/animations';
import appBadge from "@/app/_assets/badges/App.svg"
import playBadge from "@/app/_assets/badges/Play.png"
import xpalApp from "@/app/_assets/xpal.png"

export default function CTASection() {
    return (
        <section className="py-8 bg-green relative overflow-hidden">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl mx-auto px-6 relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                    {/* Left */}
                    <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.h2 variants={itemVars} className="text-4xl lg:text-5xl italic tracking-tighter leading-[0.9]">
                            <strong>X-Pal Bridge</strong>
                        </motion.h2>

                        <motion.p variants={itemVars} className="text-text-main max-w-xl mx-auto lg:mx-0 mt-8 font-light leading-relaxed">
                            สัมผัสประสบการณ์การซื้อขายพลังงานที่ง่ายและโปร่งใสที่สุด
                            จัดการพอร์ตพลังงานและแลกเปลี่ยน Token
                            ได้ทุกที่ทุกเวลาผ่านแอปพลิเคชันมือถือของคุณ
                        </motion.p>

                        {/* Store Badges Group */}
                        <motion.div
                            variants={itemVars}
                            className="flex flex-wrap gap-5 mt-8 items-center justify-center lg:justify-start">
                            {/* App Store */}
                            <motion.a
                                href="#"
                                target="_blank"
                                whileHover={{ y: -5, filter: "brightness(1.2) drop-shadow(var(--card-shadow))" }}
                                whileTap={{ scale: 0.95 }}
                                className="transition-all"
                            >
                                <Image
                                    src={appBadge}
                                    alt="Download on the App Store"
                                    width={120}
                                    height={40}
                                    style={{ height: '40px', width: 'auto', display: 'block' }}
                                    className="object-contain"
                                />
                            </motion.a>

                            {/* Google Play */}
                            <motion.a
                                href="https://play.google.com/store/apps/details?id=edax.energyblockchain&pcampaignid=web_share"
                                target="_blank"
                                whileHover={{ y: -5, filter: "brightness(1.2) drop-shadow(var(--card-shadow))" }}
                                whileTap={{ scale: 0.95 }}
                                className="transition-all"
                            >
                                <Image
                                    src={playBadge}
                                    alt="Get it on Google Play"
                                    width={135}
                                    height={40}
                                    style={{ height: '40px', width: 'auto' }}
                                    className="object-contain"
                                />
                            </motion.a>

                        </motion.div>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-6 relative flex justify-center items-center pt-4">
                        <div className="absolute -inset-4 bg-card-shadow blur-[100px] opacity-30 rounded-full pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-[260px] aspect-[9/19] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-panel-dark"
                        >
                            <Image
                                src={xpalApp}
                                alt="X-Pal Bridge Mobile App"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}