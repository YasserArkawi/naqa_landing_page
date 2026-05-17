import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useEffect, useRef } from 'react';

// تعريف Pageclip لـ TypeScript
declare global {
  interface Window {
    Pageclip?: any;
  }
}

export default function FinalCTA() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // نهيئ Pageclip عند توفره لتأمين تفاعل جيد مع React
    const initPageclip = () => {
      if (window.Pageclip && formRef.current) {
        try {
          window.Pageclip.form(formRef.current, {
            onSubmit: function (event: any) { return true; },
            onResponse: function (error: any, response: any) { return true; },
            successTemplate: '<div class="text-xl font-bold bg-white/20 p-6 rounded-xl text-white">شكراً لك! تم استلام رسالتك وسنتواصل معك قريباً.</div>'
          });
        } catch (e) {
          console.error("Pageclip initialization error", e);
        }
      } else {
        setTimeout(initPageclip, 500);
      }
    };
    initPageclip();
  }, []);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-600 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative shadow-2xl shadow-brand-600/20"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-black opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 w-full max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لإحداث فرق بيئي؟</h2>
            <p className="text-brand-100 text-lg mb-10">
              انضم إلى مئات الشركات والأفراد الذين اختاروا «نقاء». تواصل معنا لتبدأ.
            </p>
            
            {/* نموذج Pageclip */}
            <form 
              ref={formRef}
              action="https://send.pageclip.co/YOUR_SITE_KEY/contact" // ⚠️ قم باستبدال YOUR_SITE_KEY بالمفتاح الخاص بك
              className="flex flex-col gap-4 text-right" 
              method="post"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="الاسم" 
                  required 
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:bg-white/20 focus:border-white transition-all outline-none"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="البريد الإلكتروني" 
                  required 
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:bg-white/20 focus:border-white transition-all outline-none"
                />
              </div>
              <textarea 
                name="message" 
                placeholder="كيف يمكننا مساعدتك؟" 
                rows={3}
                required
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:bg-white/20 focus:border-white transition-all outline-none resize-none"
              ></textarea>
              
              {/* يجب أن يحمل زر الإرسال كلاس pageclip-form__submit ليضيف Pageclip أيقونة التحميل */}
              <button 
                type="submit" 
                className="pageclip-form__submit w-full mt-2 bg-white text-brand-700 hover:text-brand-900 hover:bg-brand-50 px-8 py-4 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 group relative h-[56px]"
              >
                <span>إرسال الطلب</span>
                <Send size={18} className="rtl:rotate-180" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
