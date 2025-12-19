'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GraduationCap } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <GraduationCap className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
        <h1 className="text-2xl font-bold">Login to Scholar Platform</h1>
        <p className="text-slate-500">Academic Ivy Theme</p>
        <button 
          onClick={() => router.push('/')}
          className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Enter Dashboard
        </button>
      </div>
    </div>
  );
}
