import { motion } from 'framer-motion';
import { pricingPlans, openWhatsApp } from '../config/siteConfig';
import { Check, MessageCircle } from 'lucide-react';
import { cn } from '../utils/cn';

export function Pricing() {
  if (!pricingPlans || pricingPlans.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pilihan Program & Biaya</h2>
          <p className="text-lg text-slate-600">
            Pilih program yang sesuai dengan jenjang dan kebutuhan belajar anak Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const isFeatured = (plan as { featured?: boolean }).featured;
            const label = (plan as { featuredLabel?: string }).featuredLabel;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-white rounded-[28px] border p-8 shadow-sm flex flex-col relative",
                isFeatured
                  ? "border-blue-400 lg:-translate-y-2 lg:scale-[1.02] shadow-lg"
                  : "border-slate-200"
              )}
            >
              {isFeatured && label && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-400 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full border border-accent-500 shadow-sm whitespace-nowrap">
                  {label}
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="text-2xl font-extrabold text-blue-700 mb-8">{plan.price}</div>
              
              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openWhatsApp(plan.whatsappMessage)}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold transition-colors",
                  isFeatured
                    ? "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm"
                    : "bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                <MessageCircle className={cn("w-5 h-5", isFeatured ? "text-white" : "text-[#25D366]")} />
                Daftar via WhatsApp
              </button>
            </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
