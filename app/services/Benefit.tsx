"use client";

import { Wallet, Zap, Gift } from "lucide-react";

export default function Benefit() {
    return (
        <section
            id="benefits"
            className="py-24 px-8 md:px-12 lg:px-48 bg-brand-dominant/5 rounded-[3rem] my-20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-brand-strong tracking-wider">
                        สิทธิพิเศษเหนือระดับเฉพาะลูกค้าของเราเท่านั้น
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/*เทคโนโลยี */}
                    <div className="bg-surface p-8 rounded-[2rem] shadow-sm border border-brand-dominant/10">
                        <div className="w-12 h-12 bg-brand-dominant/10 rounded-2xl flex items-center justify-center mb-6">
                            <Zap className="text-brand-dominant" />
                        </div>
                        <h4 className="font-bold text-xl mb-4">
                            Smart Innovation
                        </h4>
                        <ul className="space-y-3 text-sm text-text-main">
                            <li>• นวัตกรรม Full Fusion Deambox</li>
                            <li>• สัญญาอัจฉริยะ (Blockchain Tech)</li>
                            <li>• อัปเดตซอฟต์แวร์ฟรีตลอดอายุการใช้งาน</li>
                        </ul>
                    </div>

                    {/* สิทธิพิเศษในเครือ */}
                    <div className="bg-surface p-8 rounded-[2rem] shadow-sm border border-brand-dominant/10">
                        <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6">
                            <Gift className="text-yellow-600" />
                        </div>
                        <h4 className="font-bold text-xl mb-4">
                            Exclusive Discount
                        </h4>
                        <ul className="space-y-3 text-sm text-text-main">
                            <li>• ส่วนลดห้างทองเยาวราชทุกสาขา</li>
                            <li>• ส่วนลดทุกบริการในเครือบริษัท</li>
                            <li>• ระบบสะสมพอยต์แลกสิทธิพิเศษ</li>
                        </ul>
                    </div>

                    {/* การเงิน */}
                    <div className="bg-surface p-8 rounded-[2rem] shadow-sm border border-brand-dominant/10">
                        <div className="w-12 h-12 bg-green-400/10 rounded-2xl flex items-center justify-center mb-6">
                            <Wallet className="text-green-600" />
                        </div>
                        <h4 className="font-bold text-xl mb-4">
                            Financial Freedom
                        </h4>
                        <ul className="space-y-3 text-sm text-text-main">
                            <li>• ผ่อนชำระผ่านธนาคารชั้นนำ</li>
                            <li>• Redeem Cash Back Point</li>
                            <li>• Energy Trade (ขายไฟคืน 2.2 บาท/หน่วย)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
