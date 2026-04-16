import React from 'react';
import { User, Calendar, Star, MessageSquare, Heart, ThumbsUp, ShieldCheck } from 'lucide-react';

const FeedBackFormHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFD] font-sans pb-20">
      {/* Top Header Section with Gradient */}
      <div className="w-full bg-gradient-to-br h-[50vh] from-[#984A91] via-[#8E5D90] to-[#984A91] py-20 px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium mb-6 border border-white/20 uppercase tracking-widest">
          <MessageSquare size={14} /> Patient Feedback
        </div>
        <h1 className="text-5xl font-bold mb-4">We Value Your Opinion</h1>
        <p className="max-w-2xl mx-auto text-purple-100 leading-relaxed opacity-90">
          Your feedback helps us improve our services and provide the best possible dental care experience. 
          Please take a moment to share your thoughts.
        </p>
      </div>

      {/* Main Form Container */}
      <div className="max-w-4xl mx-auto px-6 ">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-purple-200/50 p-10 md:p-16 border border-purple-50">
          
          {/* Section 1: Personal Information */}
          <div className="mb-12">
            <h3 className="text-[#8E5D90] font-bold flex items-center gap-3 mb-8 text-xl">
              <User size={22} /> Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 ml-1">Full Name*</label>
                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#8E5D90]/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 ml-1">Email Address*</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#8E5D90]/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 ml-1">Phone Number</label>
                <input type="text" placeholder="+91 23456 78910" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#8E5D90]/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 ml-1">Visit Date*</label>
                <input type="date" className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8E5D90]/20 transition-all" />
              </div>
            </div>
          </div>

          {/* Section 2: Visit Details */}
          <div className="mb-12">
            <h3 className="text-[#8E5D90] font-bold flex items-center gap-3 mb-8 text-xl">
              <Calendar size={22} /> Visit Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 ml-1">Service Received*</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#8E5D90]/20 transition-all appearance-none text-gray-500">
                  <option>Select Service</option>
                  <option>Teeth Whitening</option>
                  <option>Dental Implants</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 ml-1">Doctor*</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#8E5D90]/20 transition-all appearance-none text-gray-500">
                  <option>Select Doctor</option>
                  <option>Dr. Sarah Johnson</option>
                  <option>Dr. Ramesh Kumar</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Overall Experience */}
          <div className="mb-12">
            <h3 className="text-[#8E5D90] font-bold flex items-center gap-3 mb-4 text-xl">
              <Star size={22} /> Overall Experience
            </h3>
            <p className="text-sm text-gray-400 mb-6">How would you rate your overall experience?</p>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={32} className="text-gray-200 cursor-pointer hover:text-yellow-400 transition-colors" />
              ))}
            </div>
          </div>

          {/* Section 4: Your Feedback */}
          <div className="mb-12">
            <h3 className="text-[#8E5D90] font-bold flex items-center gap-3 mb-4 text-xl">
              <MessageSquare size={22} /> Your Feedback
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500">Please share your experience with us:*</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your visit - the quality of care, staff behavior, facility cleanliness..." 
                  className="w-full bg-gray-50 border border-gray-100 rounded-3xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#8E5D90]/20 transition-all"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-500 block">Would you recommend Orchid Dental Care to others?*</label>
                <div className="flex flex-wrap gap-4">
                  {['Yes, Definitely!', 'Maybe', 'No'].map((option) => (
                    <button key={option} className="px-8 py-3 rounded-full border border-gray-100 bg-gray-50 text-gray-500 text-sm font-medium hover:bg-purple-50 hover:border-purple-200 transition-all active:scale-95">
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500">How can we improve? (Optional)</label>
                <textarea 
                  rows={3} 
                  placeholder="Share any suggestions for improvement..." 
                  className="w-full bg-gray-50 border border-gray-100 rounded-3xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#8E5D90]/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#C9A9C9] hover:bg-[#B896B8] text-white font-bold py-5 rounded-full shadow-lg shadow-purple-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            Submit Feedback <ThumbsUp size={18} />
          </button>
          <p className="text-center text-xs text-gray-400 mt-6 italic">
            Your feedback remains confidential and will be used to improve our services.
          </p>
        </div>
      </div>

      {/* Bottom Information Section */}
      <div className="max-w-5xl mx-auto px-6 mt-24 text-center">
        <h2 className="text-3xl font-bold text-[#2D2D2D] mb-16">Why Your Feedback Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-[#8E5D90] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-200">
              <Star size={28} />
            </div>
            <h4 className="font-bold text-lg mb-3">Improve Quality</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Your insights help us enhance our environment and maintain the highest standards of dental care.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-[#8E5D90] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-200">
              <Heart size={28} />
            </div>
            <h4 className="font-bold text-lg mb-3">Patient-Centered</h4>
            <p className="text-gray-500 text-sm leading-relaxed">We listen to your needs and continually adapt our approach to provide personalized care.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-[#8E5D90] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-200">
              <ShieldCheck size={28} />
            </div>
            <h4 className="font-bold text-lg mb-3">Build Trust</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Your reviews help other patients make informed decisions about their dental care.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackFormHome;