import { useEffect, useState } from 'react';
import { Facebook, Globe, Instagram, Mail, MessageCircle, Phone, Radio, Send } from 'lucide-react';

const icons = {
  phone: Phone,
  whatsapp: MessageCircle,
  email: Mail,
  whatsapp_channel: Radio,
  telegram_channel: Send,
  facebook: Facebook,
  instagram: Instagram,
  social: Globe,
};

type Contact = {
  type: keyof typeof icons;
  label: string;
  href: string;
  display: string | null;
};

type ContactGroups = { direct: Contact[]; follow: Contact[] };

function isContact(item: unknown, types: string[]): item is Contact {
  if (typeof item !== 'object' || item === null) return false;

  const { type, href, label, display } = item as Partial<Contact>;
  if (!type || !types.includes(type) || typeof label !== 'string' || !label.trim()
    || typeof href !== 'string' || (display !== null && typeof display !== 'string')) return false;

  if (type === 'phone') return /^tel:\+[1-9]\d{7,14}$/.test(href);
  if (type === 'email') return /^mailto:[^\s?#]+$/.test(href);
  return /^https?:\/\/[^\s]+$/i.test(href);
}

function readGroups(data: unknown): ContactGroups {
  if (typeof data !== 'object' || data === null) throw new Error('Invalid contact response');
  const { direct, follow } = data as Partial<ContactGroups>;
  if (!Array.isArray(direct) || !Array.isArray(follow)) throw new Error('Invalid contact groups');
  return {
    direct: direct.filter((item) => isContact(item, ['phone', 'whatsapp', 'email'])),
    follow: follow.filter((item) => isContact(item, ['whatsapp_channel', 'telegram_channel', 'facebook', 'instagram', 'social'])),
  };
}

export default function ContactInformation() {
  const [contacts, setContacts] = useState<ContactGroups | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const endpoint = import.meta.env.VITE_CONTACT_API_URL?.trim() || '/api/contact-information';
    let activeRequest: AbortController | undefined;

    async function load() {
      activeRequest?.abort();
      const request = new AbortController();
      activeRequest = request;
      const timeout = window.setTimeout(() => request.abort(), 5000);
      try {
        const response = await fetch(endpoint, {
          signal: request.signal,
          credentials: 'omit',
          cache: 'no-store',
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error('Contact request failed');
        const groups = readGroups(await response.json());
        if (activeRequest === request) {
          setContacts(groups);
          setUnavailable(false);
        }
      } catch {
        if (activeRequest === request) {
          setContacts(null);
          setUnavailable(true);
        }
      } finally {
        window.clearTimeout(timeout);
      }
    }

    void load();
    window.addEventListener('focus', load);
    return () => {
      window.removeEventListener('focus', load);
      const request = activeRequest;
      activeRequest = undefined;
      request?.abort();
    };
  }, []);

  if (!contacts?.direct.length && !contacts?.follow.length) {
    return (
      <p className="text-sm text-brand-100" role="status">
        {unavailable ? 'تعذّر تحميل معلومات التواصل حالياً.' : contacts ? 'لا توجد وسائل تواصل منشورة حالياً.' : 'جارٍ تحميل معلومات التواصل…'}
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <ContactGroup title="تواصل معنا" contacts={contacts.direct} />
      <ContactGroup title="تابع أخبارنا ورحلاتنا" contacts={contacts.follow} follow />
    </div>
  );
}

function ContactGroup({ title, contacts, follow = false }: { title: string; contacts: Contact[]; follow?: boolean }) {
  if (!contacts.length) return null;

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-white">{title}</h2>
      {follow && <p className="mb-3 text-sm text-brand-100">تابع قنواتنا وصفحاتنا لمعرفة مواعيد رحلات الجمع القادمة وآخر أخبار نقاء.</p>}
      <ul className="grid gap-2">
        {contacts.map(({ type, href, display, label }, index) => {
          const Icon = icons[type];
          const external = href.startsWith('http');
          return (
            <li key={index} className="min-w-0">
              <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="contact-link">
                <Icon size={19} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block">{label}</span>
                  {display && <bdi dir="ltr" className="block text-sm text-brand-100 wrap-anywhere">{display}</bdi>}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
