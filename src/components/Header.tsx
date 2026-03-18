import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.blogs, path: '/blogs' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-5xl mx-auto h-16 px-8 flex items-center justify-between bg-softwhite/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-full"
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/assets/logo.png" 
            alt="Cosmiq Logo" 
            className="h-8"
            style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(13%) saturate(1518%) hue-rotate(347deg) brightness(91%) contrast(88%)' }}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:text-bronze",
                location.pathname === item.path ? "text-bronze" : "text-charcoal/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            className="text-[10px] font-black tracking-tighter uppercase w-8 h-8 flex items-center justify-center rounded-full border border-charcoal/10 hover:bg-charcoal hover:text-softwhite transition-all"
          >
            {language === 'en' ? 'DE' : 'EN'}
          </button>

          <Link
            to="/booking"
            className="hidden sm:flex bg-charcoal text-softwhite px-5 py-2 text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-bronze transition-all shadow-lg"
          >
            {t.nav.bookNow}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden mt-4 mx-auto max-w-sm bg-softwhite/90 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden"
          >
            <nav className="flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-bold tracking-[0.2em] uppercase transition-colors",
                    location.pathname === item.path ? "text-bronze" : "text-charcoal/70"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsMenuOpen(false)}
                className="bg-charcoal text-softwhite py-4 text-center text-xs font-bold tracking-[0.2em] uppercase hover:bg-bronze transition-colors rounded-full"
              >
                {t.nav.bookNow}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
