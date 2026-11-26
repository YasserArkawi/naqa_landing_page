import ContactInformation from './ContactInformation';
import logo from '../assets/naqa-logo.webp';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-grid">
          <div>
            <a href="#top" className="footer-logo" aria-label="نقاء — أعلى الصفحة">
              <img src={logo} alt="نقاء — لغد أنقى" width="124" height="48" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-brand-100">
              شركتك الرائدة لجمع النفايات وإعادة تدويرها. نعمل من أجل بيئة نظيفة ومستدامة.
            </p>
            <p className="mt-3 text-sm text-brand-100">سوريا، اللاذقية</p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">روابط سريعة</h2>
            <ul className="footer-nav">
              <li><a href="#about">من نحن</a></li>
              <li><a href="#services">خدماتنا</a></li>
              <li><a href="#how-it-works">آلية العمل</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">الخدمات</h2>
            <ul className="footer-nav">
              <li><a href="#services">جمع النفايات للشركات</a></li>
              <li><a href="#how-it-works">حاويات المنازل</a></li>
              <li><a href="#about">إعادة التدوير الذكية</a></li>
              <li><a href="#contact">استشارات بيئية</a></li>
            </ul>
          </div>

          <div className="footer-contacts">
            <ContactInformation />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} نقاء للاستدامة البيئية. جميع الحقوق محفوظة.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#">شروط الاستخدام</a>
            <a href="#">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
