import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Terms: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-12">{t.terms.title}</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <p className="text-charcoal/80 leading-relaxed whitespace-pre-line">{t.terms.intro}</p>
          </section>

          {/* Scope of Application */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.scope.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.scope.text}</p>
          </section>

          {/* Services */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.services.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.services.text}</p>
          </section>

          {/* Booking */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.booking.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.booking.text}</p>
          </section>

          {/* Payment */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.payment.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.payment.text}</p>
          </section>

          {/* Cancellation */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.cancellation.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.cancellation.text}</p>
          </section>

          {/* Liability */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.liability.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.liability.text}</p>
          </section>

          {/* Confidentiality */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.confidentiality.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.confidentiality.text}</p>
          </section>

          {/* Data Protection */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.dataProtection.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.dataProtection.text}</p>
          </section>

          {/* Applicable Law */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.applicableLaw.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.applicableLaw.text}</p>
          </section>

          {/* Jurisdiction */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.jurisdiction.title}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t.terms.jurisdiction.text}</p>
          </section>

          {/* Company Info */}
          <section className="bg-softwhite/5 p-8 rounded-2xl border border-charcoal/10">
            <h2 className="text-2xl font-display font-medium mb-6 text-bronze">{t.terms.companyInfo.title}</h2>
            <div className="bg-white/50 p-6 rounded-xl border border-charcoal/5">
              <p className="mb-1">{t.terms.companyInfo.address}</p>
              <p className="mb-1">{t.terms.companyInfo.city}</p>
              <p>{t.terms.companyInfo.country}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
