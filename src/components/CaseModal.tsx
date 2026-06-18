import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, AlertCircle, Zap, Sparkles, Target, ArrowLeft, ArrowRight } from 'lucide-react';
import { DynamicIcon } from './SlideRenderer';
import { resolveAssetPath } from '../utils/resolveAssetPath';

interface CaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseData: {
    client: string;
    task: string;
    image: string;
    fullContent: {
      title: string;
      subtitle: string;
      gallery: string[];
      problem: { text: string; icon: string }[];
      solution: { text: string; icon: string }[];
      keyFeature: string;
      results: string[];
    };
  } | null;
}

export const CaseModal: React.FC<CaseModalProps> = ({ isOpen, onClose, caseData }) => {
  const [activeImageIdx, setActiveImageIdx] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      setActiveImageIdx(0);
    }
  }, [isOpen, caseData]);

  if (!caseData) return null;

  const gallery = caseData.fullContent.gallery || [caseData.image];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar bg-black/50 backdrop-blur-md"
          style={{ perspective: '2000px' }}
          onClick={onClose}
        >
          <div className="relative min-h-[100dvh] flex items-start justify-center p-0 md:p-12 z-10">
            <motion.div
              initial={{ opacity: 0, y: -100, rotateX: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, rotateX: 15, scale: 0.95 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 120,
                opacity: { duration: 0.4 },
              }}
              style={{ transformOrigin: 'top center' }}
              className="relative w-full max-w-[1620px] bg-white dark:bg-[#050505] md:rounded-[3rem] overflow-hidden flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full bg-black group overflow-hidden shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIdx}
                    src={resolveAssetPath(gallery[activeImageIdx])}
                    alt={`${caseData.client} ${activeImageIdx + 1}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="block w-full h-auto"
                    loading="eager"
                    decoding="async"
                  />
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex flex-col justify-end p-6 md:p-12 pt-24 md:pt-32">
                  <div className="max-w-3xl">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
                    >
                      Case Study — {caseData.client}
                    </motion.span>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tightest leading-[1.05]"
                    >
                      {caseData.fullContent.title}
                    </motion.h2>
                  </div>
                </div>

                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
                      aria-label="Предыдущее изображение"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
                      aria-label="Следующее изображение"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-4 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-accent transition-colors z-20 border border-white/10"
                  aria-label="Закрыть модальное окно"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-white dark:bg-[#050505]">
                {gallery.length > 1 && (
                  <div className="px-6 md:px-12 py-6 flex gap-3 overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-white/5 sticky top-0 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl z-20">
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative shrink-0 w-24 md:w-40 aspect-[16/9] rounded-xl overflow-hidden transition-all duration-300 ${
                          activeImageIdx === idx ? 'ring-2 ring-accent scale-95' : 'opacity-40 hover:opacity-100'
                        }`}
                      >
                        <img src={resolveAssetPath(img)} className="w-full h-full object-cover" alt="" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-8 md:p-16 max-w-[1400px] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-8 space-y-20">
                      <section>
                        <h3 className="text-brand dark:text-white text-2xl md:text-3xl font-display font-medium mb-6 leading-tight">
                          {caseData.fullContent.subtitle}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
                          {caseData.task}
                        </p>
                      </section>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <section>
                          <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500/60 mb-8 font-mono">
                            <AlertCircle className="w-4 h-4" /> Проблемы
                          </h4>
                          <div className="space-y-8">
                            {caseData.fullContent.problem.map((p, i) => (
                              <div key={i} className="flex gap-5 group">
                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-red-500/5 flex items-center justify-center text-red-500/40 group-hover:scale-110 transition-transform">
                                  <DynamicIcon name={p.icon} className="w-6 h-6" />
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 font-medium text-lg leading-snug pt-1">
                                  {p.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </section>

                        <section>
                          <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8 font-mono">
                            <Zap className="w-4 h-4" /> Решение
                          </h4>
                          <div className="space-y-8">
                            {caseData.fullContent.solution.map((s, i) => (
                              <div key={i} className="flex gap-5 group">
                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                  <DynamicIcon name={s.icon} className="w-6 h-6" />
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 font-medium text-lg leading-snug pt-1">
                                  {s.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="p-8 md:p-10 glass-card rounded-[2.5rem] border-brand/10 dark:border-white/10 relative overflow-hidden group/feat"
                      >
                        <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-accent/5 rotate-12 group-hover/feat:text-accent/10 transition-colors" />
                        <h4 className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-8 font-mono">
                          <Sparkles className="w-3.5 h-3.5" /> Ключевая фича
                        </h4>
                        <p className="text-brand dark:text-white text-xl md:text-2xl font-display font-medium leading-relaxed italic z-10 relative">
                          «{caseData.fullContent.keyFeature}»
                        </p>
                      </motion.div>

                      <div className="p-8 md:p-10 glass-card rounded-[2.5rem] bg-gray-50/50 dark:bg-white/5">
                        <h4 className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 font-mono">
                          <Target className="w-3.5 h-3.5" /> Результат
                        </h4>
                        <div className="space-y-4">
                          {caseData.fullContent.results.map((r, i) => (
                            <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-200/50 dark:border-white/5 last:border-0 hover:translate-x-2 transition-transform duration-300">
                              <div className="w-2 h-2 rounded-full bg-accent" />
                              <span className="text-gray-700 dark:text-gray-200 font-medium">{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
