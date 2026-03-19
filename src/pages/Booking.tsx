import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, ChevronDown, Loader2 } from 'lucide-react';

export const Booking: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [clickedStep, setClickedStep] = useState<number | null>(null);
  const [recentlyClosed, setRecentlyClosed] = useState<number | null>(null);
  const [calendlyLoading, setCalendlyLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCalendlyLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStepClick = (i: number) => {
    if (clickedStep === i) {
      // Closing the step
      setClickedStep(null);
      setRecentlyClosed(i);
      // Clear the recently closed after a short delay so hover works again
      setTimeout(() => setRecentlyClosed(null), 300);
    } else {
      // Opening the step
      setClickedStep(i);
    }
  };

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-stretch">
          {/* Left Side: Process */}
          <div className="flex flex-col justify-between space-y-8 lg:space-y-12 bg-sand/5 p-6 md:p-10 lg:p-16 rounded-3xl border border-charcoal/5">
            <div>
              <h1 className="text-5xl font-display font-medium mb-8">{t.booking.processTitle}</h1>
              <p className="text-charcoal/60 text-lg mb-12">{t.booking.goal}</p>
              
              <div className="space-y-4 md:space-y-6 relative">
                {/* Vertical Line - Hidden on mobile */}
                <div className="absolute left-4 top-2 bottom-2 w-px bg-bronze/20 hidden md:block" />
                
                {t.booking.steps.map((step, i) => {
                  const isExpanded = clickedStep === i || (hoveredStep === i && clickedStep === null && recentlyClosed !== i);
                  return (
                    <motion.div 
                      key={i} 
                      className="relative pl-0 md:pl-12 cursor-pointer group"
                      onClick={() => handleStepClick(i)}
                      onMouseEnter={() => setHoveredStep(i)}
                      onMouseLeave={() => setHoveredStep(null)}
                      whileHover={{ x: window.innerWidth >= 768 ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-beige border-2 border-bronze flex items-center justify-center z-10 group-hover:bg-bronze group-hover:border-bronze transition-colors hidden md:flex">
                        <span className="text-xs font-bold text-bronze group-hover:text-softwhite transition-colors">{i + 1}</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/50 md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-beige border-2 border-bronze flex items-center justify-center md:hidden flex-shrink-0">
                            <span className="text-xs font-bold text-bronze">{i + 1}</span>
                          </div>
                          <h3 className="text-base md:text-lg font-display font-medium">{step.title}</h3>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-bronze transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} flex-shrink-0 ml-2`} 
                        />
                      </div>
                      <AnimatePresence>
                        {isExpanded && step.desc && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="text-charcoal/60 text-sm leading-relaxed pt-2 pr-0 md:pr-8">{step.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-12 p-6 bg-bronze/5 border border-bronze/20 rounded-2xl">
              <h3 className="text-lg font-display font-medium text-bronze mb-3">{t.booking.privacyNotice.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed font-medium">
                {t.booking.privacyNotice.text}
              </p>
            </div>

            <div className="pt-8 border-t border-charcoal/10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-bronze">Cosmiq Consulting Munich</p>
            </div>
          </div>

          {/* Right Side: Calendly Widget */}
          <div className="bg-softwhite rounded-3xl shadow-2xl border border-charcoal/5 overflow-hidden flex flex-col">
            <div className="p-6 bg-bronze/10 border-b border-charcoal/5 flex-shrink-0">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-bronze" />
                <div>
                  <h3 className="text-xl font-display font-medium">Book Your Consultation</h3>
                  <p className="text-charcoal/60 text-sm">Select a time slot below</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative min-h-[700px]">
              {calendlyLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-softwhite z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-12 h-12 text-bronze" />
                  </motion.div>
                  <p className="mt-4 text-charcoal/60 text-sm">Loading calendar...</p>
                </div>
              )}
              <iframe 
                src="https://calendly.com/vrushikamishra/new-meeting?embed_domain=localhost&embed_type=Inline" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                scrolling="auto"
                title="Calendly Scheduling"
                className="bg-white absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
