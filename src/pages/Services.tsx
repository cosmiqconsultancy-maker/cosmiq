import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Briefcase, Settings, ArrowRight, Check, ChevronDown } from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleExpand = (i: number) => {
    if (expandedIndex === i) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(i);
      // Scroll to the service header after a short delay to allow expansion
      setTimeout(() => {
        serviceRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const services = [
    {
      ...t.services.s1,
      icon: <HomeIcon className="w-8 h-8" />,
      image: "/assets/home.png",
      color: "bg-sand/10"
    },
    {
      ...t.services.s2,
      icon: <Briefcase className="w-8 h-8" />,
      image: "/assets/20.jpeg",
      additionalImage: "/assets/21.jpeg",
      color: "bg-bronze/5"
    },
    {
      ...t.services.s3,
      icon: <Settings className="w-8 h-8" />,
      image: "/assets/19.jpeg",
      color: "bg-stone/10"
    }
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-8">{t.services.title}</h1>
          <div className="w-24 h-1 bg-bronze mx-auto" />
        </div>

        <div className="space-y-6">
          {services.map((service, i) => (
            <div 
              key={i}
              ref={el => { serviceRefs.current[i] = el; }}
              className={`rounded-2xl overflow-hidden border border-charcoal/5 transition-all ${expandedIndex === i ? 'shadow-2xl' : 'hover:shadow-lg'}`}
            >
              <button 
                onClick={() => handleExpand(i)}
                className={`w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 p-6 md:p-8 text-left transition-colors ${expandedIndex === i ? 'bg-softwhite' : service.color}`}
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className="w-16 h-16 rounded-full bg-bronze/10 text-bronze flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="space-y-1">
                    {service.tagline && <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-bronze">{service.tagline}</p>}
                    <h2 className="text-2xl md:text-3xl font-display font-medium">{service.title}</h2>
                  </div>
                </div>
                <div className={`transition-transform duration-500 ${expandedIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-6 h-6 text-bronze" />
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden bg-softwhite"
                  >
                    <div className="p-8 pt-0 space-y-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                          {service.quote && (
                            <p className="text-2xl font-display italic text-charcoal/80 border-l-4 border-bronze pl-6 py-2">
                              {service.quote}
                            </p>
                          )}
                          <p className="text-charcoal/70 leading-relaxed text-lg">
                            {service.description}
                          </p>
                          
                          {service.items && service.items.length > 0 && (
                            <ul className="grid grid-cols-1 gap-4">
                              {service.items.map((item, idx) => (
                                <li key={idx} className="flex items-start bg-beige/50 p-4 rounded-lg border border-charcoal/5">
                                  <Check className="w-5 h-5 text-bronze mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-charcoal/80 text-sm font-medium">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {service.features && (
                            <div className="grid grid-cols-1 gap-6">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="space-y-2">
                                  <h4 className="text-lg font-display font-medium text-bronze">{feature.title}</h4>
                                  <p className="text-charcoal/60 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {!service.pricing && (
                            <Link
                              to="/booking"
                              className="inline-flex items-center bg-charcoal text-softwhite px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-bronze transition-all"
                            >
                              {t.nav.bookNow}
                              <ArrowRight className="ml-3 w-4 h-4" />
                            </Link>
                          )}
                        </div>
                        {i === 0 || i === 1 ? (
                          <div className="space-y-4">
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                              <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                              <img 
                                src={i === 0 ? "/assets/home1.png" : service.additionalImage} 
                                alt={`${service.title} - Additional`}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className={`relative rounded-xl overflow-hidden shadow-lg ${i === 1 ? 'aspect-[4/3]' : 'aspect-video'}`}>
                            <img 
                              src={service.image} 
                              alt={service.title} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                      </div>

                      {service.blueprintSections && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-charcoal/10">
                          {service.blueprintSections.map((section, idx) => (
                            <div key={idx} className="text-center space-y-4 p-6 bg-sand/5 rounded-2xl">
                              <div className="text-4xl text-bronze">{section.icon}</div>
                              <h4 className="text-xl font-display font-medium">{section.title}</h4>
                              <p className="text-charcoal/60 text-sm leading-relaxed">{section.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {service.whatWeAnalyse && (
                        <div className="bg-sand/10 p-10 rounded-3xl space-y-8">
                          <h4 className="text-2xl font-display font-medium">What We Analyse</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.whatWeAnalyse.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-bronze mt-0.5 flex-shrink-0" />
                                <span className="text-charcoal/80 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.beforeAfter && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                            <h4 className="text-xl font-display font-medium text-red-800 mb-6">Typical Before</h4>
                            <ul className="space-y-4">
                              {service.beforeAfter.before.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-red-700/70 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100">
                            <h4 className="text-xl font-display font-medium text-green-800 mb-6">Typical After</h4>
                            <ul className="space-y-4">
                              {service.beforeAfter.after.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-green-700/70 text-sm">
                                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {service.whatsInside && (
                        <div className="space-y-8">
                          <h4 className="text-3xl font-display font-medium text-center">{service.whatsInside.title}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.whatsInside.items.map((item, idx) => (
                              <div key={idx} className="p-6 border border-charcoal/5 rounded-2xl hover:bg-sand/5 transition-colors">
                                <h5 className="text-lg font-display font-medium text-bronze mb-2">✧ {item.title}</h5>
                                <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.whySpecial && (
                        <div className="bg-sand/10 p-10 rounded-3xl space-y-8">
                          <h4 className="text-2xl font-display font-medium">{service.whySpecial.title}</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.whySpecial.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-bronze mt-0.5 flex-shrink-0" />
                                <span className="text-charcoal/80 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.pricing && (
                        <div className="space-y-10 pt-8 border-t border-charcoal/10">
                          <h4 className="text-3xl font-display font-medium text-center">{service.pricing.title}</h4>
                          
                          {/* Pricing Note - Highlighted text above pricings */}
                          {service.pricingNote && (
                            <div className="bg-bronze/10 border-l-4 border-bronze p-6 rounded-r-xl max-w-2xl mx-auto">
                              <p className="text-charcoal font-medium whitespace-pre-line">{service.pricingNote}</p>
                            </div>
                          )}
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {service.pricing.tiers.map((tier, idx) => (
                              <div key={idx} className={`relative p-8 rounded-3xl border flex flex-col ${tier.badge ? 'border-bronze bg-bronze/5 shadow-xl scale-105 z-10' : 'border-charcoal/5 bg-softwhite'}`}>
                                {tier.badge && (
                                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bronze text-softwhite px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                    {tier.badge}
                                  </div>
                                )}
                                <h5 className="text-xl font-display font-medium mb-2">{tier.name}</h5>
                                <div className="text-3xl font-display font-medium text-bronze mb-4">{tier.price}</div>
                                <p className="text-charcoal/60 text-sm leading-relaxed mb-8 flex-grow">{tier.desc}</p>
                                <Link
                                  to="/booking"
                                  className={`w-full py-4 rounded-sm text-[10px] font-bold tracking-widest uppercase text-center transition-all ${tier.badge ? 'bg-bronze text-softwhite hover:bg-charcoal' : 'bg-charcoal text-softwhite hover:bg-bronze'}`}
                                >
                                  {t.nav.bookNow}
                                </Link>
                              </div>
                            ))}
                          </div>
                          <p className="text-center text-sm text-charcoal/50 mt-6">* Prices are inclusive of VAT</p>
                          {service.pricingFooter && (
                            <p className="text-center text-sm text-bronze italic">{service.pricingFooter}</p>
                          )}
                        </div>
                      )}

                      {service.cta && (
                        <div className="text-center space-y-6 pt-12">
                          <h4 className="text-2xl font-display font-medium">{service.cta.title}</h4>
                          <p className="text-charcoal/60 max-w-2xl mx-auto">{service.cta.desc}</p>
                          <Link
                            to="/booking"
                            className="inline-flex items-center bg-bronze text-softwhite px-10 py-5 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-charcoal transition-all"
                          >
                            Get Started
                            <ArrowRight className="ml-3 w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-sand/10 py-20 rounded-3xl border border-sand/20">
          <h3 className="text-3xl font-display font-medium mb-10">{t.hero.cta}</h3>
          <Link
            to="/booking"
            className="inline-flex items-center bg-charcoal text-softwhite px-10 py-5 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-bronze transition-all group"
          >
            {t.nav.bookNow}
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
