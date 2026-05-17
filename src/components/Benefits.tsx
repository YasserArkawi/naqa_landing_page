import { motion } from 'motion/react';
import { Cpu, Leaf, Smartphone, GraduationCap } from 'lucide-react';

export default function Benefits() {
  const features = [
    {
      title: "الأتمتة والذكاء الرقمي",
      desc: "نعتمد تقنيات متطورة وأتمتة شاملة في عملية الجمع والوزن وتحويل النقاط لضمان دقة وشفافية عالية.",
      icon: Cpu,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "الكفاءة والاستدامة المحلية",
      desc: "بناء سلسلة توريد مغلقة تدعم الصناعة السورية المحلية وتوفر حلقة مستدامة للاقتصاد الوطني.",
      icon: Leaf,
      color: "text-emerald-600",
      bg: "bg-emerald-100"
    },
    {
      title: "تجربة مستخدم وتصميم عصري",
      desc: "منصة وتطبيق مصممان بعناية لتوفير رحلة مستخدم سلسة وممتعة تشجع على الاستمرار والمشاركة.",
      icon: Smartphone,
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      title: "تعزيز الوعي البيئي بابتكار",
      desc: "لا نكتفي بجمع البلاستيك، بل نثقف المجتمع ونحول الفرز إلى عادة يومية مجزية وممتعة.",
      icon: GraduationCap,
      color: "text-brand-600",
      bg: "bg-brand-100"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">ما الذي يجعل «نقاء» مميزة؟</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">نحن أكثر من مجرد منصة إعادة تدوير؛ نحن حركة تقنية بيئية مصممة للواقع والمستقبل السوري.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${f.bg} ${f.color}`}>
                <f.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
