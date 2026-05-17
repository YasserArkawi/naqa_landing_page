import { motion } from 'motion/react';
import { ArrowLeft, Recycle, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-50 pt-16 pb-32">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-semibold text-brand-600 shadow-sm w-fit border border-brand-100">
              <Recycle size={18} />
              <span>معاً نحو مستقبل مستدام</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              بيئة أنظف، <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">لمستقبل أكثر إشراقاً</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              نقاء تجمع النفايات وتحولها إلى موارد قيمة لبناء استدامة حقيقية. ساهم في تحسين البيئة واربح النقاط والمكافآت مع كل عملية إعادة تدوير.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a href="#contact" className="group flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40">
                <span>ابدأ رحلة الاستدامة</span>
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="px-8 py-3.5 rounded-full font-bold text-brand-700 bg-white hover:bg-brand-50 border border-brand-100 transition-all shadow-sm">
                اكتشف خدماتنا
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
                alt="الطبيعة البيئية الخضراء" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                <Leaf size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">+10K</p>
                <p className="text-sm font-medium text-gray-500">طن نفايات معاد تدويرها</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
