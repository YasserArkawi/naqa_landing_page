import { motion } from 'motion/react';
import { PhoneCall, Truck, RefreshCw, Gift } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: PhoneCall,
      title: "1. تواصل معنا",
      desc: "حدد احتياجاتك وسجل طلبك عبر الموقع أو الهاتف."
    },
    {
      icon: Truck,
      title: "2. الجمع والنقل",
      desc: "يصلك فريقنا المتخصص لاستلام النفايات في الوقت المحدد."
    },
    {
      icon: RefreshCw,
      title: "3. الفرز والتدوير",
      desc: "تتم معالجة المواد في مرافقنا الصديقة للبيئة."
    },
    {
      icon: Gift,
      title: "4. اكسب النقاط",
      desc: "احصل على نقاط ومكافآت في محفظتك لاستبدالها بخدمات وعروض."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-900 text-white relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">آلية العمل بسهولة وشفافية</h2>
          <p className="mt-4 text-gray-400 text-lg">خطوات بسيطة تبدأ من عندك وتنتهي بمستقبل مستدام ومكافآت قيمة.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gray-700 border-t border-dashed border-gray-600"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-gray-800 border-4 border-gray-900 rounded-full flex items-center justify-center text-brand-500 mb-6 relative z-10 shadow-xl">
                <step.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
