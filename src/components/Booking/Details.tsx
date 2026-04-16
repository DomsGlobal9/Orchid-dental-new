import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Sparkles, User, Mail, Phone } from 'lucide-react';
import Verification from './Verification';
import Schedule from './Schedule'; // Ensure the filename matches your import

const Details = ({ onClose, onBack }) => {
  // views: 'account' | 'verify' | 'schedule'
  const [view, setView] = useState('account');
  const [generatedCode, setGeneratedCode] = useState(null);

  // Dynamic progress based on view
  const getProgress = () => {
    if (view === 'account') return '25%';
    if (view === 'verify') return '40%';
    if (view === 'schedule') return '60%';
    return '25%';
  };

  const steps = [
    { id: 1, label: 'Account', active: view === 'account' || view === 'verify' },
    { id: 2, label: 'Details', active: view === 'schedule' },
    { id: 3, label: 'Schedule', active: false },
    { id: 4, label: 'Finalize', active: false },
    { id: 5, label: 'Payment', active: false },
  ];

  const handleContinueToVerify = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    console.log("Verification Code:", code);
    setView('verify');
  };

  // This function is triggered when OTP is correct
  const handleVerifySuccess = () => {
    setView('schedule');
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300 max-h-[90vh] w-full max-w-[500px] bg-white rounded-[32px] overflow-hidden shadow-2xl border border-gray-100">
      
      {/* Header Section */}
      <div className="w-full bg-gradient-to-br from-[#A669A8] via-[#8E5D90] to-[#714673] pt-8 pb-6 px-8 text-white relative">
        <button onClick={onClose} className="absolute right-6 top-6 opacity-60 hover:opacity-100 transition-all">
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Stepper */}
        <div className="flex items-center justify-center w-full mb-6">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-1.5 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${step.active ? 'bg-white text-[#8E5D90]' : 'bg-white/20 text-white/60'}`}>
                  {step.id}
                </div>
                <span className={`text-[9px] font-medium uppercase tracking-[0.1em] ${step.active ? 'text-white' : 'text-white/40'}`}>
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && <div className="w-10 h-[1px] bg-white/20 mb-5 mx-1" />}
            </React.Fragment>
          ))}
        </div>
        
        <div className="space-y-0.5">
          <p className="text-white/60 text-[10px] font-medium uppercase tracking-wider">
            {view === 'schedule' ? 'Step 2 of 5' : 'Step 1 of 5'}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {view === 'schedule' ? 'Schedule Visit' : "Let's Get Started"}
          </h2>
          <p className="text-white/80 text-xs font-light">Dental Check Ups & Cleaning</p>
        </div>

        <div className="w-full h-[4px] bg-white/10 rounded-full mt-5 overflow-hidden">
          <div className="h-full bg-white rounded-full transition-all duration-700" style={{ width: getProgress() }} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-8 w-full overflow-y-auto custom-scrollbar">
        {view === 'account' && (
          <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
             <div className="flex flex-col items-center mb-2">
               <div className="w-12 h-12 bg-[#8E5D90] rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg shadow-purple-100">
                 <Sparkles size={24} />
               </div>
               <h3 className="text-xl font-bold text-[#2D2D2D]">Create Account</h3>
               <p className="text-gray-400 text-xs">Fill in your details to get started</p>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <InputField label="First Name" icon={<User size={18} />} placeholder="John" />
               <InputField label="Last Name" icon={<User size={18} />} placeholder="Doe" />
             </div>

             <InputField label="Email Address" icon={<Mail size={18} />} placeholder="john.doe@example.com" type="email" />
             <InputField label="Phone Number" icon={<Phone size={18} />} placeholder="+61 4XX XXX XXX" />

             <div className="bg-[#FFF9F2] border border-[#FFE4C4] py-3 px-4 rounded-2xl flex items-center gap-3 text-[#B45309] text-[11px]">
               <Mail size={16} className="shrink-0" />
               <span>We'll send a verification code to confirm your account</span>
             </div>

             <div className="flex justify-between items-center pt-2 gap-4">
               <button onClick={onBack} className="flex-1 bg-white border border-[#E8EFF5] text-[#64748B] px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                 <ChevronLeft size={18} /> Back
               </button>
               <button onClick={handleContinueToVerify} className="flex-1 bg-[#8E5D90] text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#7a4f7c] shadow-lg shadow-purple-100 transition-all flex items-center justify-center gap-2">
                 Continue <ChevronRight size={18} />
               </button>
             </div>
          </div>
        )}

        {view === 'verify' && (
          <Verification 
            generatedCode={generatedCode} 
            onBack={() => setView('account')} 
            onVerify={handleVerifySuccess} 
          />
        )}

        {view === 'schedule' && (
          <Schedule 
            onBack={() => setView('verify')} 
            onNext={() => alert("Moving to Finalize step...")} 
          />
        )}
      </div>
    </div>
  );
};

const InputField = ({ label, icon, placeholder, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-bold text-[#4A4A4A] ml-1 uppercase tracking-wider">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="relative group">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#8E5D90] transition-colors">
        {icon}
      </span>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8EFF5] rounded-2xl focus:ring-2 focus:ring-[#8E5D90]/10 focus:border-[#8E5D90] outline-none text-sm transition-all" 
      />
    </div>
  </div>
);

export default Details;