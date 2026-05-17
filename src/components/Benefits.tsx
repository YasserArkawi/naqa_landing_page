import { motion } from 'motion/react';
import { Building2, Gift, BarChart3, Sprout } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: "أثر إيجابي على المجتمع",
      desc: "مساهمتك المباشرة في الحد من التلوث وتحسين المظهر العام لمدينتنا من خلال إعادة التدوير.",
      icon: Sprout,
      color: "text-emerald-600",
      bg: "bg-emerald-100"
    },
    {
      title: "برنامج مكافآت نقاط نقاء",
      desc: "اجمع النقاط مع كل عملية فرز لتستبدلها لاحقاً بخدمات وعروض مميزة عبر المنصة.",
      icon: Gift,
      color: "text-cyan-600",
      bg: "bg-cyan-100"
    },
    {
      title: "عائد مزدوج للشركات",
      desc: "نساعد الشركات في تحقيق الامتثال البيئي، وتقليل التكاليف والاستفادة من برنامج النقاط.",
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "تقارير الالتزام البيئي",
      desc: "نزودك بتقارير دورية توضح حجم النفايات المعاد تدويرها ومساهمتك في حماية البيئة.",
      icon: BarChart3,
      color: "text-brand-600",
      bg: "bg-brand-100"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">كيف تستفيد من خدماتنا؟</h2>
            <p className="text-lg text-gray-600">شراكتك معنا تعود بالنفع عليك وعلى مجتمعك. أحمِ بيئتك واكسب المكافآت مع كل خطوة.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${b.bg} ${b.color}`}>
                <b.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
