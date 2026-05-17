import { motion } from 'motion/react';
import { Target, ShieldCheck, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">من نحن</h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600">
            «نقاء» ليست مجرد شركة جمع نفايات، بل هي شريكك الأساسي في تحقيق الاستدامة. نسعى لبناء مجتمع يعي قيمة الموارد ويحافظ عليها للأجيال القادمة.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "رسالتنا البيئية",
              description: "تقليل البصمة الكربونية وتقليص حجم النفايات في المكبات من خلال حلول فرز وإعادة تدوير مبتكرة."
            },
            {
              icon: ShieldCheck,
              title: "موثوقية واحترافية",
              description: "نلتزم بأعلى المعايير العالمية في إدارة النفايات لضمان التخلص الآمن والسليم بيئياً."
            },
            {
              icon: Globe,
              title: "أثر مستدام",
              description: "خلق دائرة اقتصادية مغلقة تحول كل مخلف إلى مورد جديد يخدم الاقتصاد والمجتمع."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-50 rounded-2xl p-8 border border-brand-100 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
