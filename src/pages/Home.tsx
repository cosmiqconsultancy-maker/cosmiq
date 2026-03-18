import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { CompassSVG } from '../components/CompassSVG';
import { ArrowRight } from 'lucide-react';
import { Play } from 'lucide-react';
import { VideoPopup } from '../components/VideoPopup';
import { TestimonialForm } from '../components/TestimonialForm';
import type { Testimonial } from '../lib/testimonials';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/testimonials?status=approved')
      .then(res => {
        console.log('API response status:', res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('API data received:', data);
        console.log('Testimonials count:', data.testimonials?.length || 0);
        setTestimonials(data.testimonials || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching testimonials:', err);
        setLoading(false);
      });
  }, []);

  // Fallback testimonials if none from API
  const fallbackTestimonials = [
    {
      id: 1,
      name: 'Sarah Klein',
      email: '',
      message: "Amitabh's consultation completely changed our home office setup. My productivity has increased significantly, and I feel more focused throughout the day. The Vastu adjustments were simple but incredibly effective.",
      status: 'approved' as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Markus Weber',
      email: '',
      message: "After implementing Amitabh's recommendations, my sleep quality improved dramatically. I was skeptical at first, but the bedroom repositioning made a real difference. Highly recommended for anyone struggling with restlessness.",
      status: 'approved' as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Laura Fischer',
      email: '',
      message: "Our family relationships have become much more harmonious since the consultation. The living room adjustments created a more peaceful atmosphere. Amitabh understood our needs perfectly and provided practical solutions.",
      status: 'approved' as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 4,
      name: 'Raj Patel',
      email: '',
      message: "As someone familiar with Vastu, I was impressed by Amitabh's modern approach. He blended traditional wisdom with contemporary living seamlessly. My business has seen noticeable growth since the office consultation.",
      status: 'approved' as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 5,
      name: 'Anita Sharma',
      email: '',
      message: "Amitabh's Cosmiq Report was incredibly detailed and accurate. The personalized blueprint helped me understand my strengths and challenges. His guidance on spatial alignment has brought clarity and balance to my life.",
      status: 'approved' as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

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
                src="/assets/author-landpage.jpg" 
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
          src="/assets/13.jpeg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-5"
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

            <div className="relative aspect-[2/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/22.jpeg" 
                alt="Philosophy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-charcoal text-softwhite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">{t.problems.title}</h2>
            <p className="text-softwhite/60 leading-relaxed max-w-2xl mx-auto">
              Spatial imbalances often manifest as subtle but persistent challenges in our daily lives. 
              Recognizing these signs is the first step toward alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // Sleep icon
              <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>,
              // Focus/Target icon
              <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>,
              // Heart/Stress icon
              <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>,
              // People/Connection icon
              <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>,
              // Growth/Chart icon
              <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>,
              // Creative/Lightbulb icon
              <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            ].map((icon, i) => (
              <motion.div
                key={i}
                className="bg-softwhite/5 border border-softwhite/10 p-6 rounded-xl hover:bg-softwhite/10 transition-colors group"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-bronze/20 flex items-center justify-center mb-5 group-hover:bg-bronze/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.div>
                <h3 className="text-xl font-display font-medium mb-3">{t.problems.items[i].title}</h3>
                <p className="text-softwhite/60 leading-relaxed text-sm">
                  {t.problems.items[i].desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-bronze text-softwhite px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-softwhite hover:text-charcoal transition-all"
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-softwhite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-4">What Our Clients Say</h2>
          <p className="text-charcoal/60 text-center max-w-2xl mx-auto">Real experiences from people who transformed their spaces and lives</p>
          <div className="flex justify-center mt-6">
            <TestimonialForm />
          </div>
        </div>
        
        <div className="relative">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 w-[200%]"
          >
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {displayTestimonials.map((testimonial) => (
                  <div key={`${setIndex}-${testimonial.id}`} className="w-80 flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border border-charcoal/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-bronze/20 flex items-center justify-center">
                        <span className="text-bronze font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <h4 className="font-display font-medium">{testimonial.name}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-charcoal/70 leading-relaxed">"{testimonial.message}"</p>
                    <div className="mt-4 flex text-bronze text-sm">★★★★★</div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      </div>
  );
};
