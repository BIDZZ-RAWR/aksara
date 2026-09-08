import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, BookOpen, BriefcaseBusiness } from 'lucide-react';
import { siteConfig, openWhatsApp } from '../config/siteConfig';

export function Hero() {
  return (
    <section id="beranda" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                {siteConfig.tagline.split(', ').map((text, i) => (
                  <span key={i} className="block">
                    {text}{i === 0 ? ',' : ''}
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Bimbingan belajar untuk siswa BTQ, PAUD & TK, SD, dan SMP dengan pendampingan yang nyaman, terarah, dan disesuaikan dengan kebutuhan belajar anak.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <button
                onClick={() => openWhatsApp()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-sm hover:bg-[#20bd5a] hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </button>
              
              <a
                href="#program"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1 transition-all"
              >
                Lihat Program
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-slate-500 font-medium"
            >
              Konsultasi mudah • Pendaftaran melalui WhatsApp
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden relative">
              <img
                src={siteConfig.assets.hero}
                alt="Siswa sedang belajar bersama tutor"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
              
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center shrink-0">
                <BriefcaseBusiness className="w-6 h-6 text-accent-700" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">Hikmawan Firman</h3>
                  <p className="text-slate-600 text-xs md:text-sm">Founder Aksara Plus</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

