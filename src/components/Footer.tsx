import { siteConfig, openWhatsApp } from '../config/siteConfig';

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
              Tempat belajar yang nyaman untuk anak, dengan pendampingan personal dan laporan perkembangan rutin kepada orang tua.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navigasi</h4>
            <ul className="space-y-4">
              <li><a href="#beranda" className="text-sm hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#program" className="text-sm hover:text-white transition-colors">Program</a></li>
              <li><a href="#keunggulan" className="text-sm hover:text-white transition-colors">Keunggulan</a></li>
              <li><a href="#cara-daftar" className="text-sm hover:text-white transition-colors">Cara Daftar</a></li>
              <li><a href="#faq" className="text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Program</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => openWhatsApp("Halo, saya ingin bertanya mengenai program bimbingan belajar untuk TK.")} className="text-sm hover:text-white transition-colors">Bimbingan Belajar TK</button>
              </li>
              <li>
                <button onClick={() => openWhatsApp("Halo, saya ingin bertanya mengenai program bimbingan belajar untuk SD.")} className="text-sm hover:text-white transition-colors">Bimbingan Belajar SD</button>
              </li>
              <li>
                <button onClick={() => openWhatsApp("Halo, saya ingin bertanya mengenai program bimbingan belajar untuk SMP.")} className="text-sm hover:text-white transition-colors">Bimbingan Belajar SMP</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Kontak & Info</h4>
            <ul className="space-y-4">
              {!siteConfig.whatsappNumber.includes('X') && (
                <li className="text-sm text-slate-400">
                  <strong className="block text-slate-300 font-medium mb-1">WhatsApp</strong>
                  <button onClick={() => openWhatsApp()} className="hover:text-white transition-colors">
                    +{siteConfig.whatsappNumber}
                  </button>
                </li>
              )}
              {siteConfig.address && (
                <li className="text-sm text-slate-400 mt-4">
                  <strong className="block text-slate-300 font-medium mb-1">Alamat</strong>
                  {siteConfig.address}
                </li>
              )}
              {siteConfig.operationalHours && (
                <li className="text-sm text-slate-400 mt-4">
                  <strong className="block text-slate-300 font-medium mb-1">Jam Operasional</strong>
                  {siteConfig.operationalHours}
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
