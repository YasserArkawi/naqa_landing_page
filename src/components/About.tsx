import { motion } from "motion/react";
import { AlertTriangle, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">إعادة التدوير</span> */}
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-2">
            لماذا وُجدت {""}
            <span className="text-brand-600 font-bold tracking-wider text-5xl uppercase">
              نقاء 
            </span>
            ؟
          </h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-3xl p-10 border border-red-100 h-full"
          >
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              المشكلة الحالية
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              المواطنون والمنشآت الصغيرة يلقون آلاف الأطنان من البلاستيك يومياً
              في الحاويات العادية دون فرز، مما يؤدي إلى تلوثها واختلاطها
              بالنفايات العضوية، وبالتالي{" "}
              <strong>فقدان قيمتها الاقتصادية تماماً</strong> وتدمير البيئة.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-50 rounded-3xl p-10 border border-brand-100 h-full"
          >
            <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              الحل مع «نقاء»
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              «نقاء» هي منصة تقنية تقود التغيير السلوكي في المجتمع السوري عبر ما
              نسميه <strong>"إعادة التدوير"</strong>. نحن نحفز الأفراد على
              الفرز المنزلي من خلال تحويل البلاستيك المستعمل من عبء إلى{" "}
              <strong>"نقاط"</strong> قابلة للاستبدال بمواد أساسية وعروض قيّمة.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
