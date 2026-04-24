// import React, { useState, useEffect, useRef } from 'react';
// import { Mail, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

// const Verification = ({ onVerify, onBack, generatedCode }) => {
//   const [userOtp, setUserOtp] = useState(new Array(6).fill(""));
//   const [error, setError] = useState(false);
//   const [timer, setTimer] = useState(30);
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     if (generatedCode) {
//       console.log("Active Verification Code:", generatedCode);
//     }
//   }, [generatedCode]);

//   useEffect(() => {
//     let interval;
//     if (timer > 0) {
//       interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//     }
//     return () => clearInterval(interval);
//   }, [timer]);

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (isNaN(value)) return;

//     const newOtp = [...userOtp];
//     newOtp[index] = value.substring(value.length - 1);
//     setUserOtp(newOtp);
//     setError(false);

//     if (value && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && !userOtp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handleVerify = () => {
//     const enteredCode = userOtp.join("");
//     if (enteredCode === generatedCode) {
//       // Use the prop passed from Details.jsx
//       if (typeof onVerify === 'function') {
//         onVerify();
//       }
//     } else {
//       setError(true);
//     }
//   };

//   return (
//     <div className="w-full flex-1 flex flex-col space-y-8 animate-in slide-in-from-right-4 duration-300">
//       <div className="flex flex-col items-center">
//         <div className="w-20 h-20 bg-[#8E5D90] rounded-[24px] flex items-center justify-center text-white mb-6 relative shadow-xl shadow-purple-100">
//           <Mail size={40} strokeWidth={1.5} />
//           <div className="absolute top-0 right-0 w-5 h-5 bg-[#4ADE80] border-4 border-white rounded-full"></div>
//         </div>
//         <h3 className="text-[28px] font-bold text-[#2D2D2D] leading-tight mb-2">Verify Your Email</h3>
//         <p className="text-[#64748B] text-base text-center font-medium">We've sent a 6-digit code to your email</p>
//       </div>

//       <div className="flex flex-col items-center gap-8 w-full">
//         <p className="text-[11px] font-bold text-[#4A4A4A] uppercase tracking-[0.2em]">Enter Verification Code</p>
//         <div className="flex justify-between w-full max-w-[500px] gap-3">
//           {userOtp.map((digit, index) => (
//             <input
//               key={index}
//               ref={(el) => (inputRefs.current[index] = el)}
//               type="text"
//               inputMode="numeric"
//               maxLength={1}
//               value={digit}
//               onChange={(e) => handleChange(e, index)}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//               className={`w-full aspect-square text-center text-2xl font-bold border-2 rounded-2xl outline-none transition-all ${
//                 error 
//                   ? 'border-red-500 bg-red-50 text-red-600 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]' 
//                   : 'border-[#E8EFF5] focus:border-[#8E5D90] focus:ring-4 focus:ring-[#8E5D90]/5 bg-white text-[#2D2D2D]'
//               }`}
//             />
//           ))}
//         </div>
//         <div className="text-center">
//           <p className="text-[#64748B] text-sm">Didn't receive the code?</p>
//           <button type="button" className="text-[#8E5D90] font-bold text-sm mt-1">Resend Code {timer > 0 && `(0:${timer < 10 ? `0${timer}` : timer})`}</button>
//         </div>
//       </div>

//       <div className="w-full bg-[#F0F7FF] border border-[#E0E7FF] py-5 px-6 rounded-2xl flex items-center gap-4 text-[#1E40AF] text-sm font-medium">
//         <Sparkles size={22} className="shrink-0 text-[#3B82F6]" />
//         <span>Check your spam folder if you don't see the email in your inbox</span>
//       </div>

//       <div className="flex justify-between items-center pt-6 gap-4 w-full mt-auto">
//         <button 
//           onClick={onBack} 
//           type="button"
//           className="flex-1 bg-white border border-[#E8EFF5] text-[#64748B] px-6 py-5 rounded-[22px] font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center"
//         >
//           <ChevronLeft className="mr-2" size={20} /> Back
//         </button>
//         <button 
//           onClick={handleVerify} 
//           type="button"
//           className="flex-1 bg-[#8E5D90] text-white px-6 py-5 rounded-[22px] font-bold text-base hover:bg-[#7a4f7c] shadow-lg shadow-purple-200 transition-all flex items-center justify-center"
//         >
//           Verify & Continue <ChevronRight className="ml-2" size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Verification;


import React, { useState, useEffect, useRef } from 'react';
import { Mail, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

const Verification = ({ onVerify, onBack, generatedCode }) => {
  const [userOtp, setUserOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef<HTMLInputElement[]>([]); // ✅ typed properly

  useEffect(() => {
    if (generatedCode) {
      console.log("Active Verification Code:", generatedCode);
    }
  }, [generatedCode]);

  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...userOtp];
    newOtp[index] = value.substring(value.length - 1);
    setUserOtp(newOtp);
    setError(false);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !userOtp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = userOtp.join("");
    if (enteredCode === generatedCode) {
      if (typeof onVerify === 'function') {
        onVerify();
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col space-y-8 animate-in slide-in-from-right-4 duration-300">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-[#8E5D90] rounded-[24px] flex items-center justify-center text-white mb-6 relative shadow-xl shadow-purple-100">
          <Mail size={40} strokeWidth={1.5} />
          <div className="absolute top-0 right-0 w-5 h-5 bg-[#4ADE80] border-4 border-white rounded-full"></div>
        </div>
        <h3 className="text-[28px] font-bold text-[#2D2D2D] leading-tight mb-2">Verify Your Email</h3>
        <p className="text-[#64748B] text-base text-center font-medium">We've sent a 6-digit code to your email</p>
      </div>

      <div className="flex flex-col items-center gap-8 w-full">
        <p className="text-[11px] font-bold text-[#4A4A4A] uppercase tracking-[0.2em]">Enter Verification Code</p>
        <div className="flex justify-between w-full max-w-[500px] gap-3">
          {userOtp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el!; }} // ✅ FIXED HERE
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-full aspect-square text-center text-2xl font-bold border-2 rounded-2xl outline-none transition-all ${
                error 
                  ? 'border-red-500 bg-red-50 text-red-600 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]' 
                  : 'border-[#E8EFF5] focus:border-[#8E5D90] focus:ring-4 focus:ring-[#8E5D90]/5 bg-white text-[#2D2D2D]'
              }`}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#64748B] text-sm">Didn't receive the code?</p>
          <button type="button" className="text-[#8E5D90] font-bold text-sm mt-1">
            Resend Code {timer > 0 && `(0:${timer < 10 ? `0${timer}` : timer})`}
          </button>
        </div>
      </div>

      <div className="w-full bg-[#F0F7FF] border border-[#E0E7FF] py-5 px-6 rounded-2xl flex items-center gap-4 text-[#1E40AF] text-sm font-medium">
        <Sparkles size={22} className="shrink-0 text-[#3B82F6]" />
        <span>Check your spam folder if you don't see the email in your inbox</span>
      </div>

      <div className="flex justify-between items-center pt-6 gap-4 w-full mt-auto">
        <button 
          onClick={onBack} 
          type="button"
          className="flex-1 bg-white border border-[#E8EFF5] text-[#64748B] px-6 py-5 rounded-[22px] font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center"
        >
          <ChevronLeft className="mr-2" size={20} /> Back
        </button>

        <button 
          onClick={handleVerify} 
          type="button"
          className="flex-1 bg-[#8E5D90] text-white px-6 py-5 rounded-[22px] font-bold text-base hover:bg-[#7a4f7c] shadow-lg shadow-purple-200 transition-all flex items-center justify-center"
        >
          Verify & Continue <ChevronRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Verification;