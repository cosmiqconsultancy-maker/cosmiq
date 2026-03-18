import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Phone } from 'lucide-react';
import { resetCookieConsent } from './CookieConsentPopup';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-softwhite pt-24 pb-12 overflow-hidden relative">
      {/* Background Large Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-display font-black text-softwhite/[0.03] leading-none">
          COSMIQ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <img 
              src="/assets/logo.png" 
              alt="Cosmiq Logo" 
              className="h-16"
              referrerPolicy="no-referrer"
            />
            <p className="text-softwhite/60 text-sm max-w-xs leading-relaxed">
              {t.hero.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-bronze">{t.nav.home}</h4>
            <ul className="space-y-2 text-sm text-softwhite/60">
              <li><Link to="/" className="hover:text-softwhite transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/services" className="hover:text-softwhite transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/booking" className="hover:text-softwhite transition-colors">{t.nav.booking}</Link></li>
            </ul>
            
            {/* Legal Links - Under Home block */}
            <h4 className="text-xs font-bold tracking-widest uppercase text-bronze mt-6">Legal</h4>
            <ul className="space-y-2 text-sm text-softwhite/60">
              <li><Link to="/impressum" className="hover:text-softwhite transition-colors">{t.footer.impressum}</Link></li>
              <li><Link to="/privacy" className="hover:text-softwhite transition-colors">{t.footer.privacy}</Link></li>
              <li><Link to="/terms" className="hover:text-softwhite transition-colors">{t.footer.terms}</Link></li>
              <li><Link to="/cookies" className="hover:text-softwhite transition-colors">{t.footer.cookies}</Link></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-bronze">{t.footer.contact}</h4>
              <ul className="space-y-2 text-sm text-softwhite/60">
                <li className="break-words">{t.footer.address}</li>
                <li className="break-all">{t.footer.email}</li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">{t.footer.phone}</span>
                </li>
                <li>
                  <a 
                    href={t.footer.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-softwhite transition-colors"
                  >
                    <Instagram className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <Link
              to="/booking"
              className="inline-block bg-bronze text-softwhite px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-softwhite hover:text-charcoal transition-all rounded-sm"
            >
              {t.nav.bookNow}
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-softwhite/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-softwhite/40">
          <p> {new Date().getFullYear()} Cosmiq Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
