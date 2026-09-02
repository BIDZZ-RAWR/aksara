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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:right-6 md:left-auto md:w-auto"
        >
          <button
            onClick={() => openWhatsApp()}
            aria-label="Chat WhatsApp"
            className="w-full md:w-14 md:h-14 md:p-0 flex items-center justify-center gap-2 md:gap-0 bg-[#25D366] text-white px-6 py-4 rounded-full font-semibold shadow-lg border border-[#1da851] hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-base md:hidden">Chat WhatsApp</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
