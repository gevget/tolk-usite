import React, { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SlideContent } from '../types';
import { resolveAssetPath } from '../utils/resolveAssetPath';
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart,
  BarChart3,
  Bot,
  Brain,
  Brush,
  Bug,
  Calculator,
  Check,
  CheckCircle2,
  Clock,
  Cloud,
  Code,
  Coins,
  Compass,
  Cpu,
  Database,
  DollarSign,
  Eye,
  EyeOff,
  FastForward,
  FileImage,
  FileJson,
  FileQuestion,
  FileSpreadsheet,
  FileText,
  FileWarning,
  Flag,
  Gem,
  Globe,
  GraduationCap,
  HandMetal,
  Headset,
  History,
  Image,
  Layout,
  LayoutDashboard,
  Layers,
  Library,
  LifeBuoy,
  Lightbulb,
  LineChart,
  Link,
  Link2Off,
  List,
  Lock,
  Mail,
  Maximize,
  Maximize2,
  Megaphone,
  MessageCircle,
  MessageCircleOff,
  MessageSquareOff,
  MessageSquareText,
  Minimize2,
  Monitor,
  MousePointer,
  MousePointerClick,
  Network,
  PackageX,
  Palette,
  PenTool,
  PhoneOff,
  PieChart,
  Play,
  Plus,
  RefreshCcw,
  RefreshCw,
  Rocket,
  Route,
  Search,
  Send,
  Settings,
  Settings2,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Shuffle,
  Smartphone,
  Sparkles,
  Split,
  Target,
  TrendingUp,
  Truck,
  Type,
  User,
  UserCheck,
  UserCog,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Wallet,
  XCircle,
  Zap,
  ZapOff,
} from 'lucide-react';

const CaseModal = lazy(() => import('./CaseModal').then((m) => ({ default: m.CaseModal })));

const IconMap: Record<string, any> = {
  Activity,
  AlertCircle,
  BarChart,
  BarChart3,
  Bot,
  Brain,
  Brush,
  Bug,
  Calculator,
  CheckCircle2,
  Clock,
  Cloud,
  Code,
  Coins,
  Compass,
  Cpu,
  Database,
  DollarSign,
  Eye,
  EyeOff,
  FastForward,
  FileImage,
  FileJson,
  FileQuestion,
  FileSpreadsheet,
  FileText,
  FileWarning,
  Flag,
  Gem,
  Globe,
  GraduationCap,
  HandMetal,
  Headset,
  History,
  Image,
  Layout,
  LayoutDashboard,
  Layers,
  Library,
  LifeBuoy,
  Lightbulb,
  LineChart,
  Link,
  Link2Off,
  List,
  Lock,
  Mail,
  Maximize,
  Maximize2,
  Megaphone,
  MessageCircle,
  MessageCircleOff,
  MessageSquareOff,
  MessageSquareText,
  Minimize2,
  Monitor,
  MousePointer,
  MousePointerClick,
  Network,
  PackageX,
  Palette,
  PenTool,
  PhoneOff,
  PieChart,
  Play,
  RefreshCcw,
  RefreshCw,
  Rocket,
  Route,
  Search,
  Send,
  Settings,
  Settings2,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Shuffle,
  Smartphone,
  Sparkles,
  Split,
  Target,
  TrendingUp,
  Truck,
  Type,
  User,
  UserCheck,
  UserCog,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Wallet,
  XCircle,
  Zap,
  ZapOff,
};

export const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = IconMap[name];
  if (!IconComponent) return <Check className={className} />;
  return <IconComponent className={className} />;
};

const ExpandableBio = ({ role, bio }: { role: string; bio?: string }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="space-y-4">
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">{role}</p>
      {bio && (
        <div className="space-y-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-brand dark:hover:text-white transition-colors flex items-center gap-2 group/btn"
            aria-label={isExpanded ? 'Скрыть биографию' : 'Читать биографию'}
            aria-expanded={isExpanded}
          >
            <span className="border-b border-accent/20 group-hover/btn:border-brand dark:group-hover/btn:border-white">
              {isExpanded ? 'Скрыть ×' : 'Подробнее ↓'}
            </span>
          </button>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed max-w-xl whitespace-pre-wrap pb-4 pt-2 border-l border-gray-100 dark:border-white/10 pl-6">
              {bio}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

type ModalCaseData = {
  client: string;
  task: string;
  image: string;
  preview?: {
    problem?: string;
    solution?: string;
    result?: string;
  };
  fullContent: {
    title: string;
    subtitle: string;
    gallery: string[];
    problem: { text: string; icon: string }[];
    solution: { text: string; icon: string }[];
    keyFeature: string;
    results: string[];
  };
};

const buildCasePreview = (item: any) => ({
  problem: item.preview?.problem || item.task,
  solution: item.preview?.solution || item.fullContent?.subtitle || item.task,
  result: item.preview?.result || item.fullContent?.results?.slice(0, 2).join(', ') || '',
});

export const SlideRenderer: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const [selectedCase, setSelectedCase] = React.useState<ModalCaseData | null>(null);
  const [openTooltipId, setOpenTooltipId] = React.useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 110,
      },
    },
  };

  const renderHero = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 h-full items-start">
      <div className="flex flex-col justify-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full mb-8">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-300">
              {slide.data?.eyebrow}
            </span>
          </div>
          <motion.p
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-medium leading-[0.9] mb-8 tracking-tightest text-brand/40 dark:text-white/40"
          >
            {slide.data?.brand}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-[5.4rem] font-display font-medium leading-[0.95] mb-8 tracking-tightest text-brand dark:text-white max-w-5xl"
          >
            {slide.title}
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed text-gray-500 dark:text-gray-400 font-normal">
            {slide.description}
          </p>

          <div className="mt-8 space-y-3">
            {slide.data?.roles?.map((role: string) => (
              <p key={role} className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                {role}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {slide.data?.bullets?.map((bullet: string) => (
              <div
                key={bullet}
                className="liquid-glass flex items-start gap-3 rounded-2xl px-4 py-4"
              >
                <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-200">{bullet}</span>
              </div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
            <button
              onClick={() =>
                document.getElementById(slide.data?.primaryCta?.targetId || 'slide-13')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-brand dark:bg-white text-white dark:text-black rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all shadow-xl hover:shadow-accent/20 active:scale-95"
            >
              {slide.data?.primaryCta?.label}
            </button>
            <button
              onClick={() =>
                document.getElementById(slide.data?.secondaryCta?.targetId || 'slide-11')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 glass-card rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:scale-95"
            >
              {slide.data?.secondaryCta?.label}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {slide.data?.image && (
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-3xl md:rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <img
            src={resolveAssetPath(slide.data.image)}
            alt="Hero"
            className="block w-full h-auto object-contain transition-transform duration-[2s]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      )}
    </div>
  );

  const renderTooltipCard = (id: string, title: string, text?: string) => {
    if (!text) return null;
    const isOpen = openTooltipId === id;

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass absolute left-0 bottom-full mb-4 z-[120] w-[min(22rem,calc(100vw-3rem))] rounded-[1.75rem] p-5"
          >
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/60 via-white/10 to-blue-100/30 dark:from-white/10 dark:via-white/5 dark:to-blue-400/10 pointer-events-none" />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent mb-3">{title}</p>
              <p className="text-sm md:text-[15px] leading-relaxed text-gray-700 dark:text-gray-100">{text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const renderList = () => {
    const hasImage = Boolean(slide.data?.image);
    const isDarkFocusSection = slide.id === 'slide-problems' || slide.id === 'slide-8';
    const pointGridClass = !hasImage
      ? `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 ${
          slide.id === 'slide-problems' ? 'gap-y-[3.75rem]' : slide.id === 'slide-extras' ? 'gap-y-[4.5rem]' : 'gap-y-10'
        }`
      : `grid grid-cols-1 ${
          slide.id === 'slide-problems' ? 'gap-y-[3.75rem]' : slide.id === 'slide-extras' ? 'gap-y-[4.5rem]' : 'gap-y-10'
        } max-w-2xl`;

    return (
      <div className="flex flex-col h-full justify-center">
        <div className={`grid grid-cols-1 ${hasImage ? 'lg:grid-cols-2' : ''} gap-24 items-center`}>
          <div className="w-full">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-6xl font-display font-medium mb-10 md:mb-16 tracking-tightest leading-[0.9]"
              style={slide.customStyles?.title}
            >
              {slide.title}
            </motion.h2>

            {slide.subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-3xl text-gray-400 mb-12 md:mb-16 max-w-4xl leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>
            )}

            {slide.points && (
              <div className={pointGridClass}>
                {slide.points.map((point: any, idx: number) => (
                  <motion.button
                    key={idx}
                    type="button"
                    variants={itemVariants}
                    className={`relative flex items-center gap-6 group text-left ${
                      isDarkFocusSection
                        ? 'dark:rounded-[2rem] dark:border dark:border-white/10 dark:bg-white/[0.03] dark:px-5 dark:py-5'
                        : ''
                    }`}
                    onMouseEnter={() => point.tooltip && setOpenTooltipId(`${slide.id}-point-${idx}`)}
                    onMouseLeave={() => setOpenTooltipId((current) => (current === `${slide.id}-point-${idx}` ? null : current))}
                    onFocus={() => point.tooltip && setOpenTooltipId(`${slide.id}-point-${idx}`)}
                    onBlur={() => setOpenTooltipId((current) => (current === `${slide.id}-point-${idx}` ? null : current))}
                    onClick={() =>
                      point.tooltip &&
                      setOpenTooltipId((current) => (current === `${slide.id}-point-${idx}` ? null : `${slide.id}-point-${idx}`))
                    }
                    aria-expanded={openTooltipId === `${slide.id}-point-${idx}`}
                  >
                    <div className="w-14 h-14 bg-gray-50 dark:bg-white/6 rounded-2xl flex items-center justify-center group-hover:bg-brand dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all group-hover:scale-110 shrink-0 border border-transparent dark:border-white/8">
                      <DynamicIcon
                        name={point.icon}
                        className="w-6 h-6 text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-black transition-colors"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-gray-300 dark:text-gray-700 font-mono text-[8px] tracking-[0.2em] uppercase block mb-1">
                        Point // 0{idx + 1}
                      </span>
                      <h4 className="text-lg md:text-xl font-display font-medium leading-tight text-gray-800 dark:text-gray-200 group-hover:text-brand dark:group-hover:text-white transition-colors">
                        {point.text}
                      </h4>
                    </div>
                    {renderTooltipCard(`${slide.id}-point-${idx}`, point.text, point.tooltip)}
                  </motion.button>
                ))}
              </div>
            )}

            {!slide.points && Array.isArray(slide.data) && (
              <div
                className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 ${
                  slide.id === 'slide-extras' ? 'gap-y-[4.5rem]' : 'gap-y-10'
                }`}
              >
                {slide.data.map((item: any, idx: number) => (
                  <motion.button
                    key={idx}
                    type="button"
                    variants={itemVariants}
                    className="relative flex items-center gap-7 group text-left"
                    onMouseEnter={() => item.tooltip && setOpenTooltipId(`${slide.id}-item-${idx}`)}
                    onMouseLeave={() => setOpenTooltipId((current) => (current === `${slide.id}-item-${idx}` ? null : current))}
                    onFocus={() => item.tooltip && setOpenTooltipId(`${slide.id}-item-${idx}`)}
                    onBlur={() => setOpenTooltipId((current) => (current === `${slide.id}-item-${idx}` ? null : current))}
                    onClick={() =>
                      item.tooltip &&
                      setOpenTooltipId((current) => (current === `${slide.id}-item-${idx}` ? null : `${slide.id}-item-${idx}`))
                    }
                    aria-expanded={openTooltipId === `${slide.id}-item-${idx}`}
                  >
                    <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all group-hover:scale-110 shrink-0">
                      <DynamicIcon
                        name={item.icon || 'Plus'}
                        className="w-7 h-7 text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-black transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-display font-medium text-brand dark:text-white group-hover:text-accent transition-colors tracking-tightest">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">{item.info}</p>
                    </div>
                    {renderTooltipCard(`${slide.id}-item-${idx}`, item.name, item.tooltip)}
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {hasImage && (
            <motion.div
              variants={itemVariants}
              className="hidden lg:block relative w-full rounded-3xl md:rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <img
                src={resolveAssetPath(slide.data.image)}
                alt="Section visual"
                className="block w-full h-auto object-contain transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          )}
        </div>
      </div>
    );
  };

  const renderGrid = () => (
    <div className="flex flex-col h-full justify-center">
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-6xl font-display font-medium mb-16 tracking-tightest leading-none text-brand dark:text-white"
      >
        {slide.title}
      </motion.h2>
      {slide.id === 'slide-what' ? (
        <div className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {slide.data.slice(0, 3).map((item: any, idx: number) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-10 glass-card rounded-[2.5rem] bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                <div className="w-16 h-16 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <DynamicIcon name={item.icon} className="w-10 h-10 text-accent" />
                </div>
                <div className="h-1 w-8 bg-accent/30 mb-8 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                <h3 className="text-2xl md:text-4xl font-display font-medium mb-4 group-hover:text-accent transition-colors leading-tight text-brand dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base mt-auto">{item.details}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {slide.data.slice(3, 6).map((item: any, idx: number) => (
              <motion.div
                key={`tail-${idx}`}
                variants={itemVariants}
                className="p-10 glass-card rounded-[2.5rem] bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                <div className="w-16 h-16 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <DynamicIcon name={item.icon} className="w-10 h-10 text-accent" />
                </div>
                <div className="h-1 w-8 bg-accent/30 mb-8 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                <h3 className="text-2xl md:text-4xl font-display font-medium mb-4 group-hover:text-accent transition-colors leading-tight text-brand dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base mt-auto">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {slide.data.map((item: any, idx: number) => {
            const isWide = slide.data.length === 5 && idx >= slide.data.length - 2;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-10 glass-card rounded-[2.5rem] bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col ${
                  isWide ? 'xl:col-span-2' : ''
                }`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                <div className="w-16 h-16 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <DynamicIcon name={item.icon} className="w-10 h-10 text-accent" />
                </div>
                <div className="h-1 w-8 bg-accent/30 mb-8 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                <h3 className="text-2xl md:text-4xl font-display font-medium mb-4 group-hover:text-accent transition-colors leading-tight text-brand dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base mt-auto">{item.details}</p>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );

  const renderClients = () => (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 gap-8">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-6xl font-display font-medium tracking-tightest leading-none text-brand dark:text-white"
        >
          {slide.title}
        </motion.h2>
        <motion.div variants={itemVariants} className="max-w-md text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400">
          {slide.description}
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {slide.points?.map((client: any, idx: number) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col gap-6 p-8 glass-card rounded-3xl group relative overflow-hidden h-full transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full blur-2xl group-hover:bg-accent/10 transition-colors" />
            <span className="text-[10px] font-mono font-bold text-gray-300 dark:text-gray-600 group-hover:text-accent transition-colors block tracking-widest whitespace-nowrap">
              CLIENT // 0{idx + 1}
            </span>
            <div className="h-px bg-gray-100 dark:bg-white/10 w-8 group-hover:w-full group-hover:bg-accent transition-all duration-700" />
            <span className="text-lg md:text-xl font-display text-gray-400 dark:text-gray-500 group-hover:text-brand dark:group-hover:text-white transition-colors cursor-default leading-tight">
              {client}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCases = () => {
    const caseMap = new Map(slide.data.filter((item: any) => item.client !== 'Catalon').map((item: any) => [item.client, item]));
    const rowKeys = [
      ['ФНС / Мой налог', 'Яндекс Support AI'],
      ['Döcke (DSC)', 'STOLKOM', 'SIMB-AD'],
      ['BusinessFOX', 'ProNetwork', 'Нижегородский водоканал'],
    ];
    const rows = rowKeys
      .map((row) => row.map((key) => caseMap.get(key)).filter(Boolean))
      .filter((row) => row.length > 0);

    return (
      <>
        <div className="flex flex-col h-full justify-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-6xl font-display font-medium mb-16 md:mb-24 tracking-tightest leading-none"
          >
            {slide.title}
          </motion.h2>
          <div className="space-y-16 md:space-y-24">
            {rows.map((row, rowIdx) => {
              const colClass =
                row.length === 1 ? 'md:grid-cols-1 max-w-5xl mx-auto' : row.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
              const isBigRow = row.length === 1;

              return (
                <div key={rowIdx} className={`grid grid-cols-1 ${colClass} gap-x-12 gap-y-16`}>
                  {row.map((item: any) => {
                    const preview = buildCasePreview(item);

                    return (
                      <motion.div
                        key={item.client}
                        variants={itemVariants}
                        className="group flex flex-col cursor-pointer rounded-[2rem] border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-8 hover:-translate-y-1 transition-all duration-500"
                        onClick={() => setSelectedCase(item)}
                        role="button"
                        aria-label={`Открыть кейс: ${item.client}`}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedCase(item)}
                      >
                        {item.image && (
                          <div className="aspect-[4/3] mb-8 rounded-2xl md:rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-gray-50 dark:bg-white/5 flex items-center justify-center">
                            <img
                              src={resolveAssetPath(item.image)}
                              alt={item.client}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        )}

                        <div className="space-y-5">
                          <div className={`flex items-center gap-4 ${isBigRow ? 'justify-center' : ''}`}>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Клиент</span>
                            <div className="h-px bg-accent/20 dark:bg-accent/40 flex-grow max-w-[100px]" />
                          </div>

                          <h3
                            className={`font-display font-medium leading-tight text-brand dark:text-white transition-colors group-hover:text-accent ${
                              isBigRow ? 'text-2xl md:text-4xl text-center' : 'text-xl md:text-2xl'
                            }`}
                          >
                              {item.shortLabel || (item.client === 'Нижегородский водоканал' ? 'Водоканал' : item.client)}
                            </h3>

                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-2">Проблема</p>
                            <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">{preview.problem}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-2">Что сделали</p>
                            <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">{preview.solution}</p>
                          </div>
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-2">Результат</p>
                            <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">{preview.result}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <Suspense fallback={null}>
          <CaseModal isOpen={!!selectedCase} onClose={() => setSelectedCase(null)} caseData={selectedCase} />
        </Suspense>
      </>
    );
  };

  const renderManifest = () => (
    <div className="flex flex-col h-full justify-center">
      <motion.div variants={itemVariants} className="max-w-none">
        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-12 block">Why us</span>
        <h2 className="text-3xl md:text-6xl font-display font-medium leading-[0.95] tracking-tightest text-brand dark:text-white mb-20">
          {slide.title}
        </h2>

        {slide.data?.founders && (
          <div className="mt-16 pt-10 md:pt-12 border-t border-gray-100 dark:border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">Founder-led in practice</p>
                <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tightest text-brand dark:text-white">
                  Стратегия, продукт, дизайн и технология в одном живом контуре
                </h3>
                {slide.data?.footer && (
                  <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
                    {slide.data.footer}
                  </p>
                )}
              </div>

              <div className="space-y-10">
                {slide.data.founders.map((member: any, idx: number) => (
                  <motion.div key={idx} variants={itemVariants} className="relative pl-8 group">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-100 dark:bg-white/10 group-hover:bg-accent transition-colors" />
                    <h4 className="text-3xl md:text-4xl font-display font-medium text-brand dark:text-white mb-4 leading-tight group-hover:translate-x-2 transition-transform tracking-tightest">
                      {member.name}
                    </h4>
                    <ExpandableBio role={member.role} bio={member.bio} />
                  </motion.div>
                ))}
              </div>
            </div>

            {slide.data.image && (
              <motion.div
                variants={itemVariants}
                className="relative aspect-square md:aspect-[4/5] rounded-3xl md:rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1.5s]"
              >
                <img
                  src={resolveAssetPath(slide.data.image)}
                  alt="Founders"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand/5" />
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );

  const renderProducts = () => {
    const productEntries = ['catalon', 'smm', 'future', 'aiSystems']
      .map((key) => slide.data?.[key])
      .filter(Boolean) as any[];
    const products: ModalCaseData[] = productEntries.map((product: any) => ({
      client: product.name,
      task: product.info,
      image: product.image,
      fullContent: product.fullContent,
    }));

    return (
      <>
        <div className="flex flex-col h-full justify-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-6xl font-display font-medium mb-16 md:mb-24 tracking-tightest leading-none"
          >
            {slide.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {products.map((product, idx) => {
              const iconName = productEntries[idx]?.icon;

              return (
                <motion.div
                  key={product.client}
                  variants={itemVariants}
                  className="group cursor-pointer rounded-[2.5rem] border border-gray-100 dark:border-white/12 bg-white/80 dark:bg-[#0F1116] p-6 md:p-8"
                  onClick={() => setSelectedCase(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedCase(product)}
                >
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-[#151922] mb-8 grayscale hover:grayscale-0 transition-all duration-700 border border-transparent dark:border-white/8">
                    <img
                      src={resolveAssetPath(product.image)}
                      alt={product.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-brand/10 rounded-xl">
                        <DynamicIcon name={iconName} className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-2xl md:text-4xl font-display font-medium text-brand tracking-tightest">{product.client}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg leading-relaxed">{product.task}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <Suspense fallback={null}>
          <CaseModal isOpen={!!selectedCase} onClose={() => setSelectedCase(null)} caseData={selectedCase} />
        </Suspense>
      </>
    );
  };

  const renderCta = () => (
    <div className="flex flex-col h-full justify-center">
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-6xl font-display font-medium mb-16 tracking-tightest leading-[0.9]"
      >
        {slide.title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        <div className="space-y-10">
          <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-display text-brand dark:text-white leading-snug max-w-md">
            {slide.description}
          </motion.p>
          {slide.footer && (
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              {slide.footer}
            </motion.p>
          )}
          <motion.button
            variants={itemVariants}
            onClick={() => document.getElementById(slide.data?.primaryCta?.targetId || 'slide-13')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-brand dark:bg-white text-white dark:text-black rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all shadow-xl hover:shadow-accent/20 active:scale-95"
          >
            {slide.data?.primaryCta?.label}
          </motion.button>
        </div>
        <div className="space-y-4">
          {slide.data?.contacts?.map((contact: any, idx: number) => (
            <motion.a
              key={idx}
              href={contact.value}
              variants={itemVariants}
            className="flex items-center justify-between p-8 bg-brand dark:bg-white text-white dark:text-black rounded-3xl hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all w-full group"
            >
              <span className="text-xl font-medium tracking-tight">{contact.label}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (slide.type) {
      case 'hero':
        return renderHero();
      case 'list':
        return renderList();
      case 'grid':
        return renderGrid();
      case 'clients':
        return renderClients();
      case 'cases':
        return renderCases();
      case 'manifest':
        return renderManifest();
      case 'products':
        return renderProducts();
      case 'cta':
        return renderCta();
      default:
        return null;
    }
  };

  return (
    <motion.section
      id={slide.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className={`relative snap-start px-8 md:px-12 lg:px-20 flex flex-col overflow-visible ${
        slide.id === 'slide-1'
          ? 'min-h-screen pt-[200px] pb-16 md:pb-20'
          : slide.id === 'slide-13'
            ? 'slide-height pt-6 pb-3 md:pt-6 md:pb-3'
            : slide.id === 'slide-problems'
              ? 'slide-height pt-20 pb-12 md:pt-24 md:pb-16'
              : 'slide-height py-20 md:py-24'
      }`}
      style={
        slide.id === 'slide-problems'
          ? { backgroundColor: '#FEFDFD' }
          : slide.id === 'slide-12'
            ? { backgroundColor: '#FDFCFE' }
            : slide.id === 'slide-8'
              ? { backgroundColor: '#FDFDFD' }
              : undefined
      }
    >
      <div className="flex-grow container-wide text-brand dark:text-white">{renderContent()}</div>
    </motion.section>
  );
};
