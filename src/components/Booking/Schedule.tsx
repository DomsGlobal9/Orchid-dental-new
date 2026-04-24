import { useState } from 'react';
import { MapPin, Calendar, User, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

const Schedule = ({ onNext, onBack }) => {
  const [selectedLocation, setSelectedLocation] = useState('Balwyn');
  const [selectedTime, setSelectedTime] = useState(null);
  const [attendee, setAttendee] = useState('Myself');

  const locations = [
    { id: 'Balwyn', name: 'Orchid Dental Care - Balwyn', address: '123 Balwyn Rd, VIC 3103' },
    { id: 'CBD', name: 'Orchid Dental Care - CBD', address: '456 Collins St, VIC 3000' },
    { id: 'South', name: 'Orchid Dental Care - South Melbourne', address: '789 Clarendon St, VIC 3205' },
  ];

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  return (
    <div className="w-full flex-1 flex flex-col space-y-8 animate-in slide-in-from-right-4 duration-300">
      
      {/* 1. Location Selection */}
      <div className="space-y-4">
        <label className="flex items-center gap-2 text-[#2D2D2D] font-bold text-sm">
          <MapPin size={18} className="text-[#8E5D90]" /> Choose Your Location
        </label>
        <div className="space-y-3">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocation(loc.id)}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                selectedLocation === loc.id 
                ? 'border-[#8E5D90] bg-[#8E5D90]/5 shadow-sm' 
                : 'border-[#E8EFF5] bg-white hover:border-gray-300'
              }`}
            >
              <p className="font-bold text-[#2D2D2D] text-[15px]">{loc.name}</p>
              <p className="text-[#64748B] text-sm mt-1">{loc.address}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Select Date */}
      <div className="space-y-4">
        <label className="flex items-center gap-2 text-[#2D2D2D] font-bold text-sm">
          <Calendar size={18} className="text-[#8E5D90]" /> Select Date
        </label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="DD/MM/YY"
            className="w-full p-4.5 bg-white border-2 border-[#E8EFF5] rounded-2xl outline-none focus:border-[#8E5D90] transition-all text-[#2D2D2D] font-medium"
          />
        </div>
      </div>

      {/* 3. Attendee Toggle */}
      <div className="space-y-4">
        <label className="flex items-center gap-2 text-[#2D2D2D] font-bold text-sm">
          <User size={18} className="text-[#8E5D90]" /> Who is this appointment for?
        </label>
        <div className="flex gap-4">
          {['Myself', 'Someone Else'].map((type) => (
            <button
              key={type}
              onClick={() => setAttendee(type)}
              className={`flex-1 py-4 rounded-2xl border-2 font-bold transition-all ${
                attendee === type 
                ? 'border-[#8E5D90] bg-[#8E5D90]/5 text-[#8E5D90]' 
                : 'border-[#E8EFF5] text-[#64748B]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Choose Time Slot */}
      <div className="space-y-4">
        <label className="flex items-center gap-2 text-[#2D2D2D] font-bold text-sm">
          <Clock size={18} className="text-[#8E5D90]" /> Choose Time Slot
        </label>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-4 rounded-xl border-2 font-bold text-sm transition-all ${
                selectedTime === time 
                ? 'border-[#8E5D90] bg-[#8E5D90] text-white shadow-md' 
                : 'border-[#E8EFF5] text-[#2D2D2D] bg-white hover:border-gray-300'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-8 gap-4 w-full mt-auto">
        <button 
          onClick={onBack} 
          className="flex-1 bg-white border border-[#E8EFF5] text-[#64748B] px-6 py-4.5 rounded-[22px] font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft size={20} /> Back
        </button>
        <button 
          onClick={onNext} 
          className="flex-1 bg-[#8E5D90] text-white px-6 py-4.5 rounded-[22px] font-bold text-base hover:bg-[#7a4f7c] shadow-lg shadow-purple-200 transition-all flex items-center justify-center gap-2"
        >
          Continue <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Schedule;