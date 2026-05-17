import { Leaf, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <Leaf size={20} />
              </div>
              <span className="font-bold text-2xl tracking-tight">نقاء</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              شركتك الرائدة لجمع النفايات وإعادة تدويرها. نعمل من أجل بيئة نظيفة ومستدامة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-brand-500 transition-colors">من نحن</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">خدماتنا</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-500 transition-colors">آلية العمل</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">الخدمات</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-500 transition-colors">جمع النفايات للشركات</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">حاويات المنازل</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">إعادة التدوير الذكية</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">استشارات بيئية</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-gray-500">العنوان:</span>
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-500">الهاتف:</span>
                <span dir="ltr">+966 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-500">البريد:</span>
                <span>info@naqa.eco</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} نقاء للاستدامة البيئية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
