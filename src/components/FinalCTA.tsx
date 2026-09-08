import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../config/siteConfig';

export function FinalCTA() {
  return (
    <section className="py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-blue-900 rounded-[40px] overflow-hidden relative shadow-sm border border-blue-800">
        
        
        <div className="relative z-10 px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent-400 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Konsultasi Gratis • Respons Cepat
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Siap Membantu Anak Belajar Lebih Terarah?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10">
              Konsultasikan kebutuhan belajar anak dan temukan program yang paling sesuai untuk mendukung prestasi mereka.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-sm hover:bg-[#20bd5a] hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </button>
              
              <a
                href="#program"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-900 transition-colors"
              >
                Lihat Program
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

