import { programs } from '../config/siteConfig';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export function Programs() {
  return (
    <section id="program" className="py-20 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Program Bimbingan Belajar</h2>
          <p className="text-lg text-slate-600">
            Pilihan program untuk mendampingi proses belajar anak sesuai jenjang pendidikannya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[28px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent-400 border border-accent-500 px-3 py-1 rounded-full text-sm font-bold text-slate-900 shadow-sm">
                  {program.level}
                </div>
              </div>

              <div className="p-6 xl:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-6 flex-1">
                  {program.description}
                </p>

                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
