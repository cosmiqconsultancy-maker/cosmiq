import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Impressum: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-12">{t.impressum.title}</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Company Information */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.impressum.section1.title}</h2>
            <div className="bg-white/50 p-6 rounded-xl border border-charcoal/5">
              <p className="font-medium mb-2">{t.impressum.section1.company}</p>
              <p className="mb-1">{t.impressum.section1.address}</p>
              <p className="mb-1">{t.impressum.section1.city}</p>
              <p className="mb-1">{t.impressum.section1.country}</p>
            </div>
          </section>

          {/* Representative */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.impressum.representative.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.impressum.representative.name}</p>
          </section>

          {/* Contact */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.impressum.contact.title}</h2>
            <div className="bg-white/50 p-6 rounded-xl border border-charcoal/5">
              <p className="mb-2">{t.impressum.contact.phone}</p>
              <p>{t.impressum.contact.email}</p>
            </div>
          </section>

          {/* Responsible for Content */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.impressum.responsible.title}</h2>
            <div className="bg-white/50 p-6 rounded-xl border border-charcoal/5">
              <p className="font-medium mb-2">{t.impressum.responsible.name}</p>
              <p className="mb-1">{t.impressum.responsible.company}</p>
              <p className="mb-1">{t.impressum.responsible.address}</p>
              <p className="mb-1">{t.impressum.responsible.city}</p>
              <p>{t.impressum.responsible.country}</p>
            </div>
          </section>

          {/* EU Dispute Resolution */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.impressum.dispute.title}</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">{t.impressum.dispute.text1}</p>
            <a 
              href={t.impressum.dispute.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze hover:underline mb-4 block"
            >
              {t.impressum.dispute.link}
            </a>
            <p className="text-charcoal/70 leading-relaxed">{t.impressum.dispute.text2}</p>
          </section>

          {/* Liability for Content */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.impressum.liability.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.impressum.liability.text}</p>
          </section>

          {/* Liability for Links */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.impressum.links.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.impressum.links.text}</p>
          </section>

          {/* Copyright */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.impressum.copyright.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.impressum.copyright.text}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
