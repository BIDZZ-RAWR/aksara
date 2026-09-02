import { motion } from 'framer-motion';
import { openWhatsApp } from '../config/siteConfig';

export function HowItWorks() {
  const steps = [
    {
      title: 'Chat WhatsApp',
      description: 'Hubungi admin dan sampaikan jenjang serta kebutuhan belajar anak.'
    },
    {
      title: 'Konsultasi',
      description: 'Diskusikan program, jadwal, dan informasi biaya dengan tim kami.'
    },
    {
      title: 'Mulai Belajar',
      description: 'Pilih program yang sesuai dan mulai mengikuti bimbingan belajar.'
    }
  ];

  return (
    <section id="cara-daftar" className="py-20 md:py-24 bg-blue-50 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cara Mulai Belajar</h2>
          <p className="text-lg text-slate-600">
            Proses pendaftaran sederhana. Hubungi kami melalui WhatsApp untuk mendapatkan informasi program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-[2px] bg-accent-200 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-accent-100 flex items-center justify-center text-3xl font-extrabold text-accent-600 mb-6 shadow-sm">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
              
              {index === 0 && (
                <button
                  onClick={() => openWhatsApp("Halo, saya ingin mendaftar bimbingan belajar. Saya ingin mendapatkan informasi mengenai proses pendaftaran.")}
                  className="mt-6 text-sm font-semibold text-[#25D366] hover:text-[#20bd5a] flex items-center gap-1 transition-colors"
                >
                  Hubungi Admin &rarr;
                </button>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
