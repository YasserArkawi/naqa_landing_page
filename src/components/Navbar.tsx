import { motion } from 'motion/react';
import { Menu, Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Leaf size={24} />
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">نقاء</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">من نحن</a>
            <a href="#services" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">خدماتنا</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">آلية العمل</a>
            <a href="#vision" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">رؤيتنا</a>
          </div>

          <div className="hidden md:flex">
            <a href="#contact" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30">
              تواصل معنا
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-brand-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
