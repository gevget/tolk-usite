import React, { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { SlideContent } from '../types';

const CaseModal = lazy(() => import('./CaseModal').then(m => ({ default: m.CaseModal })));
import { 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  MessageSquareText, 
  Users, 
  Rocket, 
  AlertCircle, 
  HandMetal, 
  FileQuestion, 
  UserMinus, 
  Clock, 
  Shuffle,
  Globe,
  Bot,
  Database,
  LayoutDashboard,
  Search,
  Plus,
  CheckCircle2,
  FileText,
  Layers,
  ShieldCheck,
  LineChart,
  Sparkles,
  Cpu,
  Lock,
  FileJson,
  Palette,
  Code,
  Calculator,
  MousePointerClick,
  MessageCircle,
  FileSpreadsheet,
  Settings2,
  RefreshCcw,
  UserPlus,
  Headset,
  Truck,
  GraduationCap,
  Share2,
  Eye,
  Target,
  Coins,
  Settings,
  BarChart3,
  Lightbulb,
  Compass,
  User,
  Gem,
  Flag,
  Image,
  BookOpen,
  Megaphone,
  Type,
  Brush,
  Layout,
  Route,
  PenTool,
  Play,
  Box,
  Library,
  Network,
  Maximize,
  MousePointer,
  Monitor,
  Server,
  FastForward,
  Link,
  Accessibility,
  Bug,
  Activity,
  Cloud,
  LifeBuoy,
  PieChart,
  Split,
  FileImage,
  History,
  Maximize2,
  Brain,
  ShieldAlert,
  UserX,
  FileWarning,
  ZapOff,
  Mail,
  FileX,
  EyeOff,
  CheckSquare,
  Wallet,
  MessageSquareOff,
  Send,
  RefreshCw,
  AlertTriangle,
  PackageX,
  XCircle,
  Minimize2,
  Smartphone,
  MessageCircleOff,
  Link2Off,
  Shield,
  PhoneOff,
  UserCheck,
  UserCog,
  ShoppingCart,
  BarChart,
  Calendar,
  DollarSign,
  List
} from 'lucide-react';

const IconMap: Record<string, any> = {
  TrendingUp, Zap, MessageSquareText, Users, Rocket,
  AlertCircle, HandMetal, FileQuestion, UserMinus, Clock, Shuffle,
  Globe, Bot, Database, LayoutDashboard, Search, Plus,
  CheckCircle2, FileText, Layers, ShieldCheck, LineChart, Sparkles,
  Cpu, Lock, FileJson, Palette, Code,
  Calculator, MousePointerClick, MessageCircle, FileSpreadsheet,
  Settings2, RefreshCcw, UserPlus, Headset,
  Truck, GraduationCap, Share2,
  Eye, Target, Coins, Settings,
  BarChart3, Lightbulb, Compass, User, Gem, Flag,
  Image, BookOpen, Megaphone, Type, Brush,
  Layout, Route, PenTool, Play, Box, Library,
  Network, Maximize, MousePointer, Monitor, Server,
  FastForward, Link, Accessibility, Bug, Activity,
  Cloud, LifeBuoy, PieChart, Split, FileImage,
  History, Maximize2, Brain,
  ShieldAlert, UserX, FileWarning, ZapOff, Mail, FileX, EyeOff, CheckSquare, Wallet,
  MessageSquareOff, Send, RefreshCw, AlertTriangle, PackageX, XCircle, Minimize2,
  Smartphone, MessageCircleOff, Link2Off, Shield, PhoneOff, UserCheck,
  UserCog, ShoppingCart, BarChart, Calendar, DollarSign, List
};

export const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = IconMap[name];
  if (!IconComponent) return <Check className={className} />;
  return <IconComponent className={className} />;
};

const ExpandableBio = ({ role, bio }: { role: string; bio?: string }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <div className="space-y-4">
      <p className="text-xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
        {role}
      </p>
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

const ActivityItem = ({ activity, idx, itemVariants }: { activity: any, idx: number, itemVariants: any, key?: React.Key }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div 
      variants={itemVariants}
      className={`border border-gray-100 dark:border-white/5 rounded-[2rem] p-6 mb-6 transition-all duration-500 overflow-hidden ${isOpen ? 'glass-card' : 'hover:bg-gray-50 dark:hover:bg-white/5'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group/btn"
      >
        <div className="flex items-center gap-6">
          <div className={`w-12 h-12 flex items-center justify-center transition-all ${isOpen ? 'text-accent' : 'text-gray-400 group-hover/btn:text-accent'}`}>
            <DynamicIcon name={activity.icon} className="w-8 h-8" />
          </div>
          <h3 className={`text-[22px] font-display font-medium transition-colors ${isOpen ? 'text-brand dark:text-white' : 'text-gray-800 dark:text-gray-200 group-hover/btn:text-accent'}`}>
            {activity.title}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center transition-all ${isOpen ? 'rotate-180 bg-accent border-accent text-white' : 'group-hover/btn:border-accent group-hover/btn:text-accent'}`}>
           {isOpen ? <span className="text-lg leading-none">-</span> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pt-8 pb-4 grid grid-cols-1 gap-4">
          {activity.points.map((point: any, pIdx: number) => (
            <div key={pIdx} className="flex items-start gap-4 group/point hover:translate-x-1 transition-transform">
              <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover/point:bg-accent/10 transition-colors mt-0.5 shrink-0">
                <DynamicIcon name={point.icon} className="w-4 h-4 text-gray-400 group-hover/point:text-accent transition-colors" />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-white transition-colors cursor-default leading-relaxed pt-1.5">
                {point.text}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const SlideRenderer: React.FC<{ slide: SlideContent }> = ({ slide }) => {
  const [selectedCase, setSelectedCase] = React.useState<any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100
      }
    }
  };

  const renderContent = () => {
    switch (slide.type) {
      case 'hero':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 h-full items-center">
            <div className="flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full mb-8">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-300">Strategy × Digital × Design</span>
                </div>
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-display font-medium leading-[0.9] mb-8 tracking-tightest text-brand dark:text-white"
                  style={slide.customStyles?.title}
                >
                  {slide.title}
                </motion.h1>
              </motion.div>
              <motion.div variants={itemVariants} className="max-w-xl">
                <div 
                  className="text-xl md:text-2xl font-display text-gray-400 dark:text-gray-500 mb-8 lowercase tracking-tight"
                  style={{
                    ...slide.customStyles?.subtitle,
                    fontSize: undefined // Mobile first scaling
                  }}
                >
                  <span className="md:hidden text-2xl font-display leading-tight block mb-2">{slide.subtitle}</span>
                  <span className="hidden md:inline" style={slide.customStyles?.subtitle}>{slide.subtitle}</span>
                </div>
                <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 font-normal">
                  {slide.description}
                </p>
                <motion.div 
                  variants={itemVariants}
                  className="mt-12 flex flex-wrap gap-4"
                >
                  <button 
                    onClick={() => document.getElementById('slide-manifest')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="px-8 py-4 bg-brand dark:bg-white text-white dark:text-black rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all shadow-xl hover:shadow-accent/20 active:scale-95"
                    aria-label="Перейти к манифесту"
                  >
                    Наш манифест
                  </button>
                  <button 
                    onClick={() => document.getElementById('slide-11')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="px-8 py-4 glass-card rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:scale-95"
                    aria-label="Смотреть кейсы"
                  >
                    Смотреть кейсы
                  </button>
                </motion.div>
              </motion.div>
            </div>
            {slide.data?.image && (
              <motion.div 
                variants={itemVariants}
                className="relative w-full rounded-3xl md:rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group"
              >
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <img 
                  src={slide.data.image} 
                  alt="Hero" 
                  className="block w-full h-auto object-contain transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-8 bottom-8 p-8 glass-card rounded-3xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hidden lg:block">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Exclusive Insight</p>
                      <h4 className="text-xl font-display font-medium text-brand dark:text-white uppercase">Think × Scale</h4>
                    </div>
                    <Rocket className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        );

      case 'dual':
        return (
          <div className="flex flex-col h-full justify-center">
            <motion.h2 
              variants={itemVariants} 
              className="text-2xl font-display font-bold uppercase tracking-[0.2em] text-accent mb-20"
              style={slide.customStyles?.title}
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start mb-32">
              <motion.div variants={itemVariants} className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-gray-50 dark:bg-white/5 rounded-2xl">
                    <DynamicIcon name={slide.data.tolk.icon} className="w-10 h-10 text-brand dark:text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 block mb-1">Product & Creative</span>
                    <h3 className="text-4xl md:text-6xl font-display font-medium leading-none tracking-tightest text-brand dark:text-white">{slide.data.tolk.name}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {slide.data.tolk.tags.map((tag: string) => (
                    <span key={tag} className="px-5 py-2.5 border border-gray-100 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:border-brand dark:hover:border-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-gray-50 dark:bg-white/5 rounded-2xl">
                    <DynamicIcon name={slide.data.usite.icon} className="w-10 h-10 text-brand dark:text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 block mb-1">Engineering & Systems</span>
                    <h3 className="text-4xl md:text-6xl font-display font-medium leading-none tracking-tightest text-brand dark:text-white">{slide.data.usite.name}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {slide.data.usite.tags.map((tag: string) => (
                    <span key={tag} className="px-5 py-2.5 border border-gray-100 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:border-brand dark:hover:border-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="pt-12 md:pt-24 border-t border-gray-100 dark:border-white/10">
               <p className="text-3xl md:text-6xl font-display font-medium leading-[0.85] max-w-7xl tracking-tightest text-brand dark:text-white">
                {slide.data.together}
               </p>
            </motion.div>
          </div>
        );

      case 'list':
        return (
          <div className="flex flex-col h-full justify-center">
            <div className={`grid grid-cols-1 ${slide.data?.image ? 'lg:grid-cols-2' : ''} gap-24 items-center`}>
              <div className="w-full">
                <motion.h2 
                  variants={itemVariants} 
                  className="text-3xl md:text-6xl font-display font-medium mb-16 md:mb-32 tracking-tightest leading-[0.85]"
                  style={slide.customStyles?.title}
                >
                  {slide.title}
                </motion.h2>
                {slide.subtitle && (
                  <motion.p 
                    variants={itemVariants} 
                    className={`${slide.id === 'slide-3' ? 'text-[24px]' : 'text-xl md:text-3xl'} text-gray-400 mb-20 md:mb-32 max-w-5xl leading-relaxed`}
                    style={slide.customStyles?.subtitle}
                  >
                    {slide.subtitle}
                  </motion.p>
                )}
                <div className={`w-full ${!slide.data?.image ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16' : 'grid grid-cols-1 gap-y-10 max-w-2xl'}`}>
                  {slide.points ? (
                    slide.points.map((point: any, idx: number) => (
                      <motion.div key={idx} variants={itemVariants} className="flex items-center gap-6 group">
                        <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all group-hover:scale-110 shrink-0">
                          <DynamicIcon name={point.icon} className="w-6 h-6 text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-black transition-colors" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-gray-300 dark:text-gray-700 font-mono text-[8px] tracking-[0.2em] uppercase block mb-1">Point // 0{idx + 1}</span>
                          <h4 className="text-lg md:text-xl font-display font-medium leading-tight text-gray-800 dark:text-gray-200 group-hover:text-brand dark:group-hover:text-white transition-colors">— {point.text}</h4>
                        </div>
                      </motion.div>
                    ))
                  ) : slide.data && Array.isArray(slide.data) ? (
                    slide.data.map((item: any, idx: number) => (
                      <motion.div key={idx} variants={itemVariants} className="flex items-center gap-7 group">
                         <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all group-hover:scale-110 shrink-0">
                          <DynamicIcon name={item.icon || 'Plus'} className="w-7 h-7 text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-black transition-colors" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xl md:text-2xl font-display font-medium text-brand dark:text-white group-hover:text-accent transition-colors tracking-tightest">{item.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">{item.info}</p>
                        </div>
                      </motion.div>
                    ))
                  ) : null}
                </div>
              </div>
              {slide.data?.image && (
                <motion.div 
                  variants={itemVariants}
                  className="hidden lg:block relative w-full rounded-3xl md:rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
                >
                  <img 
                    src={slide.data.image} 
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

      case 'grid':
        return (
          <div className="flex flex-col h-full justify-center">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-6xl font-display font-medium mb-16 tracking-tightest leading-none text-brand dark:text-white"
              style={slide.customStyles?.title}
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {slide.data.map((item: any, idx: number) => {
                const isLarge = idx === 0 || idx === 3;
                const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1";
                
                return (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className={`p-10 glass-card rounded-[2.5rem] bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col ${colSpan}`}
                  >
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                    
                    <div className="w-16 h-16 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <DynamicIcon name={item.icon} className="w-10 h-10 text-accent" />
                    </div>
                    <div className="h-1 w-8 bg-accent/30 mb-8 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                    <h3 className="text-2xl md:text-4xl font-display font-medium mb-4 group-hover:text-accent transition-colors leading-tight text-brand dark:text-white">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] mt-auto">{item.details}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 h-full items-center">
            <div className="flex flex-col justify-center">
              <motion.h2 
                variants={itemVariants} 
                className="text-xl font-display font-bold uppercase tracking-[0.2em] text-accent mb-12"
                style={slide.customStyles?.title}
              >
                {slide.title}
              </motion.h2>
            <div className="space-y-16">
                {slide.data.map((member: any, idx: number) => (
                   <motion.div key={idx} variants={itemVariants} className="relative pl-12 group">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-100 dark:bg-white/10 group-hover:bg-accent transition-colors" />
                    <h3 className="text-4xl md:text-5xl font-display font-medium text-brand dark:text-white mb-4 leading-tight group-hover:translate-x-2 transition-transform tracking-tightest">
                      {member.name}
                    </h3>
                    <ExpandableBio role={member.role} bio={member.bio} />
                  </motion.div>
                ))}
              </div>
            </div>
            {slide.image && (
               <motion.div 
                variants={itemVariants}
                className="relative aspect-square md:aspect-[4/5] rounded-3xl md:rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1.5s]"
              >
                <img 
                  src={slide.image} 
                  alt="Team background" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand/5" />
              </motion.div>
            )}
          </div>
        );

      case 'clients':
        return (
          <div className="flex flex-col h-full justify-center">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 gap-8">
              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-6xl font-display font-medium tracking-tightest leading-none text-brand dark:text-white"
                style={slide.customStyles?.title}
              >
                {slide.title}
              </motion.h2>
              <motion.div variants={itemVariants} className="max-w-xs text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                Работали с государственным сектором, крупным ритейлом и лидерами EdTech
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

      case 'cases':
        return (
          <>
            <div className="flex flex-col h-full justify-center">
              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-6xl font-display font-medium mb-16 md:mb-24 tracking-tightest leading-none"
                style={slide.customStyles?.title}
              >
                {slide.title}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-x-12 gap-y-16 md:gap-y-24">
                {slide.data.map((item: any, idx: number) => {
                  let colSpan = "md:col-span-2"; // default for 3 in a row
                  if (idx === 0 || idx === 6) colSpan = "md:col-span-6 text-center max-w-5xl mx-auto w-full"; // 1 in a row
                  if (idx === 1 || idx === 2 || idx === 7 || idx === 8) colSpan = "md:col-span-3"; // 2 in a row
                  
                  const isBig = idx === 0 || idx === 6;
                  
                  return (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants} 
                      className={`group flex flex-col cursor-pointer ${colSpan}`}
                      onClick={() => setSelectedCase(item)}
                      role="button"
                      aria-label={`Открыть кейс: ${item.client}`}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setSelectedCase(item)}
                    >
                      {item.image && (
                        <div className="aspect-[4/3] mb-8 rounded-2xl md:rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-gray-50 dark:bg-white/5 flex items-center justify-center">
                          <img 
                            src={item.image} 
                            alt={item.client} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                      <div className={`flex items-center gap-4 mb-6 ${isBig ? 'justify-center' : ''}`}>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{item.client}</span>
                        <div className="h-px bg-accent/20 dark:bg-accent/40 flex-grow max-w-[100px]" />
                        {item.fullContent && (
                          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Подробнее →</span>
                        )}
                      </div>
                      <p className={`font-display font-medium leading-tight text-brand dark:text-white transition-colors group-hover:text-accent ${isBig ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>
                        {item.task}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <Suspense fallback={null}>
              <CaseModal 
                isOpen={!!selectedCase} 
                onClose={() => setSelectedCase(null)} 
                caseData={selectedCase} 
              />
            </Suspense>
          </>
        );

      case 'cta':
        return (
          <div className="flex flex-col h-full justify-center">
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-display font-medium mb-16 tracking-tightest leading-[0.9]"
              style={slide.customStyles?.title}
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="space-y-16">
                <div className="space-y-8">
                  {slide.points?.map((point, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="flex items-center gap-6 text-xl">
                      <span className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-sm font-bold text-gray-400 dark:text-gray-600">0{idx + 1}</span>
                      <span className="text-gray-600 dark:text-gray-300 font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-display text-brand dark:text-white leading-snug max-w-md">
                  {slide.description}
                </motion.p>
              </div>
              <div className="space-y-4">
                {slide.data.contacts.map((contact: any, idx: number) => (
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

      case 'manifest':
        return (
          <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="max-w-7xl">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-12 block">
                02 // Manifesto
              </span>
              <h2 
                className="text-3xl md:text-6xl font-display font-medium leading-[0.95] tracking-tightest text-brand dark:text-white mb-20"
                style={slide.customStyles?.title}
              >
                {slide.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {slide.points?.map((point: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="p-10 glass-card rounded-[3rem] border-transparent hover:border-accent/20 transition-all duration-500 group bg-gray-50/50 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <DynamicIcon name={point.icon} className="w-8 h-8 text-accent" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono font-bold text-accent/40 group-hover:text-accent transition-colors">PRINCIPLE 0{idx + 1}</span>
                        <h3 className={`text-[20px] font-display ${idx === 1 ? 'font-normal' : 'font-medium'} text-brand dark:text-white group-hover:text-accent transition-colors leading-tight`}>
                          {point.text}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case 'activities':
        return (
          <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="max-w-7xl">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent block mb-12">
                {slide.subtitle}
              </span>
              <h2 className="text-3xl md:text-6xl font-display font-medium leading-[1.1] tracking-tightest text-brand dark:text-white mb-16">
                {slide.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
                {slide.data.map((activity: any, idx: number) => (
                  <ActivityItem key={idx} activity={activity} idx={idx} itemVariants={itemVariants} />
                ))}
              </div>
            </motion.div>
          </div>
        );

      case 'products':
        return (
          <div className="flex flex-col h-full justify-center">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-6xl font-display font-medium mb-16 md:mb-24 tracking-tightest leading-none"
              style={slide.customStyles?.title}
            >
              {slide.title}
            </motion.h2>
            
            <div className="space-y-24 md:space-y-32">
              {/* Row 1: Catalon + Future */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 md:gap-y-32">
                <motion.div variants={itemVariants} className="group">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden bg-gray-50 dark:bg-white/5 mb-10 grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={slide.data.catalon.image} 
                      alt={slide.data.catalon.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-brand/10 rounded-xl">
                        <DynamicIcon name={slide.data.catalon.icon} className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-display font-medium text-brand tracking-tightest">{slide.data.catalon.name}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                      {slide.data.catalon.info}
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="group">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden bg-gray-50 dark:bg-white/5 mb-10 grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={slide.data.future.image} 
                      alt={slide.data.future.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-brand/10 rounded-xl">
                        <DynamicIcon name={slide.data.future.icon} className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-display font-medium text-brand tracking-tightest">{slide.data.future.name}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                      {slide.data.future.info}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Row 2: SMM Full Width */}
              <motion.div variants={itemVariants} className="pt-16 md:pt-24 border-t border-gray-100 dark:border-white/10 group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                  <div className="aspect-[4/3] rounded-3xl md:rounded-[3rem] overflow-hidden bg-gray-50 dark:bg-white/5 mb-0 grayscale hover:grayscale-0 transition-all duration-700 order-2 md:order-1">
                    <img 
                      src={slide.data.smm.image} 
                      alt={slide.data.smm.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-8 order-1 md:order-2">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <DynamicIcon name={slide.data.smm.icon} className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-3xl md:text-6xl font-display font-medium text-accent tracking-tightest">{slide.data.smm.name}</h3>
                    </div>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-500 dark:text-gray-400">
                      {slide.data.smm.info}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );

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
      className="slide-height relative snap-start px-8 py-24 md:px-12 lg:px-20 md:py-40 flex flex-col overflow-hidden"
      style={
        slide.id === 'slide-4'
          ? { backgroundColor: '#FEFDFD' }
          : slide.id === 'slide-7'
            ? { backgroundColor: '#FDFCFE' }
            : slide.id === 'slide-8'
              ? { backgroundColor: '#FDFDFD' }
            : undefined
      }
    >
      <div className="flex-grow container-wide text-brand dark:text-white">
        {renderContent()}
      </div>
      
      {slide.footer && (
        <motion.footer 
          variants={itemVariants}
          className="mt-24 pt-12 border-t border-gray-100 dark:border-white/10 flex justify-between items-end container-wide"
        >
          <div 
            className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-gray-400 dark:text-gray-600 line-clamp-3 md:line-clamp-none overflow-hidden"
            style={{
              ...slide.customStyles?.footer,
              fontSize: undefined, // Let CSS handle mobile font scaling
            }}
          >
            <span className="md:hidden text-[16px] leading-tight normal-case tracking-normal block mb-4">
              {slide.footer}
            </span>
            <span className="hidden md:inline" style={slide.customStyles?.footer}>
              {slide.footer}
            </span>
          </div>
          <div className="text-[9px] text-gray-300 dark:text-gray-700 font-mono tracking-widest uppercase">
            SECTION / 0{slide.id.split('-')[1]} / PART. 2026.V1
          </div>
        </motion.footer>
      )}
    </motion.section>
  );
};
