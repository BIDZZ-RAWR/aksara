import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../config/siteConfig';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 16 }}
          className="fixed bottom-5 right-5 z-50"
        >
          <button
            onClick={() => openWhatsApp()}
            aria-label="Chat WhatsApp"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 md:px-5 md:py-3.5 rounded-full font-bold shadow-xl border border-[#1da851] hover:bg-[#20bd5a] hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span className="text-sm font-bold pr-1">Chat WhatsApp</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
