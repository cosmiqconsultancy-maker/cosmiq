import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { areCookiesAccepted } from '../components/CookieConsentPopup';

export const AnalyticsDebug: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show debug panel only in development or when cookies are accepted
    const isDev = process.env.NODE_ENV === 'development';
    const cookiesAccepted = areCookiesAccepted();
    
    if (isDev || cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-charcoal text-softwhite p-4 rounded-lg shadow-xl z-50 max-w-sm">
      <h4 className="font-display font-medium mb-3 text-bronze">Analytics Debug</h4>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Cookies Accepted:</span>
          <span className={areCookiesAccepted() ? 'text-green-400' : 'text-red-400'}>
            {areCookiesAccepted() ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>GA Available:</span>
          <span className={window.gtag ? 'text-green-400' : 'text-red-400'}>
            {window.gtag ? 'YES' : 'NO'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>GA ID:</span>
          <span className="text-bronze">G-4SM1EJL413</span>
        </div>
        
        {window.gtag && (
          <div className="mt-3 pt-3 border-t border-charcoal/20">
            <p className="text-green-400">✅ Google Analytics is LOADING</p>
            <p className="text-xs text-charcoal/60 mt-1">
              Check your GA dashboard at analytics.google.com
            </p>
          </div>
        )}
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="mt-3 text-xs text-charcoal/40 hover:text-charcoal/60"
      >
        Close
      </button>
    </div>
  );
};
