import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2 } from 'lucide-react';

export const Booking: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">
          {/* Left Side: Process */}
          <div className="flex flex-col justify-between space-y-12 bg-sand/5 p-10 md:p-16 rounded-3xl border border-charcoal/5">
            <div>
              <h1 className="text-5xl font-display font-medium mb-8">{t.booking.processTitle}</h1>
              <p className="text-charcoal/60 text-lg mb-12">{t.booking.goal}</p>
              
              <div className="space-y-10 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-2 w-px bg-bronze/20" />
                
                {t.booking.steps.map((step, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-beige border-2 border-bronze flex items-center justify-center z-10">
                      <span className="text-xs font-bold text-bronze">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-display font-medium mb-1">{step.title}</h3>
                    {step.desc && <p className="text-charcoal/60 text-xs leading-relaxed">{step.desc}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-charcoal/10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-bronze">Cosmiq Consulting Munich</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-softwhite p-10 md:p-16 rounded-3xl shadow-2xl border border-charcoal/5 flex flex-col justify-center">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <CheckCircle2 className="w-20 h-20 text-bronze" />
                <h2 className="text-3xl font-display font-medium">Thank You</h2>
                <p className="text-charcoal/60">Your request has been sent. I will get back to you shortly to schedule our assessment.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-bronze font-bold tracking-widest uppercase text-xs hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-display font-medium mb-10">{t.booking.title}</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">{t.booking.form.name}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-bronze outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">{t.booking.form.email}</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-bronze outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">{t.booking.form.phone}</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-bronze outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">{t.booking.form.dob}</label>
                      <input 
                        type="text" 
                        placeholder="DD.MM.YYYY"
                        className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-bronze outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">{t.booking.form.pob}</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-bronze outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-charcoal text-softwhite py-5 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-bronze transition-all flex items-center justify-center group"
                  >
                    {t.booking.form.submit}
                    <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
