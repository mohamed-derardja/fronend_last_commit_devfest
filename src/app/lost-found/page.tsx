'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, 
  Search, 
  Plus,
  MapPin,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  User,
  Phone,
  Mail,
  Camera,
  Shield,
  TrendingUp,
  Eye,
  MessageSquare,
  Send,
  X,
  Lock,
  CheckCircle2,
  ArrowRight,
  Image as ImageIcon,
  FileText,
  Sparkles,
  ChevronRight,
  Filter,
  Activity,
  Zap,
  LayoutDashboard
} from 'lucide-react';

export default function LostFoundPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'lost' | 'found' | 'post' | 'heatmap'>('dashboard');
  const [postType, setPostType] = useState<'lost' | 'found'>('lost');
  
  // Messaging System
  const [showMessaging, setShowMessaging] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  
  // Verification System
  const [showVerification, setShowVerification] = useState(false);
  const [verificationAnswers, setVerificationAnswers] = useState<any>({});
  
  // Status Tracking
  const [showStatusTimeline, setShowStatusTimeline] = useState(false);

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
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest">Community Safety Network</span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Neural Matching Active
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-serif font-semibold tracking-tight text-slate-900"
            >
              Lost & <span className="text-amber-600">Found</span>
            </motion.h1>
            <p className="text-slate-500 font-medium text-lg">AI-powered item recovery and community verification system.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Items Returned</p>
              <p className="text-2xl font-serif font-bold text-slate-900">156</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </header>

        {/* Dynamic Navigation Tabs */}
        <nav className="flex items-center gap-1 p-1 bg-white/50 backdrop-blur-md border border-slate-200 rounded-2xl mb-12 w-fit max-w-full overflow-x-auto">
          {[
            { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
            { id: 'lost', label: 'Lost Items', icon: AlertCircle },
            { id: 'found', label: 'Found Items', icon: CheckCircle },
            { id: 'post', label: 'Report Item', icon: Plus },
            { id: 'heatmap', label: 'Heatmap', icon: MapPin },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-amber-600 shadow-sm border border-slate-200 font-bold'
                    : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-600' : ''}`} />
                <span className="text-sm tracking-tight">{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="space-y-10"
            >
              {/* Stats Bento */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Active Lost', value: '34', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
                  { label: 'Active Found', value: '28', icon: Package, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { label: 'Neural Matches', value: '12', icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { label: 'Match Rate', value: '85%', icon: Activity, color: 'text-amber-600', bg: 'bg-amber-50' },
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants} className="academic-card p-8 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Stats</span>
                    </div>
                    <p className="text-4xl font-serif font-bold text-slate-900 mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Neural Matching Engine */}
                <div className="lg:col-span-8">
                  <div className="academic-card p-10 !bg-white">
                    <div className="flex items-center justify-between mb-10">
                      <div className="space-y-2">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                          <Zap className="w-4 h-4 text-indigo-500" />
                          Neural Matching Hub
                        </h2>
                        <p className="text-2xl font-serif font-bold text-slate-900">Active Suggestions</p>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-600 uppercase tracking-widest">High Confidence</div>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          lost: 'Black HP Laptop',
                          found: 'Black HP EliteBook',
                          confidence: 95,
                          loc: 'Library 3rd Floor',
                          time: '2h ago'
                        },
                        {
                          lost: 'Red Water Bottle',
                          found: 'Red Thermos Bottle',
                          confidence: 85,
                          loc: 'Cafeteria',
                          time: '4h ago'
                        }
                      ].map((match, i) => (
                        <div key={i} className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/30 blur-3xl pointer-events-none" />
                          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <div className="flex items-center gap-6 flex-1">
                              <div className="flex -space-x-3">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-rose-200 flex items-center justify-center text-rose-500 shadow-sm"><AlertCircle className="w-6 h-6" /></div>
                                <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-500 shadow-sm"><CheckCircle2 className="w-6 h-6" /></div>
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Potential Match Detected</h3>
                                <p className="text-sm font-medium text-slate-500 mt-1">{match.lost} ↔ {match.found}</p>
                                <div className="flex items-center gap-3 mt-3">
                                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest"><MapPin className="w-3 h-3" /> {match.loc}</span>
                                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest"><Clock className="w-3 h-3" /> {match.time}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                              <div className="text-right">
                                <p className="text-3xl font-serif font-bold text-indigo-600">{match.confidence}%</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Neural Confidence</p>
                              </div>
                              <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-indigo-100">Initialize Verification</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Reports & Heatmap Preview */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="academic-card p-8 !bg-amber-600 text-white group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                        <Plus className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-2">Report an Item</h3>
                      <p className="text-amber-100 text-sm leading-relaxed mb-6">Found or lost something? Initialize our matching engine to recover it.</p>
                      <button 
                        onClick={() => setActiveTab('post')}
                        className="w-full py-3 bg-white text-amber-700 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-amber-50 transition-colors shadow-xl"
                      >
                        New Report
                      </button>
                    </div>
                  </div>

                  <div className="academic-card p-8 !bg-white">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Risk Hotspots</h2>
                      <MapPin className="w-4 h-4 text-rose-500" />
                    </div>
                    <div className="space-y-6">
                      {[
                        { loc: 'Central Library', risk: 'High', color: 'text-rose-600', bg: 'bg-rose-50' },
                        { loc: 'Main Cafeteria', risk: 'Medium', color: 'text-amber-600', bg: 'bg-amber-50' },
                        { loc: 'Computer Lab 402', risk: 'Low', color: 'text-emerald-600', bg: 'bg-emerald-50' }
                      ].map((spot, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-700">{spot.loc}</span>
                          <span className={`px-3 py-1 rounded-full ${spot.bg} ${spot.color} text-[10px] font-bold uppercase tracking-widest`}>{spot.risk} Risk</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveTab('heatmap')}
                      className="w-full mt-8 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:bg-white hover:border-amber-400 transition-all"
                    >
                      View Full Heatmap
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'lost' && (
            <motion.div
              key="lost"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-10"
            >
              <div className="academic-card p-10 !bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
                      <AlertCircle className="w-8 h-8 text-rose-600" />
                      Lost Item Registry
                    </h2>
                    <p className="text-slate-500 font-medium text-lg">Active missing items awaiting community verification.</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Filter registry..." 
                        className="bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-4 focus:ring-amber-500/5 focus:border-amber-500/30 transition-all w-64"
                      />
                    </div>
                    <button className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 transition-all text-slate-600">
                      <Filter className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: 'Space Grey MacBook', owner: 'Amine R.', loc: 'Library 2nd Floor', date: 'Oct 20, 2024', status: 'Active Match', img: '💻', color: 'border-indigo-400' },
                    { title: 'Sony Headphones', owner: 'Ines T.', loc: 'Cafeteria', date: 'Oct 19, 2024', status: 'Searching', img: '🎧', color: 'border-slate-200' },
                    { title: 'Scientific Calculator', owner: 'Karim B.', loc: 'Amphi B', date: 'Oct 18, 2024', status: 'Searching', img: '🔢', color: 'border-slate-200' },
                  ].map((item, i) => (
                    <div key={i} className={`group academic-card p-6 !bg-slate-50 !border-2 ${item.color} hover:shadow-xl transition-all`}>
                      <div className="h-40 rounded-2xl bg-white border border-slate-100 mb-6 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent" />
                        {item.img}
                      </div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-lg">{item.title}</h3>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Owner: {item.owner}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${item.status === 'Active Match' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.loc}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </div>
                      </div>
                      <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">View Details</button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'post' && (
            <motion.div
              key="post"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-4xl mx-auto"
            >
              <div className="academic-card p-12 !bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Neural Report <span className="text-amber-600">Module</span></h2>
                    <p className="text-slate-500 font-medium text-lg">Input item metadata for matching analysis.</p>
                  </div>
                  
                  <div className="flex p-1 bg-slate-100 rounded-2xl border border-slate-200 w-fit">
                    <button
                      onClick={() => setPostType('lost')}
                      className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                        postType === 'lost' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-400'
                      }`}
                    >
                      I Lost
                    </button>
                    <button
                      onClick={() => setPostType('found')}
                      className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                        postType === 'found' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'
                      }`}
                    >
                      I Found
                    </button>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Item Classification</label>
                      <input type="text" placeholder="e.g., Black Laptop, Blue Wallet..." className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-400 outline-none font-bold text-slate-700" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location Coordinates</label>
                      <select className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-amber-400 outline-none font-bold text-slate-700">
                        <option>Central Library</option>
                        <option>Main Cafeteria</option>
                        <option>Faculty of Sciences</option>
                        <option>Student Residence</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Distinguishing Features</label>
                    <textarea 
                      placeholder="Describe unique marks, stickers, or internal contents..." 
                      className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-[2rem] focus:border-amber-400 outline-none font-medium text-slate-700 resize-none"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Visual Evidence</label>
                    <div className="group border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center hover:border-amber-400 hover:bg-amber-50/30 transition-all cursor-pointer relative">
                      <Camera className="w-10 h-10 text-slate-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-bold text-slate-500">Upload Item Imagery</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">AI will analyze image for matches</p>
                    </div>
                  </div>

                  <button className={`w-full py-6 rounded-[2rem] font-bold text-lg shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 ${
                    postType === 'lost' ? 'bg-rose-600 text-white shadow-rose-200 hover:bg-rose-700' : 'bg-emerald-600 text-white shadow-emerald-200 hover:bg-emerald-700'
                  }`}>
                    <Sparkles className="w-6 h-6" />
                    Initialize Matching Engine
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'heatmap' && (
            <motion.div
              key="heatmap"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-10"
            >
              <div className="academic-card p-10 !bg-white">
                <div className="space-y-2 mb-10">
                  <h2 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-rose-600" />
                    Campus Risk Heatmap
                  </h2>
                  <p className="text-slate-500 font-medium text-lg">Real-time visualization of item loss hotspots.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-8">
                    <div className="aspect-video bg-slate-100 rounded-[3rem] border-4 border-white shadow-inner flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&fit=crop')] bg-cover opacity-20 grayscale group-hover:opacity-30 transition-opacity duration-700" />
                      <div className="relative z-10 text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center mx-auto border border-white">
                          <MapPin className="w-10 h-10 text-rose-600 animate-bounce" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Interactive Campus Grid</h3>
                        <p className="text-slate-500 font-medium">Neural visualization of University Batna 2 sectors.</p>
                      </div>
                      
                      {/* Pulse indicators */}
                      <div className="absolute top-[30%] left-[40%] w-8 h-8 bg-rose-500/40 rounded-full animate-ping" />
                      <div className="absolute top-[60%] left-[70%] w-12 h-12 bg-amber-500/40 rounded-full animate-ping" />
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-8">
                    <div className="academic-card p-8 !bg-slate-50 border-slate-200">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Statistical Analysis</h3>
                      <div className="space-y-6">
                        {[
                          { loc: 'Central Library', loss: 58, risk: 'Critical', color: 'bg-rose-500' },
                          { loc: 'Science Labs', loss: 32, risk: 'High', color: 'bg-orange-500' },
                          { loc: 'Student Hub', loss: 25, risk: 'Elevated', color: 'bg-amber-500' },
                          { loc: 'Sports Complex', loss: 14, risk: 'Stable', color: 'bg-indigo-500' },
                        ].map((stat, i) => (
                          <div key={i} className="space-y-3">
                            <div className="flex justify-between items-end">
                              <div>
                                <p className="text-sm font-bold text-slate-900">{stat.loc}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.risk} Risk Sector</p>
                              </div>
                              <span className="text-xl font-serif font-bold text-slate-900">{stat.loss}</span>
                            </div>
                            <div className="h-1.5 w-full bg-white rounded-full overflow-hidden p-[2px] border border-slate-100">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${(stat.loss / 60) * 100}%` }}
                                className={`h-full ${stat.color} rounded-full`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Background Decorations */}
      <div className="absolute top-[10%] -left-[5%] w-[30%] h-[40%] bg-amber-200/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[40%] bg-indigo-200/20 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
