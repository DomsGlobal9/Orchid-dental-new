import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Download, 
  ArrowLeft, 
  CreditCard, 
  FileText, 
  CheckCircle2, 
  Stethoscope, 
  Mail 
} from 'lucide-react';

const MyBookingDetailsHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFD] py-8 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation & Header Section */}
        <button className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-6 hover:text-gray-700">
          <ArrowLeft size={16} /> Back to Bookings
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#8E5D90] rounded-2xl flex items-center justify-center text-white">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1A202C]">Booking Details</h1>
              <p className="text-gray-400 text-sm">ID: ODC-2026-0310-001</p>
              <div className="flex gap-2 mt-2">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Completed</span>
                <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-green-100">Payment: Paid</span>
              </div>
            </div>
          </div>
          <button className="bg-[#8E5D90] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#7a4f7c] shadow-lg shadow-purple-100">
            <Download size={18} /> Download Invoice
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Main Information */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Appointment Information */}
            <div className="bg-white rounded-[32px] p-8 border border-gray-50 shadow-xl shadow-gray-100/50">
              <h2 className="text-lg font-bold text-[#1A202C] mb-6">Appointment Information</h2>
              <div className="mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Service</p>
                <p className="text-gray-700 font-bold">Root Canal Treatment</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F3E8F3] rounded-xl flex items-center justify-center text-[#8E5D90]">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Date</p>
                    <p className="text-sm font-bold text-gray-700">March 10, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F3E8F3] rounded-xl flex items-center justify-center text-[#8E5D90]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Time</p>
                    <p className="text-sm font-bold text-gray-700">9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:col-span-2">
                  <div className="w-10 h-10 bg-[#F3E8F3] rounded-xl flex items-center justify-center text-[#8E5D90] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Location</p>
                    <p className="text-sm font-bold text-gray-700">Downtown Clinic</p>
                    <p className="text-xs text-gray-400">123 Main Street, Downtown, City 10001</p>
                    <p className="text-xs text-[#8E5D90] font-bold mt-1 flex items-center gap-1">
                      <Phone size={12} /> +1 (555) 987-6543
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-[32px] p-8 border border-gray-50 shadow-xl shadow-gray-100/50">
              <h2 className="text-lg font-bold text-[#1A202C] mb-6">Payment Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-bottom border-gray-50">
                  <p className="text-sm text-gray-400 font-medium">Payment Method</p>
                  <p className="text-sm font-bold text-gray-700 flex items-center gap-2"><CreditCard size={16} /> UPI</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-bottom border-gray-50">
                  <p className="text-sm text-gray-400 font-medium">Amount</p>
                  <p className="text-xl font-bold text-[#8E5D90]">₹8,500</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400 font-medium">Status</p>
                  <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">Paid</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-[32px] p-8 border border-gray-50 shadow-xl shadow-gray-100/50">
              <h2 className="text-lg font-bold text-[#1A202C] mb-4">Notes</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Patient completed full root canal treatment successfully. Follow-up appointment scheduled for crown placement.
              </p>
            </div>

            {/* Prescription */}
            <div className="bg-white rounded-[32px] p-8 border border-gray-50 shadow-xl shadow-gray-100/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#F3E8F3] rounded-full flex items-center justify-center text-[#8E5D90]">
                  <FileText size={16} />
                </div>
                <h2 className="text-lg font-bold text-[#1A202C]">Prescription</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Amoxicillin 500mg - Take 3 times daily for 5 days',
                  'Ibuprofen 400mg - Take as needed for pain (max 3 times daily)',
                  'Chlorhexidine mouthwash - Rinse twice daily'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div className="bg-[#1A202C] rounded-[32px] p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-[#8E5D90]">
                  <Stethoscope size={16} />
                </div>
                <h2 className="text-lg font-bold">Recommendations</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Avoid chewing on the treated tooth until permanent crown is placed',
                  'Maintain good oral hygiene with gentle brushing',
                  'Schedule crown placement appointment within 2-3 weeks',
                  'Contact us immediately if severe pain or swelling occurs'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#8E5D90] rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Doctor Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] p-8 border border-gray-50 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center sticky top-8">
              <h3 className="text-lg font-bold text-[#1A202C] self-start mb-6">Your Doctor</h3>
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#FDFCFD] shadow-md">
                <img 
                  src="src/assets/images/priya-doctor.png" 
                  alt="Dr. Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-[#1A202C]">Dr. Sarah Johnson</h4>
              <p className="text-[#8E5D90] text-sm font-semibold mb-6">Endodontist</p>
              
              <div className="w-full space-y-3">
                <div className="flex items-center gap-3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#8E5D90] shadow-sm">
                    <Mail size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Email</p>
                    <p className="text-xs font-bold text-gray-700">sarah.johnson@orchidd</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#8E5D90] shadow-sm">
                    <Phone size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Phone</p>
                    <p className="text-xs font-bold text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyBookingDetailsHome;