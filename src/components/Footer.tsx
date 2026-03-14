import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <img 
              src="https://www.cosmiqconsulting.com/user/themes/quark/images/logo/white%20logo.PNG" 
              alt="Cosmiq Logo" 
              className="h-12"
              referrerPolicy="no-referrer"
            />
            <p className="text-softwhite/60 text-sm max-w-xs leading-relaxed">
              {t.hero.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-bronze">{t.nav.home}</h4>
              <ul className="space-y-2 text-sm text-softwhite/60">
                <li><Link to="/" className="hover:text-softwhite transition-colors">{t.nav.home}</Link></li>
                <li><Link to="/services" className="hover:text-softwhite transition-colors">{t.nav.services}</Link></li>
                <li><Link to="/booking" className="hover:text-softwhite transition-colors">{t.nav.booking}</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-bronze">{t.footer.contact}</h4>
              <ul className="space-y-2 text-sm text-softwhite/60">
                <li>{t.footer.address}</li>
                <li>{t.footer.email}</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end space-y-6">
            <Link
              to="/booking"
              className="bg-bronze text-softwhite px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-softwhite hover:text-charcoal transition-all rounded-sm"
            >
              {t.nav.bookNow}
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-softwhite/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-softwhite/40">
          <p>© {new Date().getFullYear()} Cosmiq Consulting. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-softwhite transition-colors">Impressum</a>
            <a href="#" className="hover:text-softwhite transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
