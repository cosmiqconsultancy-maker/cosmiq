// Analytics and Cookie Management
// This file handles real third-party integrations

export interface CookieSettings {
  essential: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
}

export const getCookieSettings = (): CookieSettings => {
  const consent = localStorage.getItem('cookieConsent');
  
  switch (consent) {
    case 'accepted':
      return { essential: true, analytics: true, marketing: true };
    case 'rejected':
      return { essential: true, analytics: false, marketing: false };
    default:
      return { essential: true, analytics: false, marketing: false };
  }
};

// Google Analytics Integration
export const loadGoogleAnalytics = (trackingId?: string) => {
  const settings = getCookieSettings();
  
  if (!settings.analytics) {
    console.log('Analytics cookies rejected - Google Analytics not loaded');
    return;
  }

  // Use provided ID or fall back to client config
  const actualTrackingId = trackingId || 'G-4SM1EJL413'; // Client's real GA ID
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${actualTrackingId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', actualTrackingId);

  console.log(`Google Analytics loaded with ID: ${actualTrackingId}`);
};

// Facebook Pixel Integration
export const loadFacebookPixel = (pixelId: string) => {
  const settings = getCookieSettings();
  
  if (!settings.marketing) {
    console.log('Marketing cookies rejected - Facebook Pixel not loaded');
    return;
  }

  // Load Facebook Pixel script
  const script = document.createElement('script');
  script.async = true;
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  console.log('Facebook Pixel loaded with consent');
};

// Hotjar Integration
export const loadHotjar = (siteId: number) => {
  const settings = getCookieSettings();
  
  if (!settings.analytics) {
    console.log('Analytics cookies rejected - Hotjar not loaded');
    return;
  }

  // Load Hotjar script
  const script = document.createElement('script');
  script.async = true;
  script.innerHTML = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${siteId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(script);

  console.log('Hotjar loaded with consent');
};

// Initialize all tracking based on consent
export const initializeTracking = (customPreferences?: CookieSettings) => {
  const settings = customPreferences || getCookieSettings();
  
  if (settings.analytics) {
    // Initialize analytics tools
    // Add your Google Analytics ID here
    loadGoogleAnalytics('G-4SM1EJL413'); // Client's real GA ID
    
    // Add your Hotjar Site ID here
    loadHotjar(1234567);
    console.log('✅ Analytics tracking ENABLED');
  } else {
    console.log('❌ Analytics tracking DISABLED');
  }
  
  if (settings.marketing) {
    // Initialize marketing tools
    // Add your Facebook Pixel ID here
    loadFacebookPixel('123456789012345'); // TODO: Replace with real ID
    console.log('✅ Marketing tracking ENABLED');
  } else {
    console.log('❌ Marketing tracking DISABLED');
  }
};

// Track page views
export const trackPageView = (path: string) => {
  const settings = getCookieSettings();
  
  if (settings.analytics && window.gtag) {
    window.gtag('config', 'G-4SM1EJL413', {
      page_path: path
    });
  }
  
  if (settings.marketing && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string) => {
  const settings = getCookieSettings();
  
  if (settings.analytics && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
};

// Type declarations for global objects
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}
