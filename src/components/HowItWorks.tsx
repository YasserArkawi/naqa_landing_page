import { motion } from 'motion/react';
import { Download, Trash2, Gift, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "1. اشترك وافرز",
      desc: "حمّل تطبيق نقاء. ابدأ الفرز بمساعدة مندوبنا الآلي (نظف العبوات وافصل الأغطية)."
    },
    {
      icon: Trash2,
      title: "2. سلّم الشحنة",
      desc: "سلّم الكمية لشاحنتنا أو أقرب نقطة تجميع ليتم وزنها وتقييمها مباشرة."
    },
    {
      icon: TrendingUp,
      title: "3. اربح النقاط",
      desc: "يتم تحويل النقاط فوراً لمحفظتك بناءً على وزن ونوع وحالة البلاستيك المفروز."
    },
    {
      icon: Gift,
      title: "4. استبدل مكافآتك",
      desc: "استبدل نقاطك برصيد موبايل، قسائم غذائية، ومنظفات من أسواقنا الشريكة."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-900 text-white relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-bold tracking-wider text-sm uppercase">للأفراد والعائلات</span>
          <h2 className="text-3xl font-bold sm:text-4xl mt-2">كيف تشترك في "نقاء" وتبدأ بالربح؟</h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">اربح العملة الرقمية لحماية بيئتك. خطوات بسيطة تحوّل نفاياتك إلى قيمة حقيقية.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative mb-20">
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gray-700 border-t border-dashed border-gray-600"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-gray-800 border-4 border-gray-900 rounded-2xl rotate-3 hover:rotate-6 transition-transform flex items-center justify-center text-brand-500 mb-6 relative z-10 shadow-xl">
                <step.icon size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* كيف أحقق نقاط أكثر */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-3xl p-8 border border-gray-700 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6">كيف تحقّق نقاطاً أكثر؟ 🌟</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-right">
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
              <strong className="block text-brand-400 mb-2 border-b border-gray-800 pb-2">تفوق في الفرز</strong>
              <span className="text-sm text-gray-400">افصل الأغطية (رقم 5) عن العبوات (رقم 1)، وافصل الألوان لتنال أعلى التقييمات.</span>
            </div>
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
              <strong className="block text-brand-400 mb-2 border-b border-gray-800 pb-2">التزم بدقة الطلب</strong>
              <span className="text-sm text-gray-400">طابق بين ما تثبته عند حجز الطلب إلكترونياً وبين ما يتم تسليمه لمندوبنا.</span>
            </div>
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
              <strong className="block text-brand-400 mb-2 border-b border-gray-800 pb-2">ضاعف الكميات</strong>
              <span className="text-sm text-gray-400">اجمع أكبر قدر ممكن من البلاستيك الصلب قبل حجز موعد الاستلام.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
