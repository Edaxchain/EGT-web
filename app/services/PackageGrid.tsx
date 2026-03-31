"use client"

import { motion } from "framer-motion"
import { Check, Zap, MapPin, Home, Star } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card"
import { Button } from "@/app/_components/ui/button"
import { itemVars } from "@/app/_lib/animations"
import { PackageItem } from "./ServiceData"

export default function PackageGrid({ data }: { data: PackageItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      {data.map((pkg) => (
        <motion.div key={pkg.id} variants={itemVars} className="h-full flex">
          <Card className="relative flex flex-col h-full w-full rounded-[2.5rem] overflow-hidden border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

            <CardHeader className="p-8 pb-4 shrink-0">
              <div className="flex justify-between items-start mb-2">
                <div className="text-brand-dominant border-brand-dominant/30 font-medium rounded-full px-4">
                  {pkg.subtitle}
                </div>
                {pkg.saving && (
                  <span className="text-sm bg-brand-subtle text-brand-strong px-2 py-1 rounded-md font-bold">
                    ลดค่าไฟได้ ≈ {pkg.saving}.-
                  </span>
                )}
              </div>
              <CardTitle className="text-2xl font-brand text-text-main leading-tight">
                {pkg.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0 grow flex flex-col">
              <div className="space-y-4">
                <div className="bg-surface/50 p-4 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 text-brand-strong font-bold text-sm mb-1">
                    <Zap className="w-4 h-4 text-brand-dominant" />
                    {pkg.details.inverterOrCharger}
                  </div>
                  {pkg.details.type && (
                    <p className="text-xs text-text-sub ml-7">{pkg.details.type}</p>
                  )}
                </div>

                <div className="grid gap-3">
                  {pkg.details.quantity && (
                    <div className="flex items-center gap-3 text-sm text-text-main">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-dominant" />
                      <span className="font-medium">จำนวน:</span> {pkg.details.quantity}
                    </div>
                  )}
                  {pkg.details.area && (
                    <div className="flex items-center gap-3 text-sm text-text-main">
                      <MapPin className="w-4 h-4 text-text-sub" />
                      <span className="font-medium">พื้นที่:</span> {pkg.details.area}
                    </div>
                  )}
                  {pkg.details.suitableFor && (
                    <div className="flex items-start gap-3 text-sm text-text-main">
                      <Home className="w-4 h-4 text-text-sub mt-0.5" />
                      <span className="leading-tight">{pkg.details.suitableFor}</span>
                    </div>
                  )}
                </div>

                {pkg.details.usage && (
                  <div className="pt-4 border-t border-dashed">
                    <p className="text-sm font-bold text-brand-dominant flex items-center gap-2">
                      <Star className="w-4 h-4 fill-brand-dominant" />
                      {pkg.details.usage}
                    </p>
                  </div>
                )}

                {pkg.details.special && pkg.details.special.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-text-sub font-bold">คุณสมบัติพิเศษ</p>
                    <ul className="space-y-2">
                      {pkg.details.special.map((s, i) => (
                        <li key={i} className="flex gap-2 text-xs text-text-sub leading-relaxed italic">
                          <Check className="w-3 h-3 text-brand-dominant mt-0.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex-grow" />
              <Button className="w-full rounded-full py-6 mt-4 text-md font-bold shadow-lg shadow-brand-dominant/20 transition-all hover:bg-brand-strong">
                สอบถามเพิ่มเติม
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}