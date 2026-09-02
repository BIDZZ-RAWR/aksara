import { motion } from 'framer-motion';
import { Users, BookOpenCheck, Smile, BrainCircuit, PenTool, MessageSquare } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Users,
      title: 'Pendampingan Personal',
      description: 'Pendekatan yang disesuaikan dengan karakter dan cara belajar masing-masing anak.'
    },
    {
      icon: BookOpenCheck,
      title: 'Materi Sesuai Jenjang',
      description: 'Kurikulum dan materi selalu update dengan standar pendidikan di sekolah.'
    },
    {
      icon: Smile,
      title: 'Belajar Lebih Nyaman',
      description: 'Lingkungan yang interaktif dan tutor yang ramah membuat anak tidak mudah bosan.'
    },
    {
      icon: BrainCircuit,
      title: 'Fokus pada Pemahaman',
      description: 'Membimbing anak untuk memahami konsep, bukan sekadar menghafal rumus.'
    },
    {
      icon: PenTool,
      title: 'Pendampingan Tugas',
      description: 'Membantu anak menyelesaikan tugas sekolah dengan memberikan panduan yang tepat.'
    },
    {
      icon: MessageSquare,
      title: 'Komunikasi dengan Orang Tua',
      description: 'Laporan perkembangan belajar rutin diberikan agar orang tua dapat memantau.'
    }
  ];

  return (
    <section id="keunggulan" className="py-20 md:py-24 bg-white border-y border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Kenapa Memilih<br/>Bimbingan Belajar Kami?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Belajar bukan hanya tentang menyelesaikan soal, tetapi tentang membangun pemahaman dan kebiasaan belajar yang baik sejak dini.
            </p>
          </div>

          {/* Right Column: List of Benefits */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
