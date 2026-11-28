import { ArrowLeft, Box, Recycle, Sparkles } from 'lucide-react';
import heroImage from '../assets/recycling.webp';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-grid">
          <div className="flex flex-col items-start gap-5">
            <div className="hero-intro">
              <Sparkles size={18} aria-hidden="true" />
              <span>العمود الفقري الرقمي لإعادة التدوير في سوريا</span>
            </div>

            <h1 className="hero-title">
              نقاء، <br />
              <span>لسلسلة توريد ذكية في سوريا</span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 max-w-lg">
              شركة تقنية سورية تبني سلسلة توريد مغلقة لإعادة التدوير. نحفز الأفراد لـ "إعادة التدوير"، ونوفر للمصانع مواد صلبة نقية ومستدامة.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a href="#how-it-works" className="button button-primary">
                ابدأ رحلتك مع نقاء <ArrowLeft size={19} aria-hidden="true" />
              </a>
              <a href="#services" className="button button-outline">
                <Box size={19} aria-hidden="true" /> احجز شحنتك النقية
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img src={heroImage} alt="فرز البلاستيك وإعادة التدوير" width="1200" height="900" fetchPriority="high" />
            <div className="hero-points">
              <span className="icon-tile"><Recycle size={24} aria-hidden="true" /></span>
              <div>
                <p className="text-lg font-bold">نظام نقاط</p>
                <p className="text-sm text-gray-600">نقاط مقابل المواد القابلة لإعادة التدوير</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
