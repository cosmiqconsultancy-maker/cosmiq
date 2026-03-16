import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Privacy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-12">{t.privacy.title}</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.intro}</p>
            <p className="text-charcoal/70 leading-relaxed">{t.privacy.dataUse}</p>
          </section>

          {/* Controller */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.controller.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.controller.text}</p>
            <div className="bg-white/50 p-6 rounded-xl border border-charcoal/5">
              <p className="font-medium mb-2">{t.privacy.controller.company}</p>
              <p className="mb-1">{t.privacy.controller.address}</p>
              <p className="mb-1">{t.privacy.controller.city}, {t.privacy.controller.country}</p>
              <p className="mb-1">{t.privacy.controller.phone}</p>
              <p className="mb-4">{t.privacy.controller.email}</p>
              <p className="text-sm text-charcoal/60 italic">{t.privacy.controller.note}</p>
            </div>
          </section>

          {/* Hosting */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.hosting.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.hosting.provider}</p>
            <div className="bg-white/50 p-6 rounded-xl border border-charcoal/5 mb-4">
              <p className="font-medium mb-2">{t.privacy.hosting.company}</p>
              <p className="mb-1">{t.privacy.hosting.address}</p>
              <p className="mb-1">{t.privacy.hosting.city}, {t.privacy.hosting.country}</p>
            </div>
            <p className="text-charcoal/70 leading-relaxed mb-4">{t.privacy.hosting.data}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.hosting.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.hosting.purpose}</p>
            <p className="text-sm text-charcoal/60 italic">{t.privacy.hosting.legal}</p>
          </section>

          {/* Server Logs */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.serverLogs.title}</h2>
            <h3 className="text-xl font-medium mb-4 text-charcoal">{t.privacy.serverLogs.subtitle}</h3>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.serverLogs.text}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.serverLogs.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal/60 italic">{t.privacy.serverLogs.note}</p>
          </section>

          {/* Contact */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.contact.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.contact.text}</p>
            <p className="text-charcoal/70 leading-relaxed mb-4">{t.privacy.contact.data}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.contact.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.contact.legal}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.contact.legalItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal/60 italic">{t.privacy.contact.retention}</p>
          </section>

          {/* Calendly */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.calendly.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.calendly.provider}</p>
            <div className="bg-white/50 p-6 rounded-xl border border-charcoal/5 mb-4">
              <p className="font-medium">{t.privacy.calendly.company}</p>
            </div>
            <p className="text-charcoal/70 leading-relaxed mb-4">{t.privacy.calendly.data}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.calendly.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.calendly.purpose}</p>
            <p className="text-sm text-charcoal/60 italic mb-2">{t.privacy.calendly.legal}</p>
            <p className="text-sm text-charcoal/70">{t.privacy.calendly.link}</p>
          </section>

          {/* Cookies */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.cookies.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.cookies.text}</p>
            <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.cookies.types}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.cookies.typeItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.cookies.purposes}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.cookies.purposeItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.cookies.legal}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.cookies.legalItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal/60 italic">{t.privacy.cookies.browser}</p>
          </section>

          {/* Analytics */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.analytics.title}</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-charcoal">{t.privacy.analytics.googleAnalytics.title}</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.analytics.googleAnalytics.text}</p>
              <p className="text-charcoal/70 leading-relaxed mb-4">{t.privacy.analytics.googleAnalytics.data}</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
                {t.privacy.analytics.googleAnalytics.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-bronze mr-2">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.analytics.googleAnalytics.transfer}</p>
              <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.analytics.googleAnalytics.legal}</p>
              <p className="text-sm text-charcoal/60 italic">{t.privacy.analytics.googleAnalytics.withdraw}</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-charcoal">{t.privacy.analytics.googleAds.title}</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.analytics.googleAds.text}</p>
              <p className="text-charcoal/70 leading-relaxed mb-4">{t.privacy.analytics.googleAds.data}</p>
              <p className="text-sm text-charcoal/60 italic">{t.privacy.analytics.googleAds.legal}</p>
            </div>
          </section>

          {/* Social Media */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.socialMedia.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.socialMedia.text}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.socialMedia.platforms.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.socialMedia.note}</p>
            <p className="text-sm text-charcoal/60 italic">{t.privacy.socialMedia.disclaimer}</p>
          </section>

          {/* Rights */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.rights.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.rights.text}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-charcoal/70">
              {t.privacy.rights.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-bronze mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-2">{t.privacy.rights.contact}</p>
            <p className="text-sm text-charcoal/60 italic">{t.privacy.rights.email}</p>
          </section>

          {/* SSL */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.privacy.ssl.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.privacy.ssl.text}</p>
            <p className="text-sm text-charcoal/60 italic">{t.privacy.ssl.recognition}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
