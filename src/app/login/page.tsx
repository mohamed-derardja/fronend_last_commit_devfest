'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  ArrowRight, 
  Eye, 
  EyeOff,
  ShieldCheck,
  Zap,
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
        <header className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-[2rem] mb-6 shadow-2xl shadow-indigo-200"
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
            className="text-slate-500 font-medium text-lg"
          >
            Identify your role to access the neural ecosystem ✨
          </motion.p>
        </header>

        {!selectedRole ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className="group academic-card p-10 !bg-white text-left flex flex-col justify-between h-[450px]"
              >
                <div>
                  <div className={`w-16 h-16 rounded-3xl ${role.accent} flex items-center justify-center mb-8`}>
                    <role.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    {role.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-[0.2em]">
                  Initialize Identity
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="academic-card p-12 !bg-white">
              <button
                onClick={() => setSelectedRole(null)}
                className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Reset Identity selection
              </button>

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
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Access Protocol (Password)
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest"
                >
                  Authenticate Identity
                </button>
              </form>
            </div>
          </div>
        )}

        <footer className="text-center mt-12">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            © 2025 Scholar Platform Ecosystem • Batna 2 University
          </p>
        </footer>
      </div>
    </div>
  );
}
