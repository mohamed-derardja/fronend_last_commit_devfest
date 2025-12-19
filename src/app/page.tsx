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
  BarChart3, ShieldCheck, ZapIcon
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
      setIsLoaded(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  const mainFeatures = [
    {
      title: 'Exam Prep',
      description: 'AI-powered study paths',
      icon: BookOpen,
      href: '/exam-prep',
      color: 'indigo',
      size: 'col-span-2 row-span-2',
      badge: 'New',
    },
    {
      title: 'Opportunities',
      description: 'Find scholarships',
      icon: FileSearch,
      href: '/documents',
      color: 'emerald',
      size: 'col-span-1 row-span-1',
    },
    {
      title: 'Lost & Found',
      description: 'Matching engine',
      icon: Package,
      href: '/lost-found',
      color: 'orange',
      size: 'col-span-1 row-span-1',
    },
    {
      title: 'Rewards',
      description: 'Earn credits',
      icon: Award,
      href: '/rewards',
      color: 'purple',
      size: 'col-span-1 row-span-2',
    },
    {
      title: 'Updates',
      description: 'Real-time alerts',
      icon: Bell,
      href: '/notifications',
      color: 'rose',
      size: 'col-span-1 row-span-1',
    },
  ];

  if (!isLoaded || !userRole) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden relative">
      <div className="mesh-gradient absolute inset-0 z-0 opacity-40" />
      <div className="grain" />
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-24 hidden lg:flex flex-col items-center py-10 bg-slate-950/50 border-r border-slate-800/50 backdrop-blur-2xl z-50">
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
            { icon: Calendar },
            { icon: Target },
            { icon: BarChart3 },
            { icon: Settings }
          ].map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ x: 5 }}
              className={`p-4 rounded-2xl transition-all relative group ${
                item.active ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <item.icon className="w-6 h-6" />
              {item.active && (
                <motion.div layoutId="active" className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-indigo-500 rounded-full" />
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

      <main className="relative z-10 lg:ml-24 min-h-screen p-6 md:p-10 lg:p-16 max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-indigo-400 font-bold tracking-widest text-xs uppercase"
            >
              <ZapIcon className="w-3 h-3" />
              Academic System v2.0
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black tracking-tight text-white flex items-center gap-4"
            >
              Dashboard
              <Badge className="bg-indigo-500 text-white border-none rounded-lg px-2 py-0.5 text-[10px] font-black">PRO</Badge>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg font-medium"
            >
              Welcome back, <span className="text-slate-200">{userEmail?.split('@')[0]}</span>
            </motion.p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group hidden xl:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Command + K to search" 
                className="bg-slate-900/40 border border-slate-800/50 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all w-80 backdrop-blur-xl"
              />
            </div>
            
            <motion.div 
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 p-2 pr-6 bg-slate-900/40 border border-slate-800/50 rounded-2xl backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-black text-white shadow-xl">
                {userEmail?.[0].toUpperCase()}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-white leading-none mb-1">{userEmail}</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-black tracking-tighter text-slate-500">{userRole}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Bento Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
            {mainFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className={`${feature.size} group relative overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 backdrop-blur-sm`}
                >
                  <Link href={feature.href} className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700/50 group-hover:border-indigo-500/50 transition-colors duration-500`}>
                        <Icon className={`w-7 h-7 text-indigo-400 group-hover:scale-110 transition-transform duration-500`} />
                      </div>
                      {feature.badge && (
                        <Badge className="bg-emerald-500/10 text-emerald-400 border-none rounded-lg px-2 py-0.5 text-[10px] font-black uppercase">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2 leading-tight">{feature.title}</h3>
                      <p className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors line-clamp-2">{feature.description}</p>
                    </div>
                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="w-6 h-6 text-indigo-400" />
                    </div>
                  </Link>
                  {/* Glass Glow */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700`} />
                </motion.div>
              );
            })}
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-4 space-y-10">
            {/* Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900/40 border border-slate-800/50 rounded-[2.5rem] p-10 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">Personal Matrix</h2>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Weekly Growth</p>
                      <p className="text-5xl font-black text-white tracking-tighter">+84%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-1">Tier</p>
                      <p className="text-xl font-black text-white">Elite</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-3xl bg-slate-800/50 border border-slate-700/30">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Streak</p>
                      <p className="text-2xl font-black text-white">12 <span className="text-sm">🔥</span></p>
                    </div>
                    <div className="p-4 rounded-3xl bg-slate-800/50 border border-slate-700/30">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Global</p>
                      <p className="text-2xl font-black text-white">#12 <span className="text-sm">🌎</span></p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase">
                      <span>Sync Progress</span>
                      <span className="text-indigo-400">920 / 1000 XP</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[100px]" />
            </motion.div>

            {/* Task Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/40 border border-slate-800/50 rounded-[2.5rem] p-10 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">Critical Tasks</h2>
                <Badge className="bg-indigo-500/10 text-indigo-400 border-none rounded-full px-3 py-1 text-[10px] font-black">3 ACTIVE</Badge>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'System Architecture', type: 'Design', time: '14:00', icon: ShieldCheck, color: 'text-indigo-400' },
                  { title: 'Neural Network Quiz', type: 'Study', time: '18:30', icon: Zap, color: 'text-amber-400' },
                  { title: 'Reward Settlement', type: 'Payout', time: '21:00', icon: Award, color: 'text-emerald-400' },
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-5 rounded-[1.5rem] bg-slate-800/30 border border-slate-700/30 group cursor-pointer hover:bg-slate-800/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700/50`}>
                        <task.icon className={`w-5 h-5 ${task.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-white group-hover:text-indigo-400 transition-colors">{task.title}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{task.type}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-500">{task.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Uptime', value: '99.9%', sub: 'Last 30d', icon: ShieldCheck },
            { label: 'API Calls', value: '1.2M', sub: 'Real-time', icon: ZapIcon },
            { label: 'Nodes', value: '24', sub: 'Global Dist', icon: Target },
            { label: 'Latency', value: '12ms', sub: 'Optimal', icon: Clock },
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-950/40 border border-slate-800/50 backdrop-blur-sm group hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <stat.icon className="w-4 h-4 text-indigo-500" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-black text-white tracking-tighter">{stat.value}</p>
                <span className="text-[10px] font-bold text-indigo-400/60 uppercase">{stat.sub}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Navigation for Mobile */}
      <nav className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 p-3 bg-slate-950/90 backdrop-blur-2xl border border-slate-800 rounded-[2rem] z-50 shadow-2xl">
        {[LayoutDashboard, Calendar, Sparkles, Settings].map((Icon, i) => (
          <button key={i} className={`p-4 rounded-2xl ${i === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40' : 'text-slate-500'}`}>
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>
    </div>
  );
}
