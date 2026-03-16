import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CookieConsent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-12">{t.cookieConsent.title}</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Main Content */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <p className="text-charcoal/80 leading-relaxed mb-6">{t.cookieConsent.text1}</p>
            <p className="text-charcoal/80 leading-relaxed mb-6">{t.cookieConsent.text2}</p>
            <p className="text-charcoal/80 leading-relaxed mb-6">{t.cookieConsent.text3}</p>
            <p className="text-charcoal/80 leading-relaxed">{t.cookieConsent.text4}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
