/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { ArrowUp, Menu, Moon, MousePointer2, Sun, X as CloseIcon } from 'lucide-react';
import { SlideRenderer } from './components/SlideRenderer.tsx';
import { SLIDES } from './types.ts';

export default function App() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
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

      <header className="fixed top-0 left-0 right-0 h-12 glass-nav z-[60] px-4 md:px-6 flex items-center justify-between transition-colors">
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
              <Sun className="w-4 h-4 text-yellow-400 fill-yellow-400 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" aria-hidden="true" focusable="false" />
            ) : (
              <Moon className="w-4 h-4 text-gray-400" aria-hidden="true" focusable="false" />
            )}
          </button>
          <button
            onClick={() => scrollToSection('slide-13')}
            className="hidden sm:block px-5 py-1.5 bg-gray-900 dark:bg-white dark:text-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all shadow-lg hover:shadow-accent/20 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Обсудить проект
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-400 dark:text-gray-300"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon className="w-5 h-5" aria-hidden="true" focusable="false" /> : <Menu className="w-5 h-5" aria-hidden="true" focusable="false" />}
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
            className="fixed inset-0 z-[55] glass-card pt-14 md:pt-20 px-4 md:px-8 flex flex-col gap-5 md:gap-8 lg:hidden m-2.5 md:m-4 rounded-[1.35rem] md:rounded-[2rem] shadow-2xl"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[1.85rem] md:text-3xl font-display font-medium text-left transition-colors ${
                    activeSection === item.id ? 'text-accent' : 'text-brand dark:text-white hover:text-accent'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-auto pb-8 md:pb-12">
              <button
                onClick={() => scrollToSection('slide-13')}
                className="w-full py-3.5 md:py-6 bg-brand dark:bg-white text-white dark:text-black rounded-[1.2rem] md:rounded-3xl font-display font-medium text-base md:text-xl shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
            <ArrowUp className="h-5 w-5" aria-hidden="true" focusable="false" />
          </motion.button>
        )}
      </AnimatePresence>

      <main className="bg-white dark:bg-[#050505] scroll-pt-12 transition-colors duration-500 overflow-hidden md:snap-y md:snap-mandatory">
        {SLIDES.map((slide) => (
          <SlideRenderer key={slide.id} slide={slide} />
        ))}
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="fixed bottom-10 right-10 z-40 hidden xl:flex items-center gap-6 text-gray-300 dark:text-gray-700 text-[10px] font-bold uppercase tracking-[0.3em] pointer-events-none transition-colors"
      >
        <span className="dark:text-white/20 italic">deploying future</span>
        <div className="w-12 h-px bg-gray-200 dark:bg-white/5" />
        <MousePointer2 className="w-3 h-3 animate-bounce" aria-hidden="true" focusable="false" />
      </motion.div>

      <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden opacity-20 dark:opacity-45 md:block">
        <motion.div
          animate={prefersReducedMotion ? undefined : { x: [0, 28, 0], y: [0, -24, 0] }}
          transition={prefersReducedMotion ? undefined : { duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[10%] -left-[10%] h-[42%] w-[42%] rounded-full bg-blue-100 blur-[96px] dark:bg-blue-900/22"
        />
        <motion.div
          animate={prefersReducedMotion ? undefined : { x: [0, -36, 0], y: [0, 18, 0] }}
          transition={prefersReducedMotion ? undefined : { duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute right-[2%] top-[58%] h-[32%] w-[32%] rounded-full bg-indigo-50 blur-[88px] dark:bg-purple-900/14"
        />
        <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-transparent via-gray-50/35 to-transparent opacity-45 dark:via-transparent" />
      </div>
    </div>
  );
}
