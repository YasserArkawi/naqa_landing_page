import { motion } from 'motion/react';
import { Truck, Recycle, Lightbulb, Factory } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "جمع ونقل النفايات",
      desc: "أسطول حديث مجهز لجمع ونقل المخلفات بطرق آمنة وسريعة تضمن عدم تفشي الروائح أو التلوث.",
      icon: Truck
    },
    {
      title: "إعادة التدوير",
      desc: "فرز وإعادة معالجة الورق، البلاستيك، والزجاج لدمجها كخامات أولية في صناعات جديدة.",
      icon: Recycle
    },
    {
      title: "الاستشارات البيئية",
      desc: "خبراؤنا يقدمون تحليلات وخطط متكاملة للمصانع والمنشآت لتحقيق كفاءة بيئية أعلى.",
      icon: Lightbulb
    },
    {
      title: "حلول استدامة شاملة",
      desc: "تصميم أنظمة داخلية لإدارة المخلفات في المجمعات السكنية والتجارية لضمان فرزها من المصدر.",
      icon: Factory
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-50 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">ما نقدمه</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-2 mb-4">خدمات متكاملة لبيئة أفضل</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 group hover:bg-gray-50 p-6 rounded-2xl transition-colors cursor-pointer"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                  <s.icon size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-700 transition-colors">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
