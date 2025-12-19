'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Upload, 
  Brain, 
  Calendar, 
  Target,
  FileText, 
  Clock, 
  TrendingUp,
  PlayCircle,
  CheckCircle,
  Trophy,
  Settings,
  BarChart3,
  Zap,
  Award,
  AlertCircle,
  Plus,
  Minus,
  Pause,
  Play,
  Users,
  Lightbulb,
  Timer,
  X,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ExamPrepPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'quiz' | 'pdf' | 'resources' | 'planner'>('dashboard');
  const [quizInputMethod, setQuizInputMethod] = useState<'text' | 'upload'>('text');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [textContent, setTextContent] = useState('');
  
  // Study Planner States
  const [showPersonalDataForm, setShowPersonalDataForm] = useState(false);
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [studyStreak, setStudyStreak] = useState(7);
  const [totalStudyHours, setTotalStudyHours] = useState(34.5);
  
  // Personal Study Preferences
  const [personalData, setPersonalData] = useState({
    studyGoal: 'Increase grades',
    availableHoursPerDay: 4,
    preferredStudyTime: 'morning',
    learningStyle: 'visual',
    difficultyLevel: 'intermediate',
    breakDuration: 5,
    sessionsPerDay: 4,
    focusSubjects: ['Mathematics', 'Physics'],
    weakAreas: ['Chemistry'],
    examDates: [
      { subject: 'Mathematics', date: '2025-12-25' },
      { subject: 'Physics', date: '2025-12-28' }
    ]
  });
  
  // Performance Tracking
  const [performanceData, setPerformanceData] = useState([
    { date: '2025-12-11', hoursStudied: 3.5, focusScore: 85, topicsCompleted: 4 },
    { date: '2025-12-12', hoursStudied: 4.0, focusScore: 90, topicsCompleted: 5 },
    { date: '2025-12-13', hoursStudied: 3.0, focusScore: 75, topicsCompleted: 3 },
    { date: '2025-12-14', hoursStudied: 5.0, focusScore: 92, topicsCompleted: 6 },
    { date: '2025-12-15', hoursStudied: 4.5, focusScore: 88, topicsCompleted: 5 },
    { date: '2025-12-16', hoursStudied: 4.0, focusScore: 85, topicsCompleted: 4 },
    { date: '2025-12-17', hoursStudied: 3.5, focusScore: 80, topicsCompleted: 4 },
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

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
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-widest">Neural Study Hub</span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                AI Enhanced
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-serif font-semibold tracking-tight text-slate-900"
            >
              Exam Preparation <span className="text-indigo-600">Assistant</span>
            </motion.h1>
            <p className="text-slate-500 font-medium text-lg">AI-powered precision tools for academic excellence.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">1.2k Scholars studying now</span>
          </div>
        </header>

        {/* Dynamic Navigation Tabs */}
        <nav className="flex items-center gap-1 p-1 bg-white/50 backdrop-blur-md border border-slate-200 rounded-2xl mb-12 w-fit max-w-full overflow-x-auto">
          {[
            { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
            { id: 'quiz', label: 'AI Quiz', icon: Brain },
            { id: 'pdf', label: 'Summarizer', icon: FileText },
            { id: 'resources', label: 'Resources', icon: Library },
            { id: 'planner', label: 'Smart Planner', icon: CalendarDays },
          ].map((tab) => {
            const Icon = tab.icon as any;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200 font-bold'
                    : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : ''}`} />
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
                  { label: 'Weekly Quizzes', value: '12', icon: Trophy, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { label: 'Avg Accuracy', value: '85%', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { label: 'Study Hours', value: '24h', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
                  { label: 'Performance', value: '+15%', icon: TrendingUp, color: 'text-rose-600', bg: 'bg-rose-50' },
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants} className="academic-card p-8 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">This Week</span>
                    </div>
                    <p className="text-4xl font-serif font-bold text-slate-900 mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Upcoming Exams Section */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="academic-card p-8 !bg-white">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Critical Exam Roadmap
                      </h2>
                      <button className="text-indigo-600 text-xs font-bold hover:underline">View All</button>
                    </div>

                    <div className="space-y-6">
                      {[
                        { subject: 'Advanced Mathematics', date: 'Dec 25, 2025', days: 7, progress: 65, color: 'bg-indigo-600' },
                        { subject: 'Theoretical Physics', date: 'Dec 28, 2025', days: 10, progress: 45, color: 'bg-amber-600' },
                        { subject: 'Organic Chemistry', date: 'Jan 02, 2026', days: 15, progress: 30, color: 'bg-emerald-600' },
                      ].map((exam, i) => (
                        <div key={i} className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-lg">{exam.subject}</h3>
                              <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5 mt-1">
                                <Clock className="w-3 h-3" />
                                {exam.date} • {exam.days} Days Remaining
                              </p>
                            </div>
                            <span className="text-2xl font-serif font-bold text-slate-900">{exam.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white rounded-full overflow-hidden p-[2px] border border-slate-200">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${exam.progress}%` }}
                              className={`h-full ${exam.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions & Recent Activity */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="academic-card p-8 !bg-white">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Quick AI Generators</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { label: 'Generate Neural Quiz', icon: Brain, color: 'text-indigo-600', bg: 'bg-indigo-50', id: 'quiz' },
                        { label: 'Smart PDF Summary', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50', id: 'pdf' },
                        { label: 'AI Study Schedule', icon: Target, color: 'text-amber-600', bg: 'bg-amber-50', id: 'planner' },
                      ].map((action, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTab(action.id as any)}
                          className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-slate-50 transition-all group text-left"
                        >
                          <div className={`w-10 h-10 rounded-xl ${action.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <action.icon className={`w-5 h-5 ${action.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900">{action.label}</p>
                            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">Initialize AI Module</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="academic-card p-8 !bg-indigo-600 text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="w-5 h-5 text-indigo-200" />
                      <h2 className="text-xs font-bold text-indigo-200 uppercase tracking-[0.2em]">Study Streak</h2>
                    </div>
                    <p className="text-5xl font-serif font-bold mb-4">7 Days</p>
                    <p className="text-indigo-100/70 text-sm leading-relaxed mb-6">You're in the top 5% of consistent learners this month. Keep the momentum!</p>
                    <div className="flex gap-2">
                      {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                        <div key={i} className="flex-1 h-1.5 rounded-full bg-indigo-400/30 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: i * 0.1 }}
                            className="h-full bg-white" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="academic-card p-10 !bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
                      <Brain className="w-8 h-8 text-indigo-600" />
                      AI Quiz Generator
                    </h2>
                    <p className="text-slate-500 font-medium">Generate academic assessments from your notes or files.</p>
                  </div>
                  
                  <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200 w-fit">
                    <button
                      onClick={() => setQuizInputMethod('text')}
                      className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                        quizInputMethod === 'text' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'
                      }`}
                    >
                      Text
                    </button>
                    <button
                      onClick={() => setQuizInputMethod('upload')}
                      className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                        quizInputMethod === 'upload' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'
                      }`}
                    >
                      File
                    </button>
                  </div>
                </div>

                <div className="space-y-8">
                  {quizInputMethod === 'text' ? (
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Neural Input Area</label>
                      <textarea
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                        placeholder="Paste lecture notes, textbook segments, or topic details..."
                        className="w-full h-64 p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 focus:bg-white transition-all outline-none font-medium text-slate-700 leading-relaxed"
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Document Analysis Hub</label>
                      <div className="group border-2 border-dashed border-slate-200 rounded-[2rem] p-16 text-center hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer relative">
                        <input type="file" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                        <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Upload className="w-10 h-10 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{uploadedFile ? uploadedFile.name : 'Upload Academic Material'}</h3>
                        <p className="text-slate-500 font-medium">Drop PDF, TXT, or DOCX files for AI extraction.</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject Domain</label>
                      <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500/30 font-bold text-slate-700">
                        <option>Advanced Mathematics</option>
                        <option>Theoretical Physics</option>
                        <option>Computer Science</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Intensity Level</label>
                      <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500/30 font-bold text-slate-700">
                        <option>Beginner (Conceptual)</option>
                        <option>Intermediate (Applied)</option>
                        <option>Advanced (Rigorous)</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    Initialize AI Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'planner' && (
            <motion.div
              key="planner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* Left Column: Schedule & Planner */}
              <div className="lg:col-span-8 space-y-10">
                <div className="academic-card p-10 !bg-white">
                  <div className="flex items-center justify-between mb-12">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
                        <CalendarDays className="w-8 h-8 text-indigo-600" />
                        Neural Study Schedule
                      </h2>
                      <p className="text-slate-500 font-medium text-lg">AI-optimized time allocation for maximum retention.</p>
                    </div>
                    <button 
                      onClick={() => setShowPersonalDataForm(!showPersonalDataForm)}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all text-slate-600 hover:text-indigo-600"
                    >
                      <Settings className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-4 mb-12">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                      <div key={day} className={`text-center p-6 rounded-3xl border-2 transition-all cursor-pointer ${
                        idx === 2 ? 'bg-indigo-50 border-indigo-600' : 'bg-slate-50 border-transparent hover:border-slate-200'
                      }`}>
                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${idx === 2 ? 'text-indigo-600' : 'text-slate-400'}`}>{day}</p>
                        <p className={`text-2xl font-serif font-bold ${idx === 2 ? 'text-indigo-900' : 'text-slate-900'}`}>{15 + idx}</p>
                        <div className={`mt-3 mx-auto w-1.5 h-1.5 rounded-full ${idx === 2 ? 'bg-indigo-600' : 'bg-slate-300'}`} />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Today's Optimized Path</h3>
                    {[
                      { time: '09:00 - 11:00', subject: 'Mathematics', topic: 'Neural Calculus', status: 'completed', accent: 'border-emerald-500 bg-emerald-50/30' },
                      { time: '11:30 - 13:00', subject: 'Theoretical Physics', topic: 'Quantum Mechanics', status: 'in-progress', accent: 'border-indigo-500 bg-indigo-50/30' },
                      { time: '14:30 - 16:00', subject: 'Break & Recharge', topic: 'Nature Walk / Meditation', status: 'pending', accent: 'border-slate-300 bg-slate-50' },
                      { time: '16:30 - 18:30', subject: 'Computer Science', topic: 'Distributed Systems', status: 'pending', accent: 'border-slate-300 bg-slate-50' },
                    ].map((task, i) => (
                      <div key={i} className={`flex items-center gap-6 p-6 rounded-3xl border-l-8 transition-all hover:-translate-x-1 ${task.accent}`}>
                        <div className="w-24 text-sm font-bold text-slate-400">{task.time}</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg">{task.subject}</h4>
                          <p className="text-sm font-medium text-slate-500">{task.topic}</p>
                        </div>
                        {task.status === 'completed' && <CheckCircle className="w-6 h-6 text-emerald-500" />}
                        {task.status === 'in-progress' && <div className="w-10 h-10 rounded-xl bg-white border border-indigo-100 flex items-center justify-center animate-pulse"><Play className="w-4 h-4 text-indigo-600 fill-indigo-600" /></div>}
                        {task.status === 'pending' && <button className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">Launch</button>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Pomodoro & Insights */}
              <div className="lg:col-span-4 space-y-10">
                <div className="academic-card p-10 !bg-slate-900 text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-8">
                      <Timer className="w-5 h-5 text-indigo-400" />
                      <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em]">Neural Focus Engine</h2>
                    </div>
                    
                    <div className="text-7xl font-serif font-bold tracking-tighter mb-8 tabular-nums">
                      {Math.floor(pomodoroTime / 60).toString().padStart(2, '0')}:
                      {(pomodoroTime % 60).toString().padStart(2, '0')}
                    </div>

                    <div className="flex gap-4 w-full mb-8">
                      <button 
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        className={`flex-1 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${
                          isTimerRunning ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-500/20'
                        }`}
                      >
                        {isTimerRunning ? 'System Pause' : 'Initialize Focus'}
                      </button>
                      <button className="p-4 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-all">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex justify-center gap-3 w-full">
                      {[25, 15, 5].map((t) => (
                        <button 
                          key={t}
                          onClick={() => setPomodoroTime(t * 60)}
                          className="flex-1 py-3 rounded-xl bg-white/5 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10"
                        >
                          {t}m
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="academic-card p-8 !bg-white">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Personalized Insights</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                        <Lightbulb className="w-5 h-5 text-amber-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-900">Peak Focus Detected</p>
                        <p className="text-xs text-slate-500 leading-relaxed">System analysis suggests your highest cognitive performance is between 9:00 AM and 11:30 AM.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-indigo-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-900">Visual Learning Style</p>
                        <p className="text-xs text-slate-500 leading-relaxed">Neural analysis of your study sessions indicates a 40% higher retention with diagrams and flowcharts.</p>
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
      <div className="absolute top-[10%] -left-[5%] w-[30%] h-[40%] bg-indigo-200/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[40%] bg-amber-200/20 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}

const LayoutDashboard = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);

const CalendarDays = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
);

const Library = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/><path d="M2 20h20"/></svg>
);
