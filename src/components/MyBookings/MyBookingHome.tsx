// import React, { useState } from 'react';
// import { 
//   Calendar, 
//   User, 
//   Clock, 
//   MapPin, 
//   RefreshCw, 
//   XCircle, 
//   Eye 
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// const MyBookingHome: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');

//   const upcomingBookings = [
//     {
//       id: 1,
//       type: 'Dental Check-up & Cleaning',
//       status: 'Confirmed',
//       statusColor: 'text-green-600 bg-green-50',
//       doctor: 'Dr. Sarah Johnson',
//       date: 'March 25, 2026',
//       time: '10:00 AM',
//       location: 'Downtown Clinic',
//     },
//     {
//       id: 2,
//       type: 'Teeth Whitening',
//       status: 'Pending',
//       statusColor: 'text-yellow-600 bg-yellow-50',
//       doctor: 'Dr. Michael Chen',
//       date: 'March 28, 2026',
//       time: '2:30 PM',
//       location: 'Westside Clinic',
//     },
//     {
//       id: 3,
//       type: 'Orthodontic Consultation',
//       status: 'Confirmed',
//       statusColor: 'text-green-600 bg-green-50',
//       doctor: 'Dr. Emily Rodriguez',
//       date: 'April 2, 2026',
//       time: '11:00 AM',
//       location: 'Downtown Clinic',
//     }
//   ];

//   const completedBookings = [
//     {
//       id: 4,
//       type: 'Root Canal Treatment',
//       doctor: 'Dr. Sarah Johnson',
//       date: 'March 10, 2026',
//       time: '9:00 AM',
//       location: 'Downtown Clinic',
//     },
//     {
//       id: 5,
//       type: 'Dental Implant Consultation',
//       doctor: 'Dr. Michael Chen',
//       date: 'February 28, 2026',
//       time: '3:00 PM',
//       location: 'Westside Clinic',
//     },
//     {
//       id: 6,
//       type: 'Teeth Cleaning',
//       doctor: 'Dr. Emily Rodriguez',
//       date: 'January 15, 2026',
//       time: '10:30 AM',
//       location: 'Downtown Clinic',
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#FDFCFD] py-12 px-4 font-sans">
//       <div className="max-w-4xl mx-auto flex flex-col items-center">
        
//         {/* Header Icon */}
//         <div className="w-12 h-12 bg-[#8E5D90] rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-[#8E5D90]/20">
//           <Calendar size={24} />
//         </div>
        
//         <h1 className="text-3xl font-bold text-[#1A202C] mb-1">My Bookings</h1>
//         <p className="text-gray-500 text-sm mb-8">View and manage your dental appointments</p>

//         {/* Toggle Switch */}
//         <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 mb-12">
//           <button 
//             onClick={() => setActiveTab('upcoming')}
//             className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all ${
//               activeTab === 'upcoming' 
//               ? 'bg-[#8E5D90] text-white shadow-md' 
//               : 'text-gray-500 hover:text-gray-700'
//             }`}
//           >
//             Upcoming
//           </button>
//           <button 
//             onClick={() => setActiveTab('completed')}
//             className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all ${
//               activeTab === 'completed' 
//               ? 'bg-[#8E5D90] text-white shadow-md' 
//               : 'text-gray-500 hover:text-gray-700'
//             }`}
//           >
//             Completed
//           </button>
//         </div>

//         {/* Bookings List */}
//         <div className="w-full space-y-6">
//           {(activeTab === 'upcoming' ? upcomingBookings : completedBookings).map((booking) => (
//             <div 
//               key={booking.id}
//               className="bg-white rounded-[32px] shadow-xl shadow-gray-100/50 p-8 border border-gray-50 transition-transform hover:scale-[1.01]"
//             >
//               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
//                 {/* Info Section */}
//                 <div className="flex-1 space-y-4">
//                   <div className="flex items-center gap-3">
//                     <h3 className="text-xl font-bold text-[#1A202C]">{booking.type}</h3>
//                     {activeTab === 'upcoming' && (
//                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${booking.statusColor}`}>
//                         {booking.status}
//                       </span>
//                     )}
//                     {activeTab === 'completed' && (
//                       <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 flex items-center gap-1">
//                         <Check size={10} strokeWidth={3} /> Completed
//                       </span>
//                     )}
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
//                         <User size={16} />
//                       </div>
//                       <div className="text-sm">
//                         <p className="text-gray-400 font-medium">Doctor</p>
//                         <p className="text-gray-700 font-bold">{booking.doctor}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
//                         <Calendar size={16} />
//                       </div>
//                       <div className="text-sm">
//                         <p className="text-gray-400 font-medium">Date</p>
//                         <p className="text-gray-700 font-bold">{booking.date}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
//                         <Clock size={16} />
//                       </div>
//                       <div className="text-sm">
//                         <p className="text-gray-400 font-medium">Time</p>
//                         <p className="text-gray-700 font-bold">{booking.time}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
//                         <MapPin size={16} />
//                       </div>
//                       <div className="text-sm">
//                         <p className="text-gray-400 font-medium">Location</p>
//                         <p className="text-gray-700 font-bold">{booking.location}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Actions Section */}
//                 <div className="flex flex-col gap-3 min-w-[160px]">
//                   {activeTab === 'upcoming' ? (
//                     <>
//                       <button className="w-full bg-[#8E5D90] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#7a4f7c] shadow-lg shadow-purple-100 transition-all active:scale-95">
//                         <RefreshCw size={16} /> Reschedule
//                       </button>
//                       <button className="w-full bg-white text-red-500 border border-red-100 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition-all active:scale-95">
//                         <XCircle size={16} /> Cancel
//                       </button>
//                     </>
//                   ) : (
//                       <Link to="/booking-details">
//                     <button className="w-full bg-white text-gray-700 border border-gray-200 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-95">
//                       <Eye size={16} /> View Details
//                     </button>
//                     </Link>
//                   )}
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper for the checkmark icon
// const Check = ({ size, strokeWidth }: { size: number, strokeWidth: number }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// );

// export default MyBookingHome;

// ✅ ADD THIS TYPE ABOVE COMPONENT
type Booking = {
  id: number;
  type: string;
  doctor: string;
  date: string;
  time: string;
  location: string;
  status?: string;
  statusColor?: string;
};

import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Clock, 
  MapPin, 
  RefreshCw, 
  XCircle, 
  Eye 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MyBookingHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');

  const upcomingBookings: Booking[] = [
    {
      id: 1,
      type: 'Dental Check-up & Cleaning',
      status: 'Confirmed',
      statusColor: 'text-green-600 bg-green-50',
      doctor: 'Dr. Sarah Johnson',
      date: 'March 25, 2026',
      time: '10:00 AM',
      location: 'Downtown Clinic',
    },
    {
      id: 2,
      type: 'Teeth Whitening',
      status: 'Pending',
      statusColor: 'text-yellow-600 bg-yellow-50',
      doctor: 'Dr. Michael Chen',
      date: 'March 28, 2026',
      time: '2:30 PM',
      location: 'Westside Clinic',
    },
    {
      id: 3,
      type: 'Orthodontic Consultation',
      status: 'Confirmed',
      statusColor: 'text-green-600 bg-green-50',
      doctor: 'Dr. Emily Rodriguez',
      date: 'April 2, 2026',
      time: '11:00 AM',
      location: 'Downtown Clinic',
    }
  ];

  const completedBookings: Booking[] = [
    {
      id: 4,
      type: 'Root Canal Treatment',
      doctor: 'Dr. Sarah Johnson',
      date: 'March 10, 2026',
      time: '9:00 AM',
      location: 'Downtown Clinic',
    },
    {
      id: 5,
      type: 'Dental Implant Consultation',
      doctor: 'Dr. Michael Chen',
      date: 'February 28, 2026',
      time: '3:00 PM',
      location: 'Westside Clinic',
    },
    {
      id: 6,
      type: 'Teeth Cleaning',
      doctor: 'Dr. Emily Rodriguez',
      date: 'January 15, 2026',
      time: '10:30 AM',
      location: 'Downtown Clinic',
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFD] py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="w-12 h-12 bg-[#8E5D90] rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-[#8E5D90]/20">
          <Calendar size={24} />
        </div>
        
        <h1 className="text-3xl font-bold text-[#1A202C] mb-1">My Bookings</h1>
        <p className="text-gray-500 text-sm mb-8">View and manage your dental appointments</p>

        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'upcoming' 
              ? 'bg-[#8E5D90] text-white shadow-md' 
              : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setActiveTab('completed')}
            className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'completed' 
              ? 'bg-[#8E5D90] text-white shadow-md' 
              : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Completed
          </button>
        </div>

        <div className="w-full space-y-6">
          {(activeTab === 'upcoming' ? upcomingBookings : completedBookings).map((booking) => (
            <div key={booking.id} className="bg-white rounded-[32px] shadow-xl shadow-gray-100/50 p-8 border border-gray-50 transition-transform hover:scale-[1.01]">
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-[#1A202C]">{booking.type}</h3>

                    {activeTab === 'upcoming' && booking.status && (
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${booking.statusColor}`}>
                        {booking.status}
                      </span>
                    )}

                    {activeTab === 'completed' && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 flex items-center gap-1">
                        <Check size={10} strokeWidth={3} /> Completed
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
                        <User size={16} />
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-400 font-medium">Doctor</p>
                        <p className="text-gray-700 font-bold">{booking.doctor}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
                        <Calendar size={16} />
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-400 font-medium">Date</p>
                        <p className="text-gray-700 font-bold">{booking.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
                        <Clock size={16} />
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-400 font-medium">Time</p>
                        <p className="text-gray-700 font-bold">{booking.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
                        <MapPin size={16} />
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-400 font-medium">Location</p>
                        <p className="text-gray-700 font-bold">{booking.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 min-w-[160px]">
                  {activeTab === 'upcoming' ? (
                    <>
                      <button className="w-full bg-[#8E5D90] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                        <RefreshCw size={16} /> Reschedule
                      </button>
                      <button className="w-full bg-white text-red-500 border border-red-100 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                        <XCircle size={16} /> Cancel
                      </button>
                    </>
                  ) : (
                    <Link to="/booking-details">
                      <button className="w-full bg-white text-gray-700 border border-gray-200 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                        <Eye size={16} /> View Details
                      </button>
                    </Link>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Check = ({ size, strokeWidth }: { size: number, strokeWidth: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default MyBookingHome;