import React, { useState } from 'react';
import { X, Mail, Lock, ShieldCheck, ChevronRight, ChevronLeft } from 'lucide-react';
import ResetPassword from './ResetPassword';

const Login = ({ onClose, onBack }) => {
  const [showReset, setShowReset] = useState(false);

  // If showReset is true, render the ResetPassword component instead
  if (showReset) {
    return <ResetPassword onBack={() => setShowReset(false)} onClose={onClose} />;
  }

  return (
    <div className="p-0 flex flex-col items-center animate-in fade-in duration-300">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-br from-[#A669A8] via-[#8E5D90] to-[#714673] p-8 text-white relative">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 opacity-80 hover:opacity-100 transition-all hover:rotate-90"
        >
          <X size={22} strokeWidth={2.5} />
        </button>
        
        <div className="space-y-0.5 text-left">
          <p className="text-white/70 text-xs font-medium uppercase tracking-wider">Authentication</p>
          <h2 className="text-3xl font-semibold tracking-tight">Welcome Back</h2>
          <p className="text-white/80 text-sm font-light">Dental Checkup & Cleaning</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8 w-full max-w-md space-y-6">
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 bg-[#8E5D90] rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-100">
            <Lock size={28} />
          </div>
          <h3 className="text-2xl font-bold text-[#2D2D2D]">Welcome Back</h3>
          <p className="text-gray-400 text-sm">Login to continue your booking</p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="space-y-1.5 text-left">
            <label className="text-sm font-semibold text-[#4A4A4A] ml-1">Email Address <span className="text-red-500">*</span></label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#8E5D90] transition-colors" size={20} />
              <input 
                type="email" 
                placeholder="john.doe@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8EFF5] rounded-2xl focus:outline-none focus:border-[#8E5D90] focus:ring-4 focus:ring-purple-50 transition-all text-[#2D2D2D]"
              />
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-sm font-semibold text-[#4A4A4A] ml-1">Password <span className="text-red-500">*</span></label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#8E5D90] transition-colors" size={20} />
              <input 
                type="password" 
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8EFF5] rounded-2xl focus:outline-none focus:border-[#8E5D90] focus:ring-4 focus:ring-purple-50 transition-all text-[#2D2D2D]"
              />
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center justify-between text-sm px-1">
          <label className="flex items-center gap-2 cursor-pointer text-gray-500">
            <input type="checkbox" className="w-4 h-4 accent-[#8E5D90] rounded border-gray-300" />
            Remember me
          </label>
          <button 
            onClick={() => setShowReset(true)}
            className="text-[#8E5D90] font-semibold hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* Security Badge */}
        <div className="bg-[#F0F7FF] border border-[#D0E7FF] py-3 px-4 rounded-2xl flex items-center gap-3 text-[#2D2D2D] text-sm">
          <ShieldCheck size={18} className="text-[#3B82F6]" />
          <span>Your credentials are encrypted and secure</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-2 gap-4">
          {/* Back Button: Triggers onBack prop to show Account selection again */}
          <button 
            onClick={onBack}
            className="flex-1 bg-[#F8FAFC] border border-[#E8EFF5] text-[#64748B] px-6 py-3.5 rounded-[20px] font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <ChevronLeft size={20} /> Back
          </button>

          {/* Continue Button */}
          <button className="flex-1 bg-[#8E5D90] text-white px-6 py-3.5 rounded-[20px] font-bold text-lg hover:bg-[#7a4f7c] shadow-lg shadow-purple-100 transition-all flex items-center justify-center gap-2 active:scale-95">
            Continue <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;