import { siteConfig, openWhatsApp } from '../config/siteConfig';
import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-2 mb-6 text-white">
              {siteConfig.assets.logo ? (
                 <img src={siteConfig.assets.logo} alt={siteConfig.brandName} className="h-8 w-auto rounded-md grayscale opacity-90" />
              ) : null}
              <span className="text-xl font-bold tracking-tight">{siteConfig.brandName}</span>
            </a>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Bimbingan belajar yang nyaman untuk anak, dengan pendampingan personal dan laporan perkembangan rutin kepada orang tua.
            </p>

            {siteConfig.instagram && (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-semibold bg-amber-400/10 px-3.5 py-2 rounded-xl border border-amber-400/20 transition-all"
              >
                <Instagram className="w-4 h-4" />
                {siteConfig.instagram}
              </a>
            )}
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#beranda" className="text-sm hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#program" className="text-sm hover:text-white transition-colors">Program Belajar</a></li>
              <li><a href="#keunggulan" className="text-sm hover:text-white transition-colors">Keunggulan</a></li>
              <li><a href="#biaya" className="text-sm hover:text-white transition-colors">Pilihan Biaya</a></li>
              <li><a href="#cara-daftar" className="text-sm hover:text-white transition-colors">Cara Daftar</a></li>
              <li><a href="#faq" className="text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Program Belajar</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => openWhatsApp("Halo, saya ingin bertanya mengenai program BTQ (Baca Tulis Al-Qur'an).")} className="text-sm hover:text-white transition-colors text-left">Baca Tulis Al-Qur'an (BTQ)</button>
              </li>
              <li>
                <button onClick={() => openWhatsApp("Halo, saya ingin bertanya mengenai program bimbingan belajar untuk PAUD & TK.")} className="text-sm hover:text-white transition-colors text-left">Bimbingan PAUD & TK</button>
              </li>
              <li>
                <button onClick={() => openWhatsApp("Halo, saya ingin bertanya mengenai program bimbingan belajar untuk SD.")} className="text-sm hover:text-white transition-colors text-left">Bimbingan Sekolah Dasar (SD)</button>
              </li>
              <li>
                <button onClick={() => openWhatsApp("Halo, saya ingin bertanya mengenai program bimbingan belajar untuk SMP.")} className="text-sm hover:text-white transition-colors text-left">Bimbingan SMP</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Kontak & Sosmed</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <strong className="block text-slate-300 font-medium mb-1">WhatsApp / Telepon</strong>
                <button onClick={() => openWhatsApp()} className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">
                  <Phone className="w-4 h-4" />
                  {siteConfig.displayWhatsappNumber}
                </button>
              </li>
              {siteConfig.email && (
                <li>
                  <strong className="block text-slate-300 font-medium mb-1">Email</strong>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-slate-400" />
                    {siteConfig.email}
                  </a>
                </li>
              )}
              {siteConfig.instagram && (
                <li>
                  <strong className="block text-slate-300 font-medium mb-1">Instagram</strong>
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Instagram className="w-4 h-4 text-amber-400" />
                    {siteConfig.instagram}
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} {siteConfig.brandName}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

