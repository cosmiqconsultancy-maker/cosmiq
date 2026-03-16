import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { resetCookieConsent } from '../components/CookieConsentPopup';

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
            <p className="text-charcoal/80 leading-relaxed mb-6">{t.cookieConsent.text4}</p>
            
            <div className="mt-8 pt-6 border-t border-charcoal/10">
              <button
                onClick={() => {
                  resetCookieConsent();
                  window.location.reload();
                }}
                className="bg-bronze text-softwhite px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-charcoal transition-all"
              >
                Reset Cookie Preferences
              </button>
              <p className="text-xs text-charcoal/60 mt-3">
                Click this button to reset your cookie consent and see the popup again.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
