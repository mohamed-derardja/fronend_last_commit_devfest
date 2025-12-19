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
  LayoutDashboard,
  Upload
} from 'lucide-react';

export default function LostFoundPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'lost' | 'found' | 'post' | 'heatmap'>('dashboard');
  const [postType, setPostType] = useState<'lost' | 'found'>('lost');
  
  // Messaging System
  const [showMessaging, setShowMessaging] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<any[]>([
    { id: 1, text: 'Hi, I found this item. Is it yours?', sender: 'owner', time: '10:23 AM' },
    { id: 2, text: 'Yes! I lost it yesterday. Can we verify ownership?', sender: 'me', time: '10:25 AM' },
    { id: 3, text: 'Of course! Please use the verify button to answer security questions.', sender: 'owner', time: '10:26 AM' },
  ]);
  
  // Verification System
  const [showVerification, setShowVerification] = useState(false);
  const [verificationAnswers, setVerificationAnswers] = useState<any>({
    brand: '',
    uniqueMarks: '',
    contents: '',
  });
  const [verificationProof, setVerificationProof] = useState<File[]>([]);
  
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
                    { title: 'Black HP Laptop', desc: 'HP EliteBook with university sticker', owner: 'Amine R.', loc: 'Library 3rd Floor', date: 'Dec 15, 2025', status: 'Active Match', img: '💻', color: 'border-indigo-400' },
                    { title: 'Sony Headphones', desc: 'WH-1000XM4 Noise Cancelling', owner: 'Ines T.', loc: 'Cafeteria', date: 'Oct 19, 2024', status: 'Searching', img: '🎧', color: 'border-slate-200' },
                    { title: 'Scientific Calculator', desc: 'Casio FX-991EX with scratches', owner: 'Karim B.', loc: 'Amphi B', date: 'Oct 18, 2024', status: 'Searching', img: '🔢', color: 'border-slate-200' },
                  ].map((item, i) => (
                    <div key={i} className={`group academic-card p-6 !bg-slate-50 !border-2 ${item.color} hover:shadow-xl transition-all`}>
                      <div className="h-40 rounded-2xl bg-white border border-slate-100 mb-6 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent" />
                        {item.img}
                      </div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-lg">{item.title}</h3>
                          <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Owner: {item.owner}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shrink-0 ${
                          item.status === 'Active Match' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                        }`}>
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
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            setSelectedItem(item);
                            setShowMessaging(true);
                          }}
                          className="flex-1 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Message
                        </button>
                        <button
                          onClick={() => {
                            setSelectedItem(item);
                            setShowVerification(true);
                          }}
                          className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                        >
                          <Shield className="w-4 h-4" />
                          Verify
                        </button>
                      </div>
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

      {/* Verification Modal */}
      <AnimatePresence>
        {showVerification && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[200] flex items-center justify-center p-6"
            onClick={() => setShowVerification(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="academic-card p-10 !bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-slate-900">Verify Ownership</h2>
                      <p className="text-sm text-slate-500 font-medium">Prove this item belongs to you</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowVerification(false)}
                  className="p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{selectedItem.img}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{selectedItem.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{selectedItem.desc}</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {selectedItem.loc}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {selectedItem.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Security Questions</h3>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700">
                        1. What is the brand or model of this item? <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={verificationAnswers.brand}
                        onChange={(e) => setVerificationAnswers({ ...verificationAnswers, brand: e.target.value })}
                        placeholder="e.g., HP EliteBook, Sony WH-1000XM4"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-500/30 focus:ring-4 focus:ring-emerald-500/5 outline-none font-medium text-slate-700"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700">
                        2. Are there any unique marks or distinguishing features? <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        value={verificationAnswers.uniqueMarks}
                        onChange={(e) => setVerificationAnswers({ ...verificationAnswers, uniqueMarks: e.target.value })}
                        placeholder="e.g., Scratch on the back, sticker, custom color"
                        rows={3}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-500/30 focus:ring-4 focus:ring-emerald-500/5 outline-none font-medium text-slate-700 resize-none"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700">
                        3. What was inside or attached to the item? <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        value={verificationAnswers.contents}
                        onChange={(e) => setVerificationAnswers({ ...verificationAnswers, contents: e.target.value })}
                        placeholder="e.g., Books, charger, keychain"
                        rows={3}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-emerald-500/30 focus:ring-4 focus:ring-emerald-500/5 outline-none font-medium text-slate-700 resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Additional Proof (Optional)</h3>
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-emerald-600" />
                      Upload Photos or Receipt (Multiple files supported)
                    </label>
                    <div className="group border-2 border-dashed border-emerald-200 rounded-2xl p-8 text-center hover:border-emerald-400 hover:bg-emerald-50/30 transition-all cursor-pointer relative bg-emerald-50/20">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        multiple
                        onChange={(e) => {
                          if (e.target.files) {
                            setVerificationProof(Array.from(e.target.files));
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 border-2 border-emerald-300">
                        <Upload className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {verificationProof.length > 0 ? `${verificationProof.length} file(s) selected` : 'Click or drag to upload'}
                      </h4>
                      <p className="text-xs text-slate-500 mb-3">PNG, JPG, or PDF (Max 5MB each)</p>
                      <div className="flex items-center justify-center gap-2 text-emerald-600">
                        <Camera className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Add Proof Photos</span>
                      </div>
                    </div>

                    {/* Photo Previews */}
                    {verificationProof.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {verificationProof.map((file, idx) => (
                          <div key={idx} className="relative group">
                            <div className="aspect-square rounded-xl bg-slate-100 border border-slate-200 overflow-hidden">
                              <div className="w-full h-full flex items-center justify-center">
                                {file.type.startsWith('image/') ? (
                                  <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <FileText className="w-8 h-8 text-slate-400" />
                                )}
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setVerificationProof(verificationProof.filter((_, i) => i !== idx));
                              }}
                              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                            >
                              <X className="w-4 h-4" />
                            </button>
                            <p className="text-[10px] text-slate-500 text-center mt-1 truncate">{file.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <button
                  onClick={() => {
                    setShowVerification(false);
                    setVerificationAnswers({ brand: '', uniqueMarks: '', contents: '' });
                    setVerificationProof([]);
                  }}
                  className="flex-1 py-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 font-bold text-sm uppercase tracking-widest hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert(`Verification submitted! The owner will review your answers.${verificationProof.length > 0 ? ` ${verificationProof.length} proof photo(s) attached.` : ''}`);
                    setShowVerification(false);
                    setVerificationAnswers({ brand: '', uniqueMarks: '', contents: '' });
                    setVerificationProof([]);
                  }}
                  disabled={!verificationAnswers.brand || !verificationAnswers.uniqueMarks || !verificationAnswers.contents}
                  className="flex-1 py-4 rounded-2xl bg-emerald-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-200"
                >
                  Submit Verification
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp-Style Messaging Modal */}
      <AnimatePresence>
        {showMessaging && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[200] flex items-center justify-center p-6"
            onClick={() => setShowMessaging(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* WhatsApp-style Header */}
              <div className="bg-indigo-600 text-white p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                    {selectedItem.img}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{selectedItem.owner}</h3>
                    <p className="text-xs text-indigo-100">{selectedItem.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMessaging(false)}
                  className="p-2 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Item Info Banner */}
              <div className="bg-amber-50 border-b border-amber-100 p-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Package className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-amber-900">{selectedItem.desc}</p>
                    <div className="flex items-center gap-3 text-xs text-amber-700 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {selectedItem.loc}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {selectedItem.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 bg-slate-50" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
                <div className="space-y-4 max-w-3xl mx-auto">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[75%] ${
                        msg.sender === 'me'
                          ? 'bg-indigo-600 text-white rounded-[1.25rem] rounded-br-md'
                          : 'bg-white text-slate-900 rounded-[1.25rem] rounded-bl-md shadow-sm border border-slate-100'
                      } px-4 py-3`}>
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                        <div className={`flex items-center justify-end gap-1 mt-1 text-[10px] ${
                          msg.sender === 'me' ? 'text-indigo-200' : 'text-slate-400'
                        }`}>
                          <span>{msg.time}</span>
                          {msg.sender === 'me' && (
                            <CheckCircle className="w-3 h-3" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Message Input Area */}
              <div className="bg-white border-t border-slate-200 p-4">
                <div className="flex items-end gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && messageText.trim()) {
                          setMessages([...messages, {
                            id: messages.length + 1,
                            text: messageText,
                            sender: 'me',
                            time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
                          }]);
                          setMessageText('');
                        }
                      }}
                      placeholder="Type a message..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-full outline-none focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 focus:bg-white transition-all text-sm"
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (messageText.trim()) {
                        setMessages([...messages, {
                          id: messages.length + 1,
                          text: messageText,
                          sender: 'me',
                          time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
                        }]);
                        setMessageText('');
                      }
                    }}
                    disabled={!messageText.trim()}
                    className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 text-center mt-2 uppercase tracking-widest">Messages are secure and private</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorations */}
      <div className="absolute top-[10%] -left-[5%] w-[30%] h-[40%] bg-amber-200/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[40%] bg-indigo-200/20 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
