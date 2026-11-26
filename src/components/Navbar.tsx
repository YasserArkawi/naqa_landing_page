import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/naqa-logo.webp';

const links = [
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#how-it-works', label: 'آلية العمل' },
  { href: '#vision', label: 'رؤيتنا' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="التنقل الرئيسي">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-[72px]">
          <a href="#top" className="shrink-0" aria-label="نقاء — أعلى الصفحة" onClick={() => setIsOpen(false)}>
            <img src={logo} className="brand-logo" alt="نقاء — لغد أنقى" width="124" height="48" />
          </a>

          <div className="hidden md:flex items-center gap-5 lg:gap-9">
            {links.map(({ href, label }) => <a className="nav-link" key={href} href={href}>{label}</a>)}
          </div>
          <a href="#contact" className="button button-primary hidden md:inline-flex">تواصل معنا</a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="nav-toggle md:hidden"
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!isOpen} className="mobile-nav md:hidden">
        {links.map(({ href, label }) => (
          <a className="nav-link" href={href} key={href} onClick={() => setIsOpen(false)}>{label}</a>
        ))}
        <a href="#contact" className="button button-primary mt-2" onClick={() => setIsOpen(false)}>تواصل معنا</a>
      </div>
    </nav>
  );
}
