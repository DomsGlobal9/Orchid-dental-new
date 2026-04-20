
// import React, { useState } from 'react';
// import { User, Mail, Phone, Edit2, X, Save, Check } from 'lucide-react';

// const MyAccountHome: React.FC = () => {
//   // State for toggling edit mode for the main profile
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
  
//   // State for profile data
//   const [profile, setProfile] = useState({
//     fullName: "",
//     contact: "",
//     email: ""
//   });

//   // State for toggling "Add Member" form
//   const [isAddingMember, setIsAddingMember] = useState(false);

//   const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-[#FDFCFD]  py-12 px-4 font-sans">
//       <div className="max-w-3xl mx-auto flex flex-col items-center">
        
//         {/* Header Section */}
//         <div className="w-12 h-12 bg-[#8E5D90] rounded-full flex items-center justify-center text-white mb-4">
//           <User size={24} />
//         </div>
//         <h1 className="text-3xl font-bold text-[#1A202C] mb-1">My Account</h1>
//         <p className="text-gray-500 text-sm mb-8">Manage your profile and family information</p>

//         {/* Profile Avatar */}
//         <div className="relative mb-12">
//           <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
//             <User size={48} className="text-gray-400" />
//           </div>
//           <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5 hover:bg-gray-50">
//             <span className="text-[10px] font-bold text-gray-600 uppercase">Edit</span>
//             <Edit2 size={10} className="text-gray-400" />
//           </button>
//         </div>

//         {/* My Profile Card */}
//         <div className="w-full bg-white rounded-[32px] shadow-xl shadow-gray-100/50 p-8 border border-gray-50 mb-8">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
//                 <User size={18} />
//               </div>
//               <h3 className="text-lg font-bold text-[#1A202C]">My Profile</h3>
//             </div>
            
//             {/* Toggle Edit/Save Button */}
//             <button 
//               onClick={() => setIsEditingProfile(!isEditingProfile)}
//               className={`${isEditingProfile ? 'bg-[#8E5D90] text-white' : 'bg-[#F1F5F9] text-gray-600'} px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2`}
//             >
//               {isEditingProfile ? <><Check size={14} /> Save Changes</> : 'Edit'}
//             </button>
//           </div>

//           <div className="space-y-6">
//             {/* Full Name Field */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-400 ml-1">Full Name</label>
//               <div className="relative">
//                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
//                 <input 
//                   name="fullName"
//                   type="text" 
//                   placeholder='Enter Your Name'
//                   value={profile.fullName}
//                   onChange={handleProfileChange}
//                   disabled={!isEditingProfile}
//                   className={`w-full border rounded-2xl py-3.5 pl-12 pr-4 transition-all ${
//                     isEditingProfile ? 'border-[#8E5D90] bg-white ring-4 ring-[#8E5D90]/5' : 'border-gray-100 bg-gray-50/30'
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Contact Number Field */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-400 ml-1">Contact Number</label>
//               <div className="relative">
//                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
//                 <input 
//                   name="contact"
//                   type="text" 
//                   placeholder='Enter Contact'
//                   value={profile.contact}
//                   onChange={handleProfileChange}
//                   disabled={!isEditingProfile}
//                   className={`w-full border rounded-2xl py-3.5 pl-12 pr-4 transition-all ${
//                     isEditingProfile ? 'border-[#8E5D90] bg-white ring-4 ring-[#8E5D90]/5' : 'border-gray-100 bg-gray-50/30'
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Email Field */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-400 ml-1">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
//                 <input 
//                   name="email"
//                   type="email" 
//                   placeholder='Enter Email'
//                   value={profile.email}
//                   onChange={handleProfileChange}
//                   disabled={!isEditingProfile}
//                   className={`w-full border rounded-2xl py-3.5 pl-12 pr-4 transition-all ${
//                     isEditingProfile ? 'border-[#8E5D90] bg-white ring-4 ring-[#8E5D90]/5' : 'border-gray-100 bg-gray-50/30'
//                   }`}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Family Details Card */}
//         <div className="w-full bg-white rounded-[32px] shadow-xl shadow-gray-100/50 p-8 border border-gray-50">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
//                 <User size={18} />
//               </div>
//               <h3 className="text-lg font-bold text-[#1A202C]">Family Details</h3>
//             </div>
//             {!isAddingMember && (
//               <button 
//                 onClick={() => setIsAddingMember(true)}
//                 className="bg-[#8E5D90] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
//               >
//                 Add Member
//               </button>
//             )}
//           </div>

//           {!isAddingMember ? (
//             <div className="border border-gray-100 rounded-2xl p-5 flex items-center justify-between group">
//               <div>
//                 <h4 className="font-bold text-gray-700"></h4>
//                 <p className="text-gray-400 text-sm"></p>
//               </div>
//               <button className="text-red-400 hover:text-red-600 transition-colors">
//                 <X size={20} />
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-6 animate-in fade-in duration-300">
//               <h4 className="font-bold text-[#1A202C]">Add New Family Member</h4>
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-gray-400 ml-1">Full Name</label>
//                 <input type="text" placeholder="Enter family member name" className="w-full border border-gray-200 rounded-2xl py-3.5 px-5 outline-none focus:border-[#8E5D90]" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-gray-400 ml-1">Contact Number</label>
//                 <input type="text" placeholder="Enter contact number" className="w-full border border-gray-200 rounded-2xl py-3.5 px-5 outline-none focus:border-[#8E5D90]" />
//               </div>
//               <div className="flex gap-4 pt-4">
//                 <button className="flex-1 bg-[#8E5D90] text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#7a4f7c]">
//                   <Save size={18} /> Save
//                 </button>
//                 <button onClick={() => setIsAddingMember(false)} className="flex-1 border-2 border-[#8E5D90]/20 text-[#8E5D90] py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50">
//                   <X size={18} /> Cancel
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAccountHome;

// import React, { useState } from 'react';
// import { User, Mail, Phone, Edit2, X, Save, Check } from 'lucide-react';

// const MyAccountHome: React.FC = () => {
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [profile, setProfile] = useState({
//     fullName: "",
//     contact: "",
//     email: ""
//   });
//   const [isAddingMember, setIsAddingMember] = useState(false);

//   const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-[#FDFCFD] py-16 px-4 font-sans">
//       {/* MAIN CONTAINER WITH MAXIMUM SHADOW */}
//       <div className="max-w-3xl mx-auto bg-white rounded-[50px] 
//                       shadow-[0_50px_100px_-20px_rgba(74,44,74,0.2),0_30px_60px_-30px_rgba(0,0,0,0.3)] 
//                       border border-gray-100 p-10 md:p-14 flex flex-col items-center">
        
//         {/* Header Section */}
//         <div className="w-14 h-14 bg-[#4A2C4A] rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
//           <User size={28} />
//         </div>
//         <h1 className="text-3xl font-bold text-[#1A202C] mb-1">My Account</h1>
//         <p className="text-gray-500 text-sm mb-10 text-center">Manage your profile and family information</p>

//         {/* Profile Avatar */}
//         <div className="relative mb-14">
//           <div className="w-28 h-28 bg-gray-50 rounded-full border-8 border-white shadow-xl flex items-center justify-center">
//             <User size={56} className="text-gray-300" />
//           </div>
//           <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-gray-100 px-4 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 hover:bg-gray-50 transition-all hover:scale-105">
//             <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Edit</span>
//             <Edit2 size={12} className="text-[#4A2C4A]" />
//           </button>
//         </div>

//         {/* Inner Content Sections */}
//         <div className="w-full space-y-10">
          
//           {/* My Profile Section */}
//           <div className="w-full">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#4A2C4A]">
//                   <User size={20} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#1A202C]">My Profile</h3>
//               </div>
              
//               <button 
//                 onClick={() => setIsEditingProfile(!isEditingProfile)}
//                 className={`${isEditingProfile ? 'bg-[#4A2C4A] text-white' : 'bg-gray-100 text-gray-600'} px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 hover:opacity-90`}
//               >
//                 {isEditingProfile ? <><Check size={14} /> Save Changes</> : 'Edit Profile'}
//               </button>
//             </div>

//             <div className="grid gap-6">
//               {[
//                 { label: "Full Name", name: "fullName", icon: <User size={18}/>, type: "text", placeholder: "John Doe" },
//                 { label: "Contact Number", name: "contact", icon: <Phone size={18}/>, type: "text", placeholder: "+1 (555) 000-0000" },
//                 { label: "Email Address", name: "email", icon: <Mail size={18}/>, type: "email", placeholder: "john@example.com" }
//               ].map((field) => (
//                 <div key={field.name} className="space-y-2">
//                   <label className="text-[11px] font-extrabold text-gray-400 uppercase ml-1 tracking-widest">{field.label}</label>
//                   <div className="relative group">
//                     <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isEditingProfile ? 'text-[#4A2C4A]' : 'text-gray-300'}`}>
//                       {field.icon}
//                     </div>
//                     <input 
//                       name={field.name}
//                       type={field.type} 
//                       placeholder={field.placeholder}
//                       value={profile[field.name as keyof typeof profile]}
//                       onChange={handleProfileChange}
//                       disabled={!isEditingProfile}
//                       className={`w-full border rounded-2xl py-4 pl-12 pr-4 transition-all outline-none ${
//                         isEditingProfile 
//                         ? 'border-[#4A2C4A] bg-white ring-4 ring-[#4A2C4A]/5' 
//                         : 'border-gray-50 bg-gray-50/50 cursor-not-allowed'
//                       }`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Family Details Section */}
//           <div className="w-full pt-6 border-t border-gray-100">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#4A2C4A]">
//                   <User size={20} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#1A202C]">Family Details</h3>
//               </div>
//               {!isAddingMember && (
//                 <button 
//                   onClick={() => setIsAddingMember(true)}
//                   className="bg-[#4A2C4A] text-white px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:shadow-lg transition-all"
//                 >
//                   Add Member
//                 </button>
//               )}
//             </div>

//             {!isAddingMember ? (
//               <div className="bg-gray-50/50 border border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
//                 <p className="font-bold text-gray-600 mb-1">No members added yet</p>
//                 <p className="text-gray-400 text-sm">Add family members to sync appointments.</p>
//               </div>
//             ) : (
//               <div className="bg-gray-50/30 rounded-3xl p-6 border border-gray-100 space-y-6 animate-in slide-in-from-top-4 duration-300">
//                 <div className="space-y-4">
//                   <div className="space-y-2">
//                     <label className="text-[11px] font-extrabold text-gray-400 uppercase ml-1 tracking-widest">Full Name</label>
//                     <input type="text" placeholder="Member Name" className="w-full border border-gray-200 rounded-2xl py-4 px-5 outline-none focus:ring-4 focus:ring-[#4A2C4A]/5 focus:border-[#4A2C4A] bg-white transition-all" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-[11px] font-extrabold text-gray-400 uppercase ml-1 tracking-widest">Contact Number</label>
//                     <input type="text" placeholder="Contact Number" className="w-full border border-gray-200 rounded-2xl py-4 px-5 outline-none focus:ring-4 focus:ring-[#4A2C4A]/5 focus:border-[#4A2C4A] bg-white transition-all" />
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <button className="flex-1 bg-[#4A2C4A] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#3a223a] transition-colors shadow-md">
//                     <Save size={18} /> Save Member
//                   </button>
//                   <button onClick={() => setIsAddingMember(false)} className="flex-1 bg-white border border-gray-200 text-gray-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
//                     <X size={18} /> Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAccountHome;


import React, { useState } from 'react';
import { User, Mail, Phone, Edit2, X, Save, Check } from 'lucide-react';

const MyAccountHome: React.FC = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    contact: "",
    email: ""
  });
  const [isAddingMember, setIsAddingMember] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FDFCFD] py-16 px-4 font-sans">
      {/* MAIN CONTAINER WITH MAXIMUM SHADOW */}
      <div className="max-w-3xl mx-auto bg-white rounded-[50px] 
                      shadow-[0_50px_100px_-20px_rgba(74,44,74,0.2),0_30px_60px_-30px_rgba(0,0,0,0.3)] 
                      border border-gray-100 p-10 md:p-14 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="w-14 h-14 bg-[#4A2C4A] rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
          <User size={28} />
        </div>
        <h1 className="text-3xl font-bold text-[#1A202C] mb-1">My Account</h1>
        <p className="text-gray-500 text-sm mb-10 text-center">Manage your profile and family information</p>

        {/* Profile Avatar */}
        <div className="relative mb-14">
          <div className="w-28 h-28 bg-gray-50 rounded-full border-8 border-white shadow-xl flex items-center justify-center">
            <User size={56} className="text-gray-300" />
          </div>
          <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-gray-100 px-4 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 hover:bg-gray-50 transition-all hover:scale-105">
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Edit</span>
            <Edit2 size={12} className="text-[#4A2C4A]" />
          </button>
        </div>

        {/* Inner Content Sections */}
        <div className="w-full space-y-10">
          
          {/* My Profile Section */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#4A2C4A]">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#1A202C]">My Profile</h3>
              </div>
              
              <button 
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className={`${isEditingProfile ? 'bg-[#4A2C4A] text-white' : 'bg-gray-100 text-gray-600'} px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 hover:opacity-90`}
              >
                {isEditingProfile ? <><Check size={14} /> Save Changes</> : 'Edit Profile'}
              </button>
            </div>

            <div className="grid gap-6">
              {[
                { label: "Full Name", name: "fullName", icon: <User size={18}/>, type: "text", placeholder: "John Doe" },
                { label: "Contact Number", name: "contact", icon: <Phone size={18}/>, type: "text", placeholder: "+1 (555) 000-0000" },
                { label: "Email Address", name: "email", icon: <Mail size={18}/>, type: "text", placeholder: "john@example.com" }
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="text-[11px] font-extrabold text-gray-400 uppercase ml-1 tracking-widest">{field.label}</label>
                  <div className="relative group">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isEditingProfile ? 'text-[#4A2C4A]' : 'text-gray-300'}`}>
                      {field.icon}
                    </div>
                    <input 
                      name={field.name}
                      type={field.type} 
                      placeholder={field.placeholder}
                      value={profile[field.name as keyof typeof profile]}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                      autoComplete="off"
                      className={`w-full border rounded-2xl py-4 pl-12 pr-4 transition-all outline-none shadow-none ${
                        isEditingProfile 
                        ? 'border-[#4A2C4A] bg-white ring-4 ring-[#4A2C4A]/5' 
                        : 'border-gray-50 bg-gray-50/50 cursor-not-allowed'
                      }`}
                      style={{ boxShadow: 'none' }} // Extra insurance against browser red highlights
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family Details Section */}
          <div className="w-full pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#4A2C4A]">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#1A202C]">Family Details</h3>
              </div>
              {!isAddingMember && (
                <button 
                  onClick={() => setIsAddingMember(true)}
                  className="bg-[#4A2C4A] text-white px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:shadow-lg transition-all"
                >
                  Add Member
                </button>
              )}
            </div>

            {!isAddingMember ? (
              <div className="bg-gray-50/50 border border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                <p className="font-bold text-gray-600 mb-1">No members added yet</p>
                <p className="text-gray-400 text-sm">Add family members to sync appointments.</p>
              </div>
            ) : (
              <div className="bg-gray-50/30 rounded-3xl p-6 border border-gray-100 space-y-6 animate-in slide-in-from-top-4 duration-300">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold text-gray-400 uppercase ml-1 tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Member Name" 
                      autoComplete="off"
                      className="w-full border border-gray-200 rounded-2xl py-4 px-5 outline-none focus:ring-4 focus:ring-[#4A2C4A]/5 focus:border-[#4A2C4A] bg-white transition-all" 
                      style={{ boxShadow: 'none' }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold text-gray-400 uppercase ml-1 tracking-widest">Contact Number</label>
                    <input 
                      type="text" 
                      placeholder="Contact Number" 
                      autoComplete="off"
                      className="w-full border border-gray-200 rounded-2xl py-4 px-5 outline-none focus:ring-4 focus:ring-[#4A2C4A]/5 focus:border-[#4A2C4A] bg-white transition-all" 
                      style={{ boxShadow: 'none' }}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 bg-[#4A2C4A] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#3a223a] transition-colors shadow-md">
                    <Save size={18} /> Save Member
                  </button>
                  <button onClick={() => setIsAddingMember(false)} className="flex-1 bg-white border border-gray-200 text-gray-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    <X size={18} /> Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountHome;