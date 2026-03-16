import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Settings } from 'lucide-react';
import { initializeTracking } from '../lib/analytics';

export const CookieConsentPopup: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show popup only if no choice has been made
      setIsVisible(true);
    } else if (consent === 'accepted') {
      // Initialize tracking for returning users who accepted
      initializeTracking();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    initializeTracking(); // Load tracking scripts after consent
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleClose = () => {
    // Temporary dismiss - will show again on next visit
    localStorage.setItem('cookieConsent', 'dismissed');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    
    // Load tracking based on custom preferences
    initializeTracking(preferences);
    
    setIsVisible(false);
    setShowDetails(false);
  };

  const togglePreference = (type: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-charcoal/10">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn-icons-png.flaticon.com/128/1047/1047711.png" 
                alt="Cookie" 
                className="w-8 h-8"
              />
              <h3 className="text-xl font-display font-medium text-charcoal">
                {showDetails ? 'Cookie Preferences' : t.cookieConsent.title}
              </h3>
            </div>
            <button
              onClick={() => {
                if (showDetails) {
                  setShowDetails(false);
                } else {
                  handleClose();
                }
              }}
              className="text-charcoal/40 hover:text-charcoal transition-colors"
              aria-label="Close cookie consent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {!showDetails ? (
            <>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {t.cookieConsent.text1}
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {t.cookieConsent.text2}
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {t.cookieConsent.text3}
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {t.cookieConsent.text4}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-charcoal text-softwhite px-4 py-3 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-bronze transition-all"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex-1 bg-softwhite text-charcoal px-4 py-3 rounded-sm text-xs font-bold tracking-widest uppercase border border-charcoal/20 hover:bg-charcoal/5 transition-all"
                  >
                    Reject All
                  </button>
                </div>
                <button
                  onClick={handleCustomize}
                  className="w-full text-center text-xs text-bronze hover:text-charcoal transition-colors underline underline-offset-2 flex items-center justify-center gap-2"
                >
                  <Settings className="w-3 h-3" />
                  Customize Preferences
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {/* Essential Cookies */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-charcoal">Essential Cookies</h4>
                    <p className="text-xs text-charcoal/60 mt-1">
                      Required for the website to function properly (language, session, security)
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.essential}
                      disabled
                      className="w-4 h-4 text-bronze bg-gray-200 border-gray-300 rounded cursor-not-allowed"
                    />
                    <span className="ml-2 text-xs text-gray-500">Always Active</span>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-charcoal">Analytics Cookies</h4>
                    <p className="text-xs text-charcoal/60 mt-1">
                      Help us understand how visitors interact with our website (Google Analytics)
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-bronze/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bronze"></div>
                  </label>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-charcoal">Marketing Cookies</h4>
                    <p className="text-xs text-charcoal/60 mt-1">
                      Used to track advertising effectiveness and provide personalized ads (Facebook Pixel)
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-bronze/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bronze"></div>
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-charcoal text-softwhite px-4 py-3 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-bronze transition-all"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 bg-softwhite text-charcoal px-4 py-3 rounded-sm text-xs font-bold tracking-widest uppercase border border-charcoal/20 hover:bg-charcoal/5 transition-all"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to check if cookies are accepted
export const areCookiesAccepted = (): boolean => {
  const consent = localStorage.getItem('cookieConsent');
  return consent === 'accepted';
};

// Helper function to reset cookie consent (for testing)
export const resetCookieConsent = (): void => {
  localStorage.removeItem('cookieConsent');
  localStorage.removeItem('cookieConsentDate');
};
