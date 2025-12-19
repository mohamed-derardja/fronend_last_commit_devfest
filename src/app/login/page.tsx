'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Building2, 
  ArrowRight, 
  Eye, 
  EyeOff,
  ShieldCheck,
  Zap,
  Sparkles,
  Library,
  ChevronRight
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'staff' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    {
      id: 'student' as const,
      title: 'Student Scholar',
      description: 'Access neural study tools, merit rewards, and campus archives.',
      icon: GraduationCap,
      accent: 'bg-indigo-50 text-indigo-600',
      features: ['AI Study Assistant', 'Found & Verified', 'Academic Merit']
    },
    {
      id: 'teacher' as const,
      title: 'Faculty Member',
      description: 'Coordinate curriculum, evaluate performance, and manage streams.',
      icon: Library,
      accent: 'bg-emerald-50 text-emerald-600',
      features: ['Course Intelligence', 'Merit Approval', 'Analytics Hub']
    },
    {
      id: 'staff' as const,
      title: 'University Admin',
      description: 'System-wide infrastructure and campus intelligence management.',
      icon: ShieldCheck,
      accent: 'bg-rose-50 text-rose-600',
      features: ['Access Control', 'Alert Propagation', 'Data Synthesis']
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('userRole', selectedRole || 'student');
      localStorage.setItem('userEmail', email);
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative flex items-center justify-center p-6 overflow-hidden">
      <div className="ivy-mesh" />
      <div className="grain" />
      
      <div className="relative w-full max-w-6xl z-10">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-[2rem] mb-6 shadow-2xl shadow-indigo-200 transform hover:rotate-6 transition-transform duration-500"
          >
            <GraduationCap className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-serif font-bold text-slate-900 tracking-tight"
          >
            Scholar <span className="text-indigo-600">Platform</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-lg"
          >
            Identify your role to access the neural ecosystem ✨
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {!selectedRole ? (
            /* Role Selection */
            <motion.div 
              key="role-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className="group academic-card p-10 !bg-white text-left flex flex-col justify-between h-[450px]"
                  >
                    <div>
                      <div className={`w-16 h-16 rounded-3xl ${role.accent} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-slate-500 font-medium leading-relaxed mb-8">
                        {role.description}
                      </p>
                      <div className="space-y-4">
                        {role.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shadow-sm" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                      Initialize Identity
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            /* Login Form */
            <motion.div 
              key="login-form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-lg mx-auto"
            >
              <div className="academic-card p-12 !bg-white">
                <button
                  onClick={() => setSelectedRole(null)}
                  className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600 mb-10 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Reset Identity selection
                </button>

                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${
                    roles.find(r => r.id === selectedRole)?.accent
                  } rounded-3xl mb-6 shadow-sm`}>
                    {(() => {
                      const Icon = roles.find(r => r.id === selectedRole)?.icon;
                      return Icon ? <Icon className="w-10 h-10" /> : null;
                    })()}
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">
                    {roles.find(r => r.id === selectedRole)?.title}
                  </h2>
                  <p className="text-slate-500 font-medium">
                    Input your credentials for synchronization
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Neural Identifier (Email)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., scholar@university.dz"
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500/30 transition-all outline-none font-medium text-slate-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Access Protocol (Password)
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500/30 transition-all outline-none font-medium text-slate-700 pr-14"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-1">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded-md border border-slate-200 bg-slate-50 group-hover:border-indigo-400 transition-colors flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-indigo-600 rounded-sm opacity-0 group-hover:opacity-10 transition-opacity" />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Persist Session</span>
                    </label>
                    <a href="#" className="text-xs font-bold text-indigo-600 uppercase tracking-widest hover:underline">
                      Recover Protocol
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    Authenticate Identity
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Demo Intelligence */}
                <div className="mt-12 p-6 bg-indigo-50 border border-indigo-100 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-4 h-4 text-indigo-600" />
                    <p className="text-[10px] font-bold text-indigo-900 uppercase tracking-widest">Demo Credentials</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-indigo-700">Email: demo@university.dz</p>
                    <p className="text-xs font-medium text-indigo-700">Password: demo123</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Global Footer */}
        <footer className="text-center mt-12">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            © 2025 Scholar Platform Ecosystem • Batna 2 University
          </p>
        </footer>
      </div>

      <style jsx global>{`
        .ivy-mesh {
          background: 
            radial-gradient(circle at 0% 0%, rgba(224, 231, 255, 0.4) 0, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(254, 249, 195, 0.3) 0, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(241, 245, 249, 1) 0, transparent 100%);
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .grain {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
