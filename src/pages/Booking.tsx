import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, ChevronDown } from 'lucide-react';

export const Booking: React.FC = () => {
  const { t } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">
          {/* Left Side: Process */}
          <div className="flex flex-col justify-between space-y-12 bg-sand/5 p-10 md:p-16 rounded-3xl border border-charcoal/5">
            <div>
              <h1 className="text-5xl font-display font-medium mb-8">{t.booking.processTitle}</h1>
              <p className="text-charcoal/60 text-lg mb-12">{t.booking.goal}</p>
              
              <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-2 w-px bg-bronze/20" />
                
                {t.booking.steps.map((step, i) => (
                  <motion.div 
                    key={i} 
                    className="relative pl-12 cursor-pointer group"
                    onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-beige border-2 border-bronze flex items-center justify-center z-10 group-hover:bg-bronze group-hover:border-bronze transition-colors">
                      <span className="text-xs font-bold text-bronze group-hover:text-softwhite transition-colors">{i + 1}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-display font-medium">{step.title}</h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-bronze transition-transform duration-300 ${expandedStep === i ? 'rotate-180' : ''}`} 
                      />
                    </div>
                    <AnimatePresence>
                      {expandedStep === i && step.desc && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-charcoal/60 text-sm leading-relaxed pt-2 pr-8">{step.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {!expandedStep && step.desc && (
                      <p className="text-charcoal/40 text-xs leading-relaxed pt-1 line-clamp-2">{step.desc}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-charcoal/10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-bronze">Cosmiq Consulting Munich</p>
            </div>
          </div>

          {/* Right Side: Calendly Widget */}
          <div className="bg-softwhite rounded-3xl shadow-2xl border border-charcoal/5 overflow-hidden min-h-[800px]">
            <div className="p-6 bg-bronze/10 border-b border-charcoal/5">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-bronze" />
                <div>
                  <h3 className="text-xl font-display font-medium">Book Your Consultation</h3>
                  <p className="text-charcoal/60 text-sm">Select a time slot below</p>
                </div>
              </div>
            </div>
            <div className="p-0 h-[750px]">
              <iframe 
                src="https://calendly.com/signup90593/30min?embed_domain=localhost&embed_type=Inline" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                scrolling="auto"
                title="Calendly Scheduling"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
