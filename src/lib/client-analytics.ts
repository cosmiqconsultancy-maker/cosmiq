// Client-specific Analytics Integration
// Use this when you get the actual tracking IDs from your client

export const CLIENT_CONFIG = {
  // TODO: Replace with actual client data
  domain: 'https://www.client-domain.com', // Client's main website
  googleAnalyticsId: 'G-XXXXXXXXXX', // Get from client
  facebookPixelId: '123456789012345', // Get from client (if they use FB ads)
  hotjarSiteId: 1234567, // Get from client (optional)
};

// Cross-domain tracking (if client has multiple sites)
export const setupCrossDomainTracking = () => {
  if (window.gtag && CLIENT_CONFIG.googleAnalyticsId !== 'G-XXXXXXXXXX') {
    window.gtag('config', CLIENT_CONFIG.googleAnalyticsId, {
      linker: {
        domains: ['client-domain.com', 'cosmiqconsulting.com'] // Add all client domains
      }
    });
  }
};

// Enhanced e-commerce tracking (for booking payments)
export const trackBookingEvent = (serviceName: string, price: number) => {
  if (window.gtag && CLIENT_CONFIG.googleAnalyticsId !== 'G-XXXXXXXXXX') {
    window.gtag('event', 'begin_checkout', {
      currency: 'EUR',
      value: price,
      items: [{
        item_name: serviceName,
        category: 'consulting_service',
        price: price,
        quantity: 1
      }]
    });
  }
};

// Track lead generation (contact forms, consultation requests)
export const trackLead = (type: string, value?: number) => {
  if (window.gtag && CLIENT_CONFIG.googleAnalyticsId !== 'G-XXXXXXXXXX') {
    window.gtag('event', 'generate_lead', {
      lead_type: type,
      value: value || 0
    });
  }
  
  // Facebook lead tracking
  if (window.fbq && CLIENT_CONFIG.facebookPixelId !== '123456789012345') {
    window.fbq('track', 'Lead', {
      content_name: type
    });
  }
};

// Track consultation bookings specifically
export const trackConsultationBooking = (serviceType: string, price: number) => {
  // Google Analytics
  if (window.gtag && CLIENT_CONFIG.googleAnalyticsId !== 'G-XXXXXXXXXX') {
    window.gtag('event', 'purchase', {
      transaction_id: `booking_${Date.now()}`,
      value: price,
      currency: 'EUR',
      items: [{
        item_name: serviceType,
        category: 'consultation',
        price: price,
        quantity: 1
      }]
    });
  }
  
  // Facebook conversion
  if (window.fbq && CLIENT_CONFIG.facebookPixelId !== '123456789012345') {
    window.fbq('track', 'Purchase', {
      value: price,
      currency: 'EUR',
      content_name: serviceType
    });
  }
};
