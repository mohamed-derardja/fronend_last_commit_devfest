'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, FileSearch, Package, Bell, Award, Newspaper, 
  LogOut, User, TrendingUp, Calendar, Clock, ArrowRight, 
  Sparkles, Target, Zap, CheckCircle2, AlertCircle, 
  ChevronRight, Search, LayoutDashboard, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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
      title: 'Exam Preparation',
      description: 'AI-powered quizzes & study plans',
      icon: BookOpen,
      href: '/exam-prep',
      color: 'from-indigo-500 to-blue-600',
      size: 'col-span-2 row-span-2',
    },
    {
      title: 'Opportunity Finder',
      description: 'Scholarships & internships',
      icon: FileSearch,
      href: '/documents',
      color: 'from-emerald-500 to-teal-600',
      size: 'col-span-1 row-span-1',
    },
    {
      title: 'Lost & Found',
      description: 'AI-matching for items',
      icon: Package,
      href: '/lost-found',
      color: 'from-orange-500 to-amber-600',
      size: 'col-span-1 row-span-1',
    },
    {
      title: 'Task Rewards',
      description: 'Earn points for studying',
      icon: Award,
      href: '/rewards',
      color: 'from-purple-500 to-pink-600',
      size: 'col-span-1 row-span-1',
    },
    {
      title: 'Notifications',
      description: 'Deadlines & alerts',
      icon: Bell,
      href: '/notifications',
      color: 'from-rose-500 to-red-600',
      size: 'col-span-1 row-span-1',
    },
  ];

  if (!isLoaded || !userRole) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30">
      {/* Sidebar / Nav Sidebar */}
      <div className="flex">
        <aside className="fixed left-0 top-0 h-screen w-20 hidden lg:flex flex-col items-center py-8 bg-slate-900/50 border-r border-slate-800/50 backdrop-blur-xl z-50">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mb-12 shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <nav className="flex flex-col gap-8 flex-1">
            <button className="p-3 rounded-xl bg-slate-800 text-indigo-400">
              <LayoutDashboard className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-xl text-slate-500 hover:bg-slate-800 hover:text-slate-300 transition-all">
              <Calendar className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-xl text-slate-500 hover:bg-slate-800 hover:text-slate-300 transition-all">
              <Target className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-xl text-slate-500 hover:bg-slate-800 hover:text-slate-300 transition-all">
              <Settings className="w-6 h-6" />
            </button>
          </nav>
          <button onClick={handleLogout} className="p-3 rounded-xl text-slate-500 hover:bg-red-900/20 hover:text-red-400 transition-all">
            <LogOut className="w-6 h-6" />
          </button>
        </aside>

        <main className="flex-1 lg:ml-20 min-h-screen p-4 md:p-8 lg:p-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="space-y-1">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold tracking-tight text-white"
              >
                Dashboard
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-400 font-medium"
              >
                Welcome back, {userEmail?.split('@')[0]}
              </motion.p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative group hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all w-64"
                />
              </div>
              <div className="flex items-center gap-3 p-1.5 bg-slate-900/50 border border-slate-800 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
                  {userEmail?.[0].toUpperCase()}
                </div>
                <div className="pr-4 hidden md:block">
                  <p className="text-sm font-semibold text-white truncate max-w-[120px]">{userEmail}</p>
                  <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-400 border-none text-[10px] uppercase tracking-wider py-0">
                    {userRole}
                  </Badge>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Bento Grid Features */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
              {mainFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`${feature.size} group relative overflow-hidden rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300`}
                  >
                    <Link href={feature.href} className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{feature.description}</p>
                      </div>
                      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-indigo-400" />
                        </div>
                      </div>
                    </Link>
                    {/* Subtle Glow */}
                    <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${feature.color} blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Panel - Stats & Quick Info */}
            <div className="lg:col-span-4 space-y-8">
              {/* Profile Overview */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-white">Your Progress</h2>
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
                    <p className="text-xs font-medium text-slate-500 uppercase mb-1">Streak</p>
                    <p className="text-2xl font-bold text-white">7 Days 🔥</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
                    <p className="text-xs font-medium text-slate-500 uppercase mb-1">Rank</p>
                    <p className="text-2xl font-bold text-white">#5 🏆</p>
                  </div>
                  <div className="col-span-2 bg-indigo-600/10 rounded-2xl p-4 border border-indigo-500/20">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <p className="text-xs font-medium text-indigo-400 uppercase mb-1">Points</p>
                        <p className="text-3xl font-bold text-white">850</p>
                      </div>
                      <Badge className="bg-indigo-500/20 text-indigo-400 border-none mb-1">+120</Badge>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        className="h-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Upcoming Tasks */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-white">Upcoming</h2>
                  <Calendar className="w-5 h-5 text-slate-500" />
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Physics Exam', date: 'Tomorrow', color: 'bg-red-500/10 text-red-400' },
                    { title: 'Project Demo', date: 'Dec 21', color: 'bg-amber-500/10 text-amber-400' },
                    { title: 'Study Group', date: 'Dec 22', color: 'bg-blue-500/10 text-blue-400' },
                  ].map((task) => (
                    <div key={task.title} className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${task.color.split(' ')[1].replace('text-', 'bg-')}`} />
                        <span className="text-sm font-medium text-slate-200">{task.title}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${task.color}`}>
                        {task.date}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl group">
                  View Schedule <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Quiz Completed', val: '95%', time: '2h ago', icon: CheckCircle2, color: 'text-emerald-400' },
                { label: 'Item Found', val: 'Match!', time: '1d ago', icon: Package, color: 'text-amber-400' },
                { label: 'New Resource', val: 'Notes', time: '2d ago', icon: FileSearch, color: 'text-indigo-400' },
                { label: 'Rank Up', val: '+2', time: '3d ago', icon: TrendingUp, color: 'text-purple-400' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="p-4 rounded-3xl bg-slate-900/40 border border-slate-800 flex items-center gap-4 group hover:bg-slate-800/40 transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-white">{item.val}</span>
                      <span className="text-[10px] text-slate-600 font-medium">{item.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Nav Overlay (simplified for now) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl z-50 shadow-2xl">
        <button className="p-3 rounded-xl bg-indigo-600 text-white">
          <LayoutDashboard className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-xl text-slate-400">
          <Calendar className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-xl text-slate-400">
          <User className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-xl text-slate-400">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
