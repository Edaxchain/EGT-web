import { Leaf } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full bg-background text-text-main border-t border-ink py-16 px-6 md:px-12 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-dominant rounded-xl flex items-center justify-center">
                <Leaf size={18} fill="text-text-main"/>
              </div>
              <span className="font-bold text-lg tracking-tighter uppercase">
                Energy Trutol
              </span>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3">
              {['f', 'in', 'yt', 'ig'].map((social) => (
                <div key={social} className="w-8 h-8 rounded-lg border border-ink flex items-center justify-center text-xs text-text-main/60 hover:border-brand-dominant hover:text-brand-dominant transition-colors cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-brand-dominant mb-4 uppercase tracking-wider text-sm">บริการ</h4>
            <ul className="space-y-2 text-sm text-text-main/70 font-light">
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">Solar Rooftop</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">On-Grid System</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">Off-Grid System</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">Hybrid System</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">EV Charger</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-brand-dominant mb-4 uppercase tracking-wider text-sm">เกี่ยวกับเรา</h4>
            <ul className="space-y-2 text-sm text-text-main/70 font-light">
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">ประวัติบริษัท</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">ทีมงาน</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">ผลงาน</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">ข่าวสาร</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">ร่วมงานกับเรา</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-brand-dominant mb-4 uppercase tracking-wider text-sm">ช่วยเหลือ</h4>
            <ul className="space-y-2 text-sm text-text-main/70 font-light">
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">ติดต่อเรา</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">คำถามที่พบบ่อย</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">รับประกันสินค้า</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">บริการหลังการขาย</li>
              <li className="hover:text-brand-dominant cursor-pointer transition-colors">นโยบายความเป็นส่วนตัว</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-2 border-t border-border/50 text-[11px] text-text-main/40 uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 Energy Trutol. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Thailand</span>
            <span>Sustainable Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}