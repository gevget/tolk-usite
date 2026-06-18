/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp, Menu, Moon, MousePointer2, Sun, X as CloseIcon } from 'lucide-react';
import { SlideRenderer } from './components/SlideRenderer.tsx';
import { SLIDES } from './types.ts';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('slide-1');
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    const sections = document.querySelectorAll('[id^="slide-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const updateScrollTopVisibility = () => {
      const firstScreenTrigger = Math.max(window.innerHeight * 0.72, 520);
      setShowScrollTop(window.scrollY > firstScreenTrigger);
    };

    updateScrollTopVisibility();
    window.addEventListener('scroll', updateScrollTopVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollTopVisibility);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Старт', id: 'slide-1' },
    { label: 'С чего начать', id: 'slide-start' },
    { label: 'Клиенты', id: 'slide-10' },
    { label: 'Проблемы', id: 'slide-problems' },
    { label: 'AI', id: 'slide-8' },
    { label: 'Команда', id: 'slide-why' },
    { label: 'Кейсы', id: 'slide-11' },
    { label: 'Продукты', id: 'slide-12' },
    { label: 'Контакты', id: 'slide-13' },
  ];

  return (
    <div className={`relative selection:bg-accent/20 selection:text-brand transition-colors duration-500 ${isDark ? 'dark' : ''}`}>
      <div className="grain-overlay" />
      <div className="flowing-bg" />

      <header className="fixed top-0 left-0 right-0 h-12 glass-nav z-[60] px-6 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-brand dark:bg-white rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand dark:text-white">TOLK × USITE</span>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative group px-2 py-1 ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-gray-400 dark:text-gray-300 hover:text-accent dark:hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-accent/5 rounded-md -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-gray-400 dark:text-gray-400 hover:text-brand dark:hover:text-white transition-colors"
            aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-yellow-400 fill-yellow-400 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
            ) : (
              <Moon className="w-4 h-4 text-gray-400" />
            )}
          </button>
          <button
            onClick={() => scrollToSection('slide-13')}
            className="hidden sm:block px-6 py-1.5 bg-gray-900 dark:bg-white dark:text-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all shadow-lg hover:shadow-accent/20 active:scale-95"
          >
            Обсудить проект
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-400 dark:text-gray-300"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] glass-card pt-20 px-8 flex flex-col gap-8 lg:hidden m-4 rounded-[2rem] shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-3xl font-display font-medium text-left transition-colors ${
                    activeSection === item.id ? 'text-accent' : 'text-brand dark:text-white hover:text-accent'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-auto pb-12">
              <button
                onClick={() => scrollToSection('slide-13')}
                className="w-full py-6 bg-brand dark:bg-white text-white dark:text-black rounded-3xl font-display font-medium text-xl shadow-2xl"
              >
                Обсудить проект
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed top-12 left-0 right-0 h-0.5 bg-accent origin-left z-50" style={{ scaleX }} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, x: -24, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -24, scale: 0.92 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed left-4 md:left-6 bottom-6 md:bottom-10 z-[65] flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-brand shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all hover:border-accent hover:bg-accent hover:text-white active:scale-95 dark:border-white/15 dark:bg-[#0B1018]/80 dark:text-white dark:hover:border-accent dark:hover:bg-accent"
            aria-label="Прокрутить наверх"
            title="Наверх"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <main className="snap-y snap-mandatory bg-white dark:bg-[#050505] scroll-pt-12 transition-colors duration-500 overflow-hidden">
        {SLIDES.map((slide) => (
          <SlideRenderer key={slide.id} slide={slide} />
        ))}
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="fixed bottom-10 right-10 z-40 hidden md:flex items-center gap-6 text-gray-300 dark:text-gray-700 text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none transition-colors"
      >
        <span className="dark:text-white/20 italic">deploying future</span>
        <div className="w-12 h-px bg-gray-200 dark:bg-white/5" />
        <MousePointer2 className="w-3 h-3 animate-bounce" />
      </motion.div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30 dark:opacity-60">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100 dark:bg-blue-900/30 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -70, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[60%] -right-[5%] w-[40%] h-[40%] bg-indigo-50 dark:bg-purple-900/20 blur-[120px] rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-transparent via-gray-50/50 dark:via-transparent to-transparent opacity-50" />
      </div>
    </div>
  );
}
