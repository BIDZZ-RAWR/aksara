import { useState } from 'react';
import { testimonials } from '../config/siteConfig';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

function AvatarImage({ src, name }: { src?: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={`Foto ${name}`}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-14 h-14 rounded-full object-cover shadow-sm border border-white shrink-0"
      />
    );
  }

  return (
    <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-sm border border-white shrink-0">
      {name.charAt(0)}
    </div>
  );
}

export function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cerita dari Orang Tua & Siswa</h2>
          <p className="text-lg text-slate-600">
            Pengalaman mereka yang telah mempercayakan proses belajar anaknya bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-[28px] p-8 border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <AvatarImage src={testimonial.image} name={testimonial.name} />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-slate-700 italic relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


