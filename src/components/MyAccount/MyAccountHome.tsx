
import React, { useState } from 'react';
import { User, Mail, Phone, Edit2, X, Save, Check } from 'lucide-react';

const MyAccountHome: React.FC = () => {
  // State for toggling edit mode for the main profile
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  
  // State for profile data
  const [profile, setProfile] = useState({
    fullName: "",
    contact: "",
    email: ""
  });

  // State for toggling "Add Member" form
  const [isAddingMember, setIsAddingMember] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FDFCFD] py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="w-12 h-12 bg-[#8E5D90] rounded-full flex items-center justify-center text-white mb-4">
          <User size={24} />
        </div>
        <h1 className="text-3xl font-bold text-[#1A202C] mb-1">My Account</h1>
        <p className="text-gray-500 text-sm mb-8">Manage your profile and family information</p>

        {/* Profile Avatar */}
        <div className="relative mb-12">
          <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
            <User size={48} className="text-gray-400" />
          </div>
          <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5 hover:bg-gray-50">
            <span className="text-[10px] font-bold text-gray-600 uppercase">Edit</span>
            <Edit2 size={10} className="text-gray-400" />
          </button>
        </div>

        {/* My Profile Card */}
        <div className="w-full bg-white rounded-[32px] shadow-xl shadow-gray-100/50 p-8 border border-gray-50 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
                <User size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#1A202C]">My Profile</h3>
            </div>
            
            {/* Toggle Edit/Save Button */}
            <button 
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className={`${isEditingProfile ? 'bg-[#8E5D90] text-white' : 'bg-[#F1F5F9] text-gray-600'} px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2`}
            >
              {isEditingProfile ? <><Check size={14} /> Save Changes</> : 'Edit'}
            </button>
          </div>

          <div className="space-y-6">
            {/* Full Name Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  name="fullName"
                  type="text" 
                  placeholder='Enter Your Name'
                  value={profile.fullName}
                  onChange={handleProfileChange}
                  disabled={!isEditingProfile}
                  className={`w-full border rounded-2xl py-3.5 pl-12 pr-4 transition-all ${
                    isEditingProfile ? 'border-[#8E5D90] bg-white ring-4 ring-[#8E5D90]/5' : 'border-gray-100 bg-gray-50/30'
                  }`}
                />
              </div>
            </div>

            {/* Contact Number Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 ml-1">Contact Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  name="contact"
                  type="text" 
                  placeholder='Enter Contact'
                  value={profile.contact}
                  onChange={handleProfileChange}
                  disabled={!isEditingProfile}
                  className={`w-full border rounded-2xl py-3.5 pl-12 pr-4 transition-all ${
                    isEditingProfile ? 'border-[#8E5D90] bg-white ring-4 ring-[#8E5D90]/5' : 'border-gray-100 bg-gray-50/30'
                  }`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  name="email"
                  type="email" 
                  placeholder='Enter Email'
                  value={profile.email}
                  onChange={handleProfileChange}
                  disabled={!isEditingProfile}
                  className={`w-full border rounded-2xl py-3.5 pl-12 pr-4 transition-all ${
                    isEditingProfile ? 'border-[#8E5D90] bg-white ring-4 ring-[#8E5D90]/5' : 'border-gray-100 bg-gray-50/30'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Family Details Card */}
        <div className="w-full bg-white rounded-[32px] shadow-xl shadow-gray-100/50 p-8 border border-gray-50">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
                <User size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#1A202C]">Family Details</h3>
            </div>
            {!isAddingMember && (
              <button 
                onClick={() => setIsAddingMember(true)}
                className="bg-[#8E5D90] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                Add Member
              </button>
            )}
          </div>

          {!isAddingMember ? (
            <div className="border border-gray-100 rounded-2xl p-5 flex items-center justify-between group">
              <div>
                <h4 className="font-bold text-gray-700"></h4>
                <p className="text-gray-400 text-sm"></p>
              </div>
              <button className="text-red-400 hover:text-red-600 transition-colors">
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="font-bold text-[#1A202C]">Add New Family Member</h4>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 ml-1">Full Name</label>
                <input type="text" placeholder="Enter family member name" className="w-full border border-gray-200 rounded-2xl py-3.5 px-5 outline-none focus:border-[#8E5D90]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 ml-1">Contact Number</label>
                <input type="text" placeholder="Enter contact number" className="w-full border border-gray-200 rounded-2xl py-3.5 px-5 outline-none focus:border-[#8E5D90]" />
              </div>
              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-[#8E5D90] text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#7a4f7c]">
                  <Save size={18} /> Save
                </button>
                <button onClick={() => setIsAddingMember(false)} className="flex-1 border-2 border-[#8E5D90]/20 text-[#8E5D90] py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50">
                  <X size={18} /> Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccountHome;