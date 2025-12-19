'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  BookOpen, 
  FileSearch, 
  Package, 
  Bell, 
  Award, 
  Newspaper,
  LayoutDashboard,
  Search,
  User,
  GraduationCap
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Exam Prep', href: '/exam-prep', icon: BookOpen },
    { name: 'Documents', href: '/documents', icon: FileSearch },
    { name: 'Lost & Found', href: '/lost-found', icon: Package },
    { name: 'Rewards', href: '/rewards', icon: Award },
    { name: 'News', href: '/news', icon: Newspaper },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200 transition-transform"
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-slate-900 tracking-tight leading-none">Scholar</span>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-white text-indigo-600 shadow-sm border border-slate-200'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'group-hover:scale-110 transition-transform duration-300'}`} />
                  <span className="text-sm font-bold tracking-tight">{item.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white rounded-xl -z-10 shadow-sm border border-slate-200"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className={`relative group hidden xl:block transition-all duration-500 ${isSearchFocused ? 'w-64' : 'w-48'}`}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full bg-slate-100/80 border border-slate-200/50 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500/30 focus:bg-white transition-all"
              />
            </div>

            <div className="flex items-center gap-2">
              <Link href="/notifications" className="relative p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-indigo-600 transition-all group">
                <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
              </Link>
              
              <Link href="/profile" className="flex items-center gap-3 p-1.5 pr-4 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-600 border border-slate-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                  S
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors hidden sm:block">Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
