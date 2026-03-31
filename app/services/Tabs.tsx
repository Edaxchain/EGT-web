"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/app/_components/ui/tabs"
import { containerVars, itemVars } from "@/app/_lib/animations"
import { solarPackages, EVPackages, solarConditions, EVConditions } from "./ServiceData"
import PackageGrid from "./PackageGrid"

export default function ServiceTabs() {
    const [activeTab, setActiveTab] = useState("solar")

    return (
        <section
        id="package"
        className="py-24 px-8 md:px-12 lg:px-48 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVars}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-brand-strong mb-8">
                        เลือกแพ็กเกจบริการที่ใช่สำหรับคุณ
                    </h2>

                    <Tabs
                        defaultValue="solar"
                        onValueChange={(value) => setActiveTab(value)}
                        className="w-fit mx-auto"
                    >
                        <TabsList className="inline-flex h-auto w-fit bg-surface border border-border p-0 rounded-full shadow-sm">

                            <TabsTrigger
                                value="solar"
                                className="rounded-full px-10 py-4 text-lg font-bold transition-all data-[state=active]:bg-brand-dominant data-[state=active]:text-text-main"
                            >
                                Solar Cell
                            </TabsTrigger>
                            <TabsTrigger
                                value="ev"
                                className="rounded-full px-10 py-4 text-lg font-bold transition-all data-[state=active]:bg-brand-dominant data-[state=active]:text-text-main"
                            >
                                EV Station
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        variants={containerVars}
                    >
                        <PackageGrid data={activeTab === "solar" ? solarPackages : EVPackages} />
                    </motion.div>
                </AnimatePresence>

            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                variants={containerVars}
                className="mt-12 max-w-4xl mx-auto"
            >
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-black text-brand-strong italic">
                        ค่าบริการเพิ่มเติม กรณีปรับพื้นที่ติดตั้ง
                    </h3>
                    <p className="text-text0sub mt-2 text-sm italic">
                        * หมายเหตุ: หากมีการปรับพื้นที่สำหรับติดตั้งเพิ่มเติม จะมีค่าใช้จ่ายเกิดขึ้นจริงตามหน้างาน
                    </p>
                </div>

                {/* Table Area */}
                <div className="border border-border/60 rounded-[2.5rem] bg-background shadow-sm overflow-hidden">
                    <div className="hidden md:grid grid-cols-[1fr_250px] bg-surface border-b border-border/60 px-8 py-5">
                        <div className="text-sm font-bold text-brand-strong">รายการปรับปรุงพื้นที่</div>
                        <div className="text-sm font-bold text-brand-strong text-right">อัตราค่าบริการ</div>
                    </div>
                    <div className="divide-y divide-border/40">
                        {(activeTab === "solar" ? solarConditions : EVConditions).additionalCosts.map((cost, i) => (
                            <div
                                key={i}
                                className="flex flex-col md:grid md:grid-cols-[1fr_250px] py-5 md:px-8 md:py-4 hover:bg-surface/30 transition-all gap-2 md:gap-0"
                            >
                                <div className="text-sm text-text-main font-medium flex items-start leading-relaxed">
                                    <span className="text-brand-dominant mr-3 font-bold shrink-0">{i + 1}.</span>
                                    <span>{cost.item}</span>
                                </div>
                                <div className="text-sm font-bold text-brand-dominant md:text-brand-strong text-left md:text-right pl-7 md:pl-0">
                                    <span className="md:hidden text-[10px] text-muted-foreground font-normal block mb-0.5">ราคา:</span>
                                    {cost.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4">
                    <h4 className="text-lg font-bold text-brand-strong px-2">ข้อกำหนดและเงื่อนไข</h4>
                    {(activeTab === "solar" ? solarConditions : EVConditions).condition.map((text, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-surface/50 rounded-2xl border border-border/30">
                            <div className="w-6 h-6 rounded-full bg-brand-dominant/10 text-text-main flex items-center justify-center shrink-0 text-xs font-bold">
                                {i + 1}
                            </div>
                            <p className="text-xs text-text-sub leading-relaxed">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}