import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative shadow-2xl shadow-brand-600/20"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-black opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لإحداث فرق بيئي؟</h2>
            <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
              انضم إلى مئات الشركات والأفراد الذين اختاروا «نقاء» كشريك أساسي في الحفاظ على البيئة. تواصل معنا اليوم لنبدأ.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-brand-700 hover:text-brand-900 hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold transition-all shadow-md flex items-center justify-center gap-2 group">
                <span>اطلب الخدمة الآن</span>
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-all">
                استشر خبيراً
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
