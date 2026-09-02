import { motion } from 'framer-motion';
import { siteConfig, openWhatsApp } from '../config/siteConfig';
import { Check, MessageCircle } from 'lucide-react';

export function FeatureHighlight() {
  const points = [
    'Belajar bertahap dari dasar',
    'Tanya jawab tanpa rasa takut',
    'Latihan soal bervariasi',
    'Pendampingan materi sekolah'
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm border border-slate-200 relative">
              <img
                src={siteConfig.assets.learning}
                alt="Proses pembelajaran yang interaktif"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Bantu Anak Memahami,<br/>
              Bukan Sekadar Menghafal.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Pendampingan difokuskan pada pemahaman materi, latihan rutin, dan proses belajar yang sesuai dengan kebutuhan anak di setiap jenjang.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-700 font-bold" />
                  </div>
                  <span className="font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-sm hover:bg-[#20bd5a] hover:-translate-y-1 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasikan Kebutuhan Anak
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
