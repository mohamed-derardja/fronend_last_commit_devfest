'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Newspaper, 
  Calendar,
  Clock,
  TrendingUp,
  AlertCircle,
  Info,
  BookOpen,
  Users,
  MapPin,
  ArrowRight,
  Search,
  Filter,
  Download,
  Share2,
  Sparkles,
  ChevronRight,
  Zap,
  Activity,
  Library,
  Bookmark
} from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  impact: 'high' | 'medium' | 'low';
  affectedStudents: string;
  changes: string[];
  icon: any;
  color: string;
  bg: string;
}

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'schedule' | 'academic' | 'campus'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Computer Science 301 Schedule Change',
      summary: 'Neural Summary: CS301 class has been moved from Monday 2:00 PM to Tuesday 10:00 AM, effective immediately. Affects all Computer Science Year 3 students.',
      category: 'Schedule',
      date: '1 hour ago',
      impact: 'high',
      affectedStudents: 'CS Year 3',
      changes: [
        'New Time: Tuesday 10:00 AM - 12:00 PM',
        'Same Room: Building A, Room 305',
        'Starts: Dec 19, 2025'
      ],
      icon: Clock,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    },
    {
      id: 2,
      title: 'Final Exam Roadmap Published',
      summary: 'Neural Summary: Final exam period extended by 2 days. Mathematics exams moved earlier, Physics exams moved later. System synchronized with your planner.',
      category: 'Academic',
      date: '3 hours ago',
      impact: 'high',
      affectedStudents: 'All Scholars',
      changes: [
        'Mathematics: Dec 25-27',
        'Physics: Dec 30-31',
        'Period: Dec 25 - Jan 5'
      ],
      icon: Calendar,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      id: 3,
      title: 'Library Neural Hub 24/7 Activation',
      summary: 'Neural Summary: Library will be open 24/7 during final exams. Additional high-density study rooms activated. Free cognitive recharge service after 10 PM.',
      category: 'Campus',
      date: '5 hours ago',
      impact: 'medium',
      affectedStudents: 'All Scholars',
      changes: [
        '24/7 Ops: Dec 20 - Jan 5',
        '10 New Study Modules',
        'Recharge: 10 PM - 6 AM'
      ],
      icon: Library,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <div className="ivy-mesh" />
      <div className="grain" />
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 relative z-10">
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold uppercase tracking-widest">Campus Intelligence Stream</span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                AI Summarized
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-serif font-semibold tracking-tight text-slate-900"
            >
              System <span className="text-pink-600">Updates</span>
            </motion.h1>
            <p className="text-slate-500 font-medium text-lg">High-fidelity news and schedule synchronization for the modern scholar.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group hidden xl:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search intelligence..." 
                className="bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-4 focus:ring-pink-500/5 focus:border-pink-500/30 transition-all w-72 shadow-sm"
              />
            </div>
            <button className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-pink-200 transition-all text-slate-600 shadow-sm">
              <Filter className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Dynamic Navigation Tabs */}
        <nav className="flex items-center gap-1 p-1 bg-white/50 backdrop-blur-md border border-slate-200 rounded-2xl mb-12 w-fit max-w-full overflow-x-auto">
          {[
            { id: 'all', label: 'All Intelligence', icon: Activity },
            { id: 'schedule', label: 'Schedules', icon: Clock },
            { id: 'academic', label: 'Academic', icon: Bookmark },
            { id: 'campus', label: 'Campus Life', icon: MapPin },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-pink-600 shadow-sm border border-slate-200 font-bold'
                    : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-pink-600' : ''}`} />
                <span className="text-sm tracking-tight">{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {newsItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="academic-card p-10 !bg-white group"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className={`w-7 h-7 ${item.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.category}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest ${
                            item.impact === 'high' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                          }`}>{item.impact} Impact</span>
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-pink-600 transition-colors">{item.title}</h2>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                  </div>

                  <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 border-l-4 border-l-pink-500 mb-8">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                      <p className="text-slate-600 leading-relaxed font-medium italic text-sm">{item.summary}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Critical Changes
                      </h3>
                      <ul className="space-y-2">
                        {item.changes.map((change, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Users className="w-3.5 h-3.5" />
                        Affected Cohort
                      </h3>
                      <p className="text-sm font-bold text-slate-900 bg-slate-50 p-4 rounded-2xl inline-block border border-slate-100">{item.affectedStudents}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="flex gap-2">
                      <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-all">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-all">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="px-8 py-3 bg-pink-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-pink-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-pink-100 flex items-center gap-2">
                      Read Full Analysis
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="academic-card p-8 !bg-white">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Priority Calendar</h2>
              <div className="space-y-6">
                {[
                  { date: 'Dec 19', event: 'CS301 Delta Protocol', color: 'bg-rose-50 text-rose-600' },
                  { date: 'Dec 20', event: 'Hub Activation', color: 'bg-indigo-50 text-indigo-600' },
                  { date: 'Dec 25', event: 'Exam Cycle Start', color: 'bg-amber-50 text-amber-600' }
                ].map((ev, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 ${ev.color} group-hover:scale-110 transition-transform`}>
                      <span className="text-xs font-black">{ev.date.split(' ')[1]}</span>
                      <span className="text-[8px] font-bold uppercase">{ev.date.split(' ')[0]}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-700 group-hover:text-pink-600 transition-colors">{ev.event}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:bg-white hover:border-pink-400 transition-all">View Academic Master</button>
            </div>

            <div className="academic-card p-8 !bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10">
                <Zap className="w-8 h-8 text-pink-400 mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-2">Neural Pulse Subscription</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">Receive instant high-impact schedule changes directly to your mobile neural engine.</p>
                <button className="w-full py-4 bg-pink-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-pink-500 transition-all shadow-xl shadow-pink-500/20">Enable Notifications</button>
              </div>
            </div>

            <div className="academic-card p-8 !bg-white">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Intelligence Streams</h2>
              <div className="space-y-4">
                {[
                  { name: 'Schedules', count: 12, color: 'bg-rose-500' },
                  { name: 'Academic', count: 45, color: 'bg-indigo-500' },
                  { name: 'Campus Life', count: 28, color: 'bg-emerald-500' }
                ].map((stream, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{stream.name}</span>
                      <span className="text-sm font-bold text-slate-900">{stream.count}</span>
                    </div>
                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${stream.color}`} style={{ width: `${(stream.count / 50) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Background Decorations */}
      <div className="absolute top-[10%] -left-[5%] w-[30%] h-[40%] bg-pink-200/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[40%] bg-indigo-200/20 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
