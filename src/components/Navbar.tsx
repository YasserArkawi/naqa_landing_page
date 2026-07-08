import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // إلغاء السلوك الافتراضي
  
    // 1. أغلق القائمة فوراً لتبدأ حركة الاختفاء (Animation)
    setIsOpen(false);
  
    // 2. انتظر 200 ميلي ثانية (حتى ينتهي الـ الأنيميشن تماماً وتختفي القائمة من الـ DOM)
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
  
        // 3. ابدأ التمرير الآن والصفحة مستقرة تماماً
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 200); // 200ms تعادل duration={0.2} الخاصة بـ Framer Motion
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* الشعار */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Leaf size={24} />
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">نقاء</span>
          </div>

          {/* روابط الشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-600 hover:text-brand-600 font-medium transition-colors">من نحن</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-600 hover:text-brand-600 font-medium transition-colors">خدماتنا</a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-gray-600 hover:text-brand-600 font-medium transition-colors">آلية العمل</a>
            <a href="#vision" onClick={(e) => handleNavClick(e, 'vision')} className="text-gray-600 hover:text-brand-600 font-medium transition-colors">رؤيتنا</a>
          </div>

          {/* زر التواصل للشاشات الكبيرة */}
          <div className="hidden md:flex">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30">
              تواصل معنا
            </a>
          </div>

          {/* زر الهامبرغر للموبايل */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-brand-600 transition-colors p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة العائمة فوق المحتوى */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 border-b border-gray-100 bg-white/95 backdrop-blur-md overflow-hidden shadow-xl md:hidden z-50"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 flex flex-col">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-700 hover:text-brand-600 font-medium py-2 px-3 rounded-xl hover:bg-brand-50 transition-all block text-right">
                من نحن
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-700 hover:text-brand-600 font-medium py-2 px-3 rounded-xl hover:bg-brand-50 transition-all block text-right">
                خدماتنا
              </a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-gray-700 hover:text-brand-600 font-medium py-2 px-3 rounded-xl hover:bg-brand-50 transition-all block text-right">
                آلية العمل
              </a>
              <a href="#vision" onClick={(e) => handleNavClick(e, 'vision')} className="text-gray-700 hover:text-brand-600 font-medium py-2 px-3 rounded-xl hover:bg-brand-50 transition-all block text-right">
                رؤيتنا
              </a>
              
              <div className="pt-2 border-t border-gray-100 mt-2">
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block text-center bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md shadow-brand-600/10">
                  تواصل معنا
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}