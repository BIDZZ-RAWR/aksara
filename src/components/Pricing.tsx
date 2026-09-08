import { motion } from 'framer-motion';
import { pricingPlans, openWhatsApp } from '../config/siteConfig';
import { MessageCircle, Calendar } from 'lucide-react';
import { cn } from '../utils/cn';

export function Pricing() {
  if (!pricingPlans || pricingPlans.length === 0) return null;

  return (
    <section id="biaya" className="py-20 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pilihan Program & Biaya</h2>
          <p className="text-lg text-slate-600">
            Transparan dan fleksibel. Pilih jenjang dan paket pertemuan bulanan yang sesuai dengan kebutuhan anak Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => {
            const isFeatured = plan.featured;
            const label = plan.featuredLabel;
            return (
              <motion.div
                key={plan.id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "bg-white rounded-[28px] border p-6 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:shadow-md",
                  isFeatured
                    ? "border-blue-500 shadow-lg ring-2 ring-blue-500/20"
                    : "border-slate-200 hover:border-slate-300"
                )}
              >
                {isFeatured && label && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full border border-blue-700 shadow-sm whitespace-nowrap">
                    {label}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 text-center min-h-[56px] flex items-center justify-center">
                    {plan.name}
                  </h3>

                  {/* Biaya Pendaftaran */}
                  <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 text-center mb-6">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Biaya Pendaftaran
                    </span>
                    <span className="text-2xl font-extrabold text-blue-700">
                      {plan.registrationFee}
                    </span>
                  </div>

                  {/* Biaya Per Bulan */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-1.5 mb-3 text-slate-700 font-semibold text-xs uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>Biaya per Bulan</span>
                    </div>
                    <div className="space-y-2">
                      {plan.monthlyRates.map((rate, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-100 text-sm hover:bg-slate-100/70 transition-colors"
                        >
                          <span className="text-slate-600 font-medium whitespace-nowrap">{rate.meetings}</span>
                          <span className="font-bold text-slate-900 whitespace-nowrap">{rate.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp(plan.whatsappMessage)}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold transition-all text-sm mt-4",
                    isFeatured
                      ? "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm hover:shadow"
                      : "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                  )}
                >
                  <MessageCircle className="w-4 h-4 text-white" />
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

