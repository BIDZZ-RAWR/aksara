import { Target, Layers, Smile, MessageSquareHeart } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrustStrip() {
  const points = [
    { icon: Target, label: 'Pendampingan Terarah' },
    { icon: Layers, label: 'Materi Sesuai Jenjang' },
    { icon: Smile, label: 'Suasana Belajar Nyaman' },
    { icon: MessageSquareHeart, label: 'Komunikasi dengan Orang Tua' },
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">Pendampingan Belajar yang Dirancang untuk Kebutuhan Anak</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center gap-3 py-3 ${index % 2 === 1 ? 'md:mt-6 lg:mt-0' : ''} ${index === 1 || index === 3 ? 'lg:mt-6' : ''}`}
            >
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                <point.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-700">{point.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
