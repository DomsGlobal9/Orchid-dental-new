import React from 'react';
import { Key, User, Phone, Hash, Lock, ShieldCheck, ChevronRight, ArrowLeft } from 'lucide-react';

const ResetPassword = ({ onBack }) => {
  return (
    <div className="p-8 w-full max-w-lg mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Icon & Header */}
      <div className="flex flex-col items-center mb-2">
        <div className="w-14 h-14 bg-[#8E5D90] rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-100">
          <Key size={28} />
        </div>
        <h3 className="text-2xl font-bold text-[#2D2D2D]">Reset Password</h3>
        <p className="text-gray-400 text-sm">Enter your details to reset your password</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5 text-left">
          <label className="text-sm font-semibold text-[#4A4A4A] ml-1">Full Name <span className="text-red-500">*</span></label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8EFF5] rounded-2xl focus:outline-none focus:border-[#8E5D90] transition-all" />
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5 text-left">
          <label className="text-sm font-semibold text-[#4A4A4A] ml-1">Phone Number <span className="text-red-500">*</span></label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            <input type="text" placeholder="0412 345 678" className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8EFF5] rounded-2xl focus:outline-none focus:border-[#8E5D90] transition-all" />
          </div>
        </div>

        {/* Verification Code + Send OTP */}
        <div className="space-y-1.5 text-left">
          <label className="text-sm font-semibold text-[#4A4A4A] ml-1">Verification Code <span className="text-red-500">*</span></label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
              <input type="text" placeholder="Enter OTP" className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8EFF5] rounded-2xl focus:outline-none focus:border-[#8E5D90] transition-all" />
            </div>
            <button className="bg-[#D9BBD9] hover:bg-[#8E5D90] text-white px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap">
              Send OTP
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="space-y-1.5 text-left">
          <label className="text-sm font-semibold text-[#4A4A4A] ml-1">New Password <span className="text-red-500">*</span></label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            <input type="password" placeholder="Enter new password" className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8EFF5] rounded-2xl focus:outline-none focus:border-[#8E5D90] transition-all" />
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="space-y-1.5 text-left">
          <label className="text-sm font-semibold text-[#4A4A4A] ml-1">Confirm New Password <span className="text-red-500">*</span></label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
            <input type="password" placeholder="Re-enter new password" className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8EFF5] rounded-2xl focus:outline-none focus:border-[#8E5D90] transition-all" />
          </div>
        </div>
      </div>

      {/* Main Action Button */}
      <button className="w-full bg-[#8E5D90] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#7a4f7c] shadow-lg shadow-purple-100 transition-all flex items-center justify-center gap-2">
        Reset Password <ChevronRight size={20} />
      </button>

      {/* Back to Login Link */}
      <button 
        onClick={onBack}
        className="flex items-center justify-center gap-2 text-gray-500 hover:text-[#8E5D90] font-medium transition-colors w-full"
      >
        <ArrowLeft size={16} /> Back to Login
      </button>

      {/* Footer Security Badge */}
      <div className="bg-[#F0F7FF] border border-[#D0E7FF] py-3 px-4 rounded-2xl flex items-center gap-3 text-[#2D2D2D] text-sm">
        <ShieldCheck size={18} className="text-[#3B82F6]" />
        <span>Your password will be encrypted and securely stored</span>
      </div>
    </div>
  );
};

export default ResetPassword;