import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { CompassSVG } from '../components/CompassSVG';
import { ArrowRight } from 'lucide-react';
import { VideoPopup } from '../components/VideoPopup';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] mb-8 text-balance">
              {t.hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-xl leading-relaxed">
              {t.hero.subheading}
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-charcoal text-softwhite px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-bronze transition-all group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative h-[50vh] lg:h-[70vh]">
            <div className="absolute inset-0 bg-sand/20 rounded-2xl overflow-hidden">
              <img 
                src="/src/assets/author-landpage.jpg" 
                alt="Founder of Cosmiq Consulting" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Quote Section */}
      <section className="bg-charcoal py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-softwhite tracking-[0.1em] uppercase">
            {t.hero.tagline}
          </h2>
        </div>
      </section>

      {/* Vastu Shastra Section */}
      <section className="py-20 bg-softwhite relative">
        <img 
          src="/src/assets/13.jpeg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <CompassSVG className="w-64 h-64 md:w-96 md:h-96 text-bronze/40" />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-medium">{t.vastu.title}</h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>{t.vastu.text1}</p>
                <p>{t.vastu.text2}</p>
                <p>{t.vastu.text3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-medium">{t.philosophy.title}</h2>
              <div className="space-y-6 text-charcoal/70 leading-relaxed">
                <p>{t.philosophy.p1}</p>
                <p>{t.philosophy.p2}</p>
                <p>{t.philosophy.p3}</p>
                <p className="font-medium text-charcoal">{t.philosophy.p4}</p>
                <p>{t.philosophy.p5}</p>
                <ul className="space-y-3 pl-4 border-l-2 border-bronze/30">
                  {t.philosophy.list.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-bronze rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>{t.philosophy.p6}</p>
                <p className="text-xl font-display italic text-charcoal">{t.philosophy.p7}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/15.jpeg" 
                  alt="Architectural space" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/10" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/author-philosophy.png" 
                  alt="Philosophy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-32 bg-charcoal text-softwhite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">{t.problems.title}</h2>
              <p className="text-softwhite/60 leading-relaxed">
                Spatial imbalances often manifest as subtle but persistent challenges in our daily lives. 
                Recognizing these signs is the first step toward alignment.
              </p>
            </div>
            
            {/* Image Carousel */}
            <div className="lg:col-span-7 relative h-64 md:h-[400px] rounded-2xl overflow-hidden">
              <div className="flex h-full w-full overflow-hidden">
                <motion.div 
                  animate={{ 
                    x: ["0%", "-50%"] 
                  }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="flex h-full w-[200%]"
                >
                  {[
                    "/src/assets/12.jpeg",
                    "/src/assets/13.jpeg",
                    "/src/assets/14.jpeg",
                    "/src/assets/15.jpeg",
                    "/src/assets/16.jpeg",
                    "/src/assets/17.jpeg",
                    "/src/assets/18.jpeg",
                    "/src/assets/11.jpeg"
                  ].map((src, idx) => (
                    <div key={idx} className="w-1/4 h-full px-2">
                      <img 
                        src={src} 
                        alt="Architectural Alignment" 
                        className="w-full h-full object-cover rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-charcoal to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-charcoal to-transparent z-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.problems.items.map((item, i) => (
              <div
                key={i}
                className="bg-softwhite/5 border border-softwhite/10 p-10 rounded-xl hover:bg-softwhite/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-bronze/20 flex items-center justify-center mb-8 group-hover:bg-bronze/40 transition-colors">
                  <span className="text-bronze font-display font-bold">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">{item.title}</h3>
                <p className="text-softwhite/60 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-bronze text-softwhite px-10 py-5 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-softwhite hover:text-charcoal transition-all"
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Video Popup */}
      <VideoPopup videoId="gcbDHGlBWOs" trigger="button" />
    </div>
  );
};
