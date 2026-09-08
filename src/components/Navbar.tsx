import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig, openWhatsApp } from '../config/siteConfig';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Program', href: '#program' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Biaya', href: '#biaya' },
    { label: 'Cara Daftar', href: '#cara-daftar' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2">
            {siteConfig.assets.logo ? (
              <img src={siteConfig.assets.logo} alt={siteConfig.brandName} className="h-8 w-auto rounded-md" />
            ) : null}
            <span className="text-xl font-bold text-slate-900 tracking-tight">{siteConfig.brandName}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <button
              onClick={() => openWhatsApp()}
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20bd5a] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 -mr-1 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 md:hidden"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed top-20 left-0 w-full bg-white border-b border-slate-100 z-40 overflow-hidden md:hidden shadow-lg"
            >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-blue-600 p-2 rounded-lg hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  openWhatsApp();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl text-base font-semibold mt-4 shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </button>
            </div>
           </motion.div>
            </>
         )}
       </AnimatePresence>
    </>
  );
}
