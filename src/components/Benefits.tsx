import { motion } from 'motion/react';
import { Cpu, Leaf, Smartphone, GraduationCap } from 'lucide-react';

export default function Benefits() {
  const features = [
    {
      title: "الأتمتة والذكاء الرقمي",
      desc: "نعتمد تقنيات متطورة وأتمتة شاملة في عملية الجمع والوزن وتحويل النقاط لضمان دقة وشفافية عالية.",
      icon: Cpu,
    },
    {
      title: "الكفاءة والاستدامة المحلية",
      desc: "بناء سلسلة توريد مغلقة تدعم الصناعة السورية المحلية وتوفر حلقة مستدامة للاقتصاد الوطني.",
      icon: Leaf,
    },
    {
      title: "تجربة مستخدم وتصميم عصري",
      desc: "منصة وتطبيق مصممان بعناية لتوفير رحلة مستخدم سلسة وممتعة تشجع على الاستمرار والمشاركة.",
      icon: Smartphone,
    },
    {
      title: "تعزيز الوعي البيئي بابتكار",
      desc: "لا نكتفي بجمع البلاستيك، بل نثقف المجتمع ونحول الفرز إلى عادة يومية مجزية وممتعة.",
      icon: GraduationCap,
    }
  ];

  return (
    <section className="section-spacing bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading">
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
              className="surface-card p-6 text-start"
            >
              <div className="icon-tile mb-5">
                <f.icon size={25} aria-hidden="true" />
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
