import { motion } from 'motion/react';

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      {/* Background image map */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
          alt="طاقة متجددة وطبيعة" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/80 mix-blend-multiply"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold mb-6">
            رؤيتنا 2030
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            نطمح للوصول إلى عالم "صفر نفايات" (Zero Waste) 
          </h2>
          <p className="text-lg md:text-xl text-brand-50 leading-relaxed font-medium">
            تتمحور رؤيتنا في «نقاء» حول تحويل التحديات البيئية إلى فرص اقتصادية واجتماعية. نؤمن أن كل شيء يمكن إعادة توظيفه بشكل يحترم الأرض ومن عليها، لبناء مستقبل آمن، نقي، ومزدهر.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
