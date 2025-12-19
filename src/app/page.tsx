'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, FileSearch, Package, Bell, Award, Newspaper, 
  LogOut, User, TrendingUp, Calendar, Clock, ArrowRight, 
  Sparkles, Target, Zap, CheckCircle2, AlertCircle, 
  ChevronRight, Search, LayoutDashboard, Settings,
  BarChart3, ShieldCheck, ZapIcon, Globe, Layers,
  Cpu, Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const email = localStorage.getItem('userEmail');
    
    if (!role) {
      router.push('/login');
    } else {
      setUserRole(role);
      setUserEmail(email);
      setTimeout(() => setIsLoaded(true), 500);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  const mainFeatures = [
    {
      title: 'Neural Exam Prep',
      description: 'AI-driven personalized study trajectories for peak performance.',
      icon: BookOpen,
      href: '/exam-prep',
      size: 'col-span-1 md:col-span-2 row-span-2',
      badge: 'Advanced AI',
      glow: 'from-indigo-500/20',
    },
    {
      title: 'Global Scholar',
      description: 'Discover untapped scholarships and academic pathways.',
      icon: FileSearch,
      href: '/documents',
      size: 'col-span-1 row-span-1',
      glow: 'from-emerald-500/20',
    },
    {
      title: 'Item Protocol',
      description: 'Blockchain-backed lost item recovery and verification.',
      icon: Package,
      href: '/lost-found',
      size: 'col-span-1 row-span-1',
      glow: 'from-orange-500/20',
    },
    {
      title: 'Status Rewards',
      description: 'Convert academic success into premium ecosystem tokens.',
      icon: Award,
      href: '/rewards',
      size: 'col-span-1 row-span-2',
      glow: 'from-purple-500/20',
    },
    {
      title: 'Alert Core',
      description: 'High-priority real-time academic event monitoring.',
      icon: Bell,
      href: '/notifications',
      size: 'col-span-1 row-span-1',
      glow: 'from-rose-500/20',
    },
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center"
        >
          <Sparkles className="w-8 h-8 text-indigo-500" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden relative font-sans">
      <div className="mesh-gradient absolute inset-0 z-0 opacity-40" />
      <div className="grain" />
      
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 h-screen w-24 hidden lg:flex flex-col items-center py-10 bg-slate-950/50 border-r border-slate-800/50 backdrop-blur-3xl z-50">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center mb-16 shadow-2xl shadow-indigo-500/40 relative group cursor-pointer"
        >
          <Sparkles className="w-7 h-7 text-white" />
          <div className="absolute inset-0 rounded-2xl bg-indigo-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
        </motion.div>
        
        <nav className="flex flex-col gap-10 flex-1">
          {[
            { icon: LayoutDashboard, active: true },
            { icon: Layers },
            { icon: Globe },
            { icon: Cpu },
            { icon: Settings }
          ].map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ x: 5 }}
              className={`p-4 rounded-2xl transition-all relative group ${
                item.active ? 'bg-indigo-500/10 text-indigo-400 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <item.icon className="w-6 h-6" />
              {item.active && (
                <motion.div layoutId="active" className="absolute left-[-2px] top-1/4 bottom-1/4 w-1 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]" />
              )}
            </motion.button>
          ))}
        </nav>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={handleLogout} 
          className="p-4 rounded-2xl text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-all mb-4"
        >
          <LogOut className="w-6 h-6" />
        </motion.button>
      </aside>

      <main className="relative z-10 lg:ml-24 min-h-screen p-6 md:p-10 lg:p-12 max-w-[1600px] mx-auto">
        {/* Navigation Bar */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <span className="glass-pill text-indigo-400 border-indigo-500/20">
                <Activity className="w-3 h-3 inline mr-2" />
                Network Stable
              </span>
              <span className="glass-pill border-emerald-500/20 text-emerald-400">v2.4.0</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl font-black tracking-tighter text-white flex items-center gap-4"
            >
              Terminal
              <div className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_15px_rgba(99,102,241,1)]" />
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg font-medium tracking-tight"
            >
              System ready. Welcome, <span className="text-white font-black">{userEmail?.split('@')[0]}</span>
            </motion.p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group hidden xl:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-slate-900/40 border border-slate-800/50 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all w-80 backdrop-blur-3xl"
              />
            </div>
            
            <motion.div 
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 p-2 pr-6 bg-slate-900/40 border border-slate-800/50 rounded-2xl backdrop-blur-3xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-black text-white shadow-2xl shadow-indigo-500/20 border border-white/10">
                {userEmail?.[0].toUpperCase()}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-black text-white leading-none mb-1.5">{userEmail}</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">{userRole} ACCESS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bento Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
            {mainFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -8 }}
                  className={`${feature.size} bento-card group`}
                >
                  <Link href={feature.href} className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-slate-950/50 border border-slate-800/50 flex items-center justify-center group-hover:border-indigo-500/50 transition-all duration-500 shadow-2xl">
                        <Icon className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      {feature.badge && (
                        <span className="glass-pill text-emerald-400 border-emerald-500/20">{feature.badge}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
                      <p className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors leading-relaxed line-clamp-2">{feature.description}</p>
                    </div>
                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                        <ArrowRight className="w-5 h-5 text-indigo-400" />
                      </div>
                    </div>
                  </Link>
                  {/* Internal Glow */}
                  <div className={`absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br ${feature.glow} blur-[100px] group-hover:blur-[80px] transition-all duration-700`} />
                </motion.div>
              );
            })}
          </div>

          {/* Side Module */}
          <div className="lg:col-span-4 space-y-8">
            {/* Status Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bento-card p-10 !bg-slate-950/40"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Synapse Matrix</h2>
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <TrendingUp className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                
                <div className="space-y-10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Efficiency Index</p>
                      <p className="text-6xl font-black text-white tracking-tighter italic">98.2<span className="text-2xl text-indigo-500">%</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Tier</p>
                      <p className="text-2xl font-black text-white italic">Diamond</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Uptime', val: '142h', icon: '⚡' },
                      { label: 'Global', val: '#4', icon: '🏆' }
                    ].map((s, i) => (
                      <div key={i} className="p-6 rounded-[2rem] bg-slate-900/50 border border-slate-800/50 hover:bg-slate-800/80 transition-all">
                        <p className="text-[10px] font-black text-slate-500 uppercase mb-2">{s.label}</p>
                        <p className="text-2xl font-black text-white">{s.val} <span className="text-sm ml-1 opacity-50">{s.icon}</span></p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      <span>Neural Sync</span>
                      <span className="text-indigo-400">92% COMPLETED</span>
                    </div>
                    <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden p-1 border border-slate-800/50">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tasks Module */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bento-card p-10 !bg-slate-950/40"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Active Tasks</h2>
                <span className="glass-pill border-indigo-500/20 text-indigo-400">3 Priority</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Core Protocol V2', type: 'Dev', time: '09:00', icon: ShieldCheck, color: 'text-indigo-400' },
                  { title: 'Data Stream Sync', type: 'Ops', time: '14:30', icon: Zap, color: 'text-amber-400' },
                  { title: 'Market Analysis', type: 'Research', time: '19:00', icon: BarChart3, color: 'text-emerald-400' },
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center justify-between p-5 rounded-[1.5rem] bg-slate-900/40 border border-slate-800/50 group cursor-pointer hover:bg-slate-800/80 transition-all border-l-4 border-l-transparent hover:border-l-indigo-500"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800/50">
                        <task.icon className={`w-5 h-5 ${task.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-white group-hover:text-indigo-400 transition-colors">{task.title}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{task.type}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-500 group-hover:text-white transition-colors">{task.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* System Diagnostics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Uptime', value: '100%', sub: 'No Downtime', icon: ShieldCheck },
            { label: 'Requests', value: '4.8M', sub: 'Last 24h', icon: ZapIcon },
            { label: 'Nodes', value: '12', sub: 'Active Clusters', icon: Globe },
            { label: 'Latency', value: '4ms', sub: 'Edge Optimized', icon: Clock },
          ].map((stat, i) => (
            <div key={i} className="bento-card p-8 !rounded-[2rem] hover:!border-indigo-500/40 group">
              <div className="flex items-center gap-3 mb-4">
                <stat.icon className="w-4 h-4 text-indigo-500" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="text-4xl font-black text-white tracking-tighter italic group-hover:text-indigo-400 transition-colors">{stat.value}</p>
                <span className="text-[10px] font-bold text-slate-500 uppercase group-hover:text-slate-300 transition-colors">{stat.sub}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Navigation - Mobile */}
      <nav className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 p-3 bg-slate-950/90 backdrop-blur-3xl border border-slate-800/50 rounded-[2rem] z-50 shadow-2xl">
        {[LayoutDashboard, Layers, Globe, Settings].map((Icon, i) => (
          <button key={i} className={`p-4 rounded-2xl transition-all ${i === 0 ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/40' : 'text-slate-500 hover:text-white'}`}>
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>
    </div>
  );
}
