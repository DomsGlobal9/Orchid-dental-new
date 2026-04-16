import React, { useState } from 'react';
import { X, ShieldCheck, Sparkles, User, FileText, ChevronRight } from 'lucide-react';
import Login from './Login';
import Details from './Details'; // Import the new component

const Account = ({ isOpen, onClose }) => {
  const [view, setView] = useState('selection');

  if (!isOpen) return null;

  const steps = [
    { id: 1, label: 'Account', active: true },
    { id: 2, label: 'Details', active: false },
    { id: 3, label: 'Schedule', active: false },
    { id: 4, label: 'Finalize', active: false },
    { id: 5, label: 'Payment', active: false },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-[500px] bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {view === 'selection' && (
          <>
            <div className="bg-gradient-to-br from-[#A669A8] via-[#8E5D90] to-[#714673] p-8 text-white relative">
              <button onClick={onClose} className="absolute right-6 top-6 opacity-80 hover:opacity-100 transition-all hover:rotate-90">
                <X size={22} strokeWidth={2.5} />
              </button>

              <div className="flex items-center justify-center w-full mb-8">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center gap-1.5 relative">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step.active ? 'bg-white text-[#8E5D90] shadow-lg' : 'bg-white/20 text-white/60'}`}>
                        {step.id}
                      </div>
                      <span className={`text-[10px] font-medium uppercase tracking-widest ${step.active ? 'text-white' : 'text-white/40'}`}>
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && <div className="w-12 h-[1px] bg-white/20 mb-5 mx-1" />}
                  </React.Fragment>
                ))}
              </div>

              <div className="space-y-0.5 text-left">
                <p className="text-white/70 text-xs font-medium uppercase tracking-wider">Step 1 of 4</p>
                <h2 className="text-3xl font-semibold tracking-tight">Let's Get Started</h2>
                <p className="text-white/80 text-sm font-light">Dental Check Ups & Cleaning</p>
              </div>

              <div className="w-full h-[5px] bg-white/10 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-500" style={{ width: '25%' }} />
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-5 text-[#4A4A4A] text-sm font-medium">
                  <User size={16} className="text-[#8E5D90]" />
                  <span>Do you have an account?</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => setView('login')} className="flex flex-col items-start p-5 rounded-[24px] border-[1.5px] border-[#E8EFF5] hover:border-[#8E5D90] hover:bg-[#FDF9FE] transition-all group">
                    <div className="p-2.5 bg-[#F8FAFC] rounded-xl mb-3 group-hover:bg-white transition-colors">
                      <ShieldCheck size={24} className="text-[#94A3B8] group-hover:text-[#8E5D90]" />
                    </div>
                    <h4 className="font-bold text-[#2D2D2D] text-base">Yes, I do</h4>
                    <p className="text-[#94A3B8] text-xs">Login to your account</p>
                  </button>

                  <button onClick={() => setView('details')} className="flex flex-col items-start p-5 rounded-[24px] border-[1.5px] border-[#E8EFF5] hover:border-[#8E5D90] hover:bg-[#FDF9FE] transition-all group">
                    <div className="p-2.5 bg-[#F8FAFC] rounded-xl mb-3 group-hover:bg-white transition-colors">
                      <Sparkles size={24} className="text-[#94A3B8] group-hover:text-[#8E5D90]" />
                    </div>
                    <h4 className="font-bold text-[#2D2D2D] text-base">No, I don't</h4>
                    <p className="text-[#94A3B8] text-xs">Create a new account</p>
                  </button>
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2 mb-5 text-[#4A4A4A] text-sm font-medium">
                  <FileText size={16} className="text-[#8E5D90]" />
                  <span>Have you visited us before?</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 rounded-xl border-[1.5px] border-[#E8EFF5] font-bold text-[#64748B] text-sm hover:border-[#8E5D90] hover:text-[#8E5D90] transition-all">Yes</button>
                  <button className="py-4 rounded-xl border-[1.5px] border-[#E8EFF5] font-bold text-[#64748B] text-sm hover:border-[#8E5D90] hover:text-[#8E5D90] transition-all">No, First Visit</button>
                </div>
              </div>

              <div className="flex justify-end pt-5 border-t border-[#F8FAFC]">
                <button className="flex items-center gap-2 bg-[#D9BBD9] text-white px-9 py-3.5 rounded-[18px] font-bold text-base hover:bg-[#8E5D90] shadow-sm transition-all active:scale-95">
                  Continue <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </>
        )}

        {view === 'login' && <Login onClose={onClose} onBack={() => setView('selection')} />}
        {view === 'details' && <Details onClose={onClose} onBack={() => setView('selection')} />}
      </div>
    </div>
  );
};

export default Account;