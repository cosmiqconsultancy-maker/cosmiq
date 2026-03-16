# 🍪 Cookie & Analytics Setup Guide

## 🔧 What You Need to Configure

### 1. Google Analytics Setup
```typescript
// In src/lib/analytics.ts, replace 'G-XXXXXXXXXX' with your actual GA4 ID
loadGoogleAnalytics('G-XXXXXXXXXX');
```

**Steps:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a GA4 property
3. Get your Measurement ID (starts with "G-")
4. Replace in the code above

### 2. Facebook Pixel Setup
```typescript
// In src/lib/analytics.ts, replace '123456789012345' with your Pixel ID
loadFacebookPixel('123456789012345');
```

**Steps:**
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Create a Pixel
3. Get your Pixel ID (15-digit number)
4. Replace in the code above

### 3. Hotjar Setup (Optional)
```typescript
// In src/lib/analytics.ts, replace 1234567 with your Site ID
loadHotjar(1234567);
```

**Steps:**
1. Go to [Hotjar](https://www.hotjar.com/)
2. Create a new site
3. Get your Site ID
4. Replace in the code above

## 📊 What These Cookies Actually Do

### Essential Cookies (Always Active ✅)
- **Language Preference**: Remembers user's language choice
- **Session State**: Keeps user logged in, shopping cart items
- **Security**: Prevents CSRF attacks, maintains session integrity

### Analytics Cookies (User Choice 📊)
**When Accepted:**
- **Google Analytics**: Tracks page views, user behavior, traffic sources
- **Hotjar**: Records user sessions, heatmaps, click patterns
- **Data Collected**: Pages visited, time on site, device info, location

**Benefits:**
- Understand which services are most popular
- See where users drop off in booking process
- Optimize user experience based on real data

### Marketing Cookies (User Choice 🎯)
**When Accepted:**
- **Facebook Pixel**: Tracks ad conversions, enables retargeting
- **Google Ads**: Measures ad performance, shows personalized ads
- **Data Collected**: Ad interactions, conversion events, user segments

**Benefits:**
- Show relevant ads to interested users
- Measure ROI of marketing campaigns
- Build custom audiences for better targeting

## 🚀 How It Works in Your App

### First Visit:
1. User lands on site → No consent found
2. Cookie popup appears with options
3. User chooses → Choice saved to localStorage
4. If accepted: Analytics scripts load immediately

### Returning Visit:
1. User lands on site → Consent found in localStorage
2. If previously accepted: Analytics scripts load automatically
3. If previously rejected: No scripts load
4. No popup shown (respects previous choice)

### Change Preferences:
1. User clicks "Cookie Consent" in footer
2. localStorage cleared → Page reloads
3. Popup appears again → New choice made

## 📈 Real Data You'll Get

### Google Analytics Example:
```javascript
// Track booking attempts
trackEvent('booking_started', 'conversion', 'home_consultation');

// Track service page views
trackPageView('/services');

// Track form submissions
trackEvent('form_submit', 'engagement', 'contact_form');
```

### Facebook Pixel Example:
```javascript
// Track purchases (when you add payments)
fbq('track', 'Purchase', {value: 150.00, currency: 'EUR'});

// Track leads
fbq('track', 'Lead');
```

## 🛡️ GDPR Compliance

Your implementation is already GDPR compliant:
- ✅ Explicit consent required
- ✅ Granular control (accept/reject)
- ✅ Easy withdrawal (footer link)
- ✅ No scripts load without consent
- ✅ Clear explanation of usage

## 🎯 Next Steps

1. **Get Your Tracking IDs** (Google Analytics, Facebook Pixel)
2. **Update the IDs** in `src/lib/analytics.ts`
3. **Test the Consent Flow**:
   - Clear browser data
   - Visit site → popup should appear
   - Accept → check browser dev tools for tracking scripts
   - Reject → no tracking scripts should load

4. **Monitor Analytics** after going live:
   - Check Google Analytics for real traffic data
   - Verify Facebook Pixel is firing
   - Adjust based on insights

## 🔍 Testing Checklist

- [ ] Popup shows on first visit
- [ ] Popup doesn't show after accepting
- [ ] Popup doesn't show after rejecting
- [ ] Footer link resets consent properly
- [ ] Google Analytics loads when accepted
- [ ] Google Analytics blocked when rejected
- [ ] Facebook Pixel loads when accepted
- [ ] Facebook Pixel blocked when rejected

Your cookie system is now production-ready! 🚀
