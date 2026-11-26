import { motion } from 'motion/react';
import { PackageSearch, ShieldCheck, Factory, Handshake } from 'lucide-react';

export default function Services() {
  const guarantees = [
    "الفرز الذكي من المصدر (Source Separation)",
    "الفحص الأولي والاعتماد عند الاستلام (Pre-Inspection)",
    "الحماية أثناء النقل والتخزين اللوجستي",
    "الفرز الثانوي المتقدم (Secondary Sorting)",
    "نظام تقييم ومكافأة الموردين لضمان الجودة المستمرة"
  ];

  return (
    <section id="services" className="section-spacing bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center section-heading">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">للمصانع وشركات إعادة التدوير</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-2 mb-4">توريد مواد خام نقية ومستدامة</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">نوفر البلاستيك النقي بشكل مطرد ومنظم عبر نظام ضبط جودة صارم لنكون الشريك الموثوق لخطوط إنتاجكم.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="icon-tile mt-1">
                <PackageSearch size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">أنواع البلاستيك المستهدفة</h3>
                <div className="text-gray-600 leading-relaxed">
                  نتعامل مع الراتنجات الستة الأساسية وأهمها:
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700">
                    <li>عبوات المياه والعصائر (PET - رقم 1)</li>
                    <li>عبوات الشامبو والمنظفات (HDPE - رقم 2)</li>
                    <li>أغلفة الشحن والنايلون الشفاف (LDPE - رقم 4)</li>
                    <li>أغطية العبوات وصناديق الخضروات (PP - رقم 5)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="icon-tile mt-1">
                <Handshake size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">التوريد والكميات</h3>
                <p className="text-gray-600 leading-relaxed">
                  نقوم بجدولة وتنسيق الكميات (الأسبوعية بالطن) بناءً على طاقتكم الاستيعابية وبحسب الشكل الفني المطلوب لخط الإنتاج (بالات مضغوطة أو قطع كاملة).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="icon-tile mt-1">
                <Factory size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">اتفاقيات طويلة الأمد</h3>
                <p className="text-gray-600 leading-relaxed">
                  على استعداد لعمل اتفاقيات توريد ثابتة تضمن لمركزكم تدفقاً مستقراً ومنتظماً من المواد النقية بأسعار عادلة وتنافسية، لدعم استمرارية تشغيل مصانعكم.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="surface-card p-6 sm:p-8"
          >

            
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
              <div className="icon-tile">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">كيف نضمن نقاء الخامات؟</h3>
            </div>

            <ul className="space-y-4">
              {guarantees.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-500 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <a href="#contact" className="button button-outline w-full">
                تواصل لتوقيع اتفاقية توريد
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
