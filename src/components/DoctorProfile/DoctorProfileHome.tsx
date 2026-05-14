import React from 'react';
import { 
  Star, 
 
  GraduationCap, 
  Award, 
 
  CheckCircle2, 
  Globe, 
  Clock, 
  ShieldCheck,
  Phone,
  Mail,
  Heart,
  Calendar
} from 'lucide-react';

const DoctorProfileHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-white">
      {/* Hero Header Section */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <img 
          src="https://travel-pdfs-prod-399934155938-eu-north-1-an.s3.eu-north-1.amazonaws.com/pdf/doctor.png" 
          alt="Dr. Sarah Johnson" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-10 left-0 right-0 max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs mb-4 border border-white/20">
            <span className="w-2 h-2 text-black bg-green-400 rounded-full animate-pulse"></span>
            Available for Appointment Tomorrow
          </div>
          <h1 className="text-5xl font-bold mb-2">Dr. Sarah Johnson</h1>
          <p className="text-xl text-gray-300 mb-4">Chief Dental Officer & Aesthetic Specialist</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Clock size={16} className="text-purple-400"/> 15+ Years Experience</span>
            <span className="flex items-center gap-2"><Star size={16} className="text-yellow-500 fill-yellow-500"/> 5.0 Rating</span>
          </div>
        </div>
      </div>

      {/* Main Container - Ensure items-start is used to allow sticky to work */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* About Section */}
          <section>
            <h2 className="text-2xl text-black font-bold mb-6">About Sarah</h2>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              <p>Dr. Sarah Johnson is a highly experienced and compassionate dentist with over 15 years of clinical expertise. She graduated with honors from the University of California, San Francisco. Her dedication to dental excellence includes her constant striving to provide the highest quality of care through advanced dental techniques.</p>
              <p>Dr. Johnson remains at the forefront of the field, consistently integrating the latest advancements in dentistry. She is known for her meticulous attention to detail and her ability to create beautiful, long-lasting smiles that enhance her patients' confidence and overall well-being.</p>
            </div>
          </section>

          {/* Treatment Philosophy Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex gap-6">
            <div className="p-4 bg-purple-500/10 rounded-2xl h-fit">
              <Heart className="text-purple-500" size={32} />
            </div>
            <div>
              <h3 className="text-xl text-black font-bold mb-3">Treatment Philosophy</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "I believe that dentistry is as much an art as it is a science. Every patient deserves a personalized treatment plan that considers not just their dental health, but their overall well-being, lifestyle, and aesthetic goals. My approach is built on trust, empathy, and a commitment to providing the best possible care for every patient."
              </p>
            </div>
          </div>

          {/* Areas of Expertise */}
          <section>
            <h2 className="text-2xl text-black font-bold mb-6">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Aesthetic Dentistry', 'Oral Surgery', 'Advanced Orthodontics', 'Tooth Whitening', 'Dental Implants', 'Crown & Bridge Work'].map((item) => (
                <div key={item} className="bg-white border border-gray-100 text-black py-4 px-6 rounded-xl font-medium flex items-center gap-3 shadow-sm">
                  <CheckCircle2 size={18} className="text-purple-600" /> {item}
                </div>
              ))}
            </div>
          </section>

          {/* Education & Training */}
          <section>
            <h2 className="text-2xl text-black font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-purple-500 " /> Education & Training
            </h2>
            <div className="space-y-4">
              {[
                'DDS, University of California, San Francisco',
                'Advanced Aesthetics Dentistry Certificate, NYJ',
                'Implant Dentistry Fellowship, Harvard School of Dental Medicine'
              ].map((edu) => (
                <div key={edu} className="bg-white border border-gray-100 text-black py-4 px-6 rounded-xl font-medium shadow-sm">{edu}</div>
              ))}
            </div>
          </section>

          {/* Awards & Recognition */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-3">
              <Award className="text-purple-500" /> Awards & Recognition
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {['Top Cosmetic Dentist Award 2024', 'Excellence in Aesthetic Dentistry 2023', 'Patient Choice Award 2022-2024', 'Most Smile Makeover Specialist, Kochi 2022'].map((award) => (
                <div key={award} className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm text-black">
                  {award}
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h2 className="text-2xl text-black font-bold mb-6">Patient Testimonials</h2>
            <div className="space-y-4">
              {[
                { name: "Priya Varma", text: "Dr. Johnson completely transformed my smile. I was always self-conscious about my teeth but after getting veneers I can't stop smiling. She is patient and empathetic, she made me feel so comfortable. Highly recommend!" },
                { name: "Rajesh Kumar", text: "The best dentist I have ever visited. Dr. Johnson's attention to detail is remarkable. My implant procedure was painless and the results are amazing. Thank you for Orchid Dental Care for the best." },
                { name: "Anil Joseph", text: "Professional staff and excellent care. Dr. Johnson explains everything clearly and makes sure you are at ease throughout the treatment." }
              ].map((t, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <p className="text-black mb-6 italic">"{t.text}"</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-black">{t.name}</span>
                    <span className="text-gray-500">2 months ago</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar - STICKY WRAPPER */}
        <div className="lg:sticky lg:top-10 space-y-6">
          {/* Booking Card */}
          <div className="bg-purple-900 border border-purple-500/30 backdrop-blur-xl rounded-[32px] p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-2">Book a Consultation</h3>
            <p className="text-purple-200 text-sm mb-6">Schedule your appointment with Sarah today.</p>
            <button className="w-full bg-white text-purple-900 font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-lg active:scale-95">
              <Calendar size={20} /> Book Appointment
            </button>
          </div>

          {/* Quick Info Card */}
          <div className="bg-white border border-gray-100 rounded-[32px] p-8 text-black space-y-6 shadow-lg">
            <h4 className="font-bold text-lg">Quick Information</h4>
            
            <div className="space-y-4">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Speciality</p>
              <div className="flex flex-wrap gap-2">
                {['General', 'Pediatric', 'Emergency'].map(s => (
                  <span key={s} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">{s}</span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                <Globe size={14} /> Languages
              </p>
              <p className="text-sm font-semibold">English, Hindi, Malayalam</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                <ShieldCheck size={14} /> Certifications
              </p>
              <ul className="text-xs space-y-2 font-medium">
                <li className="flex items-start gap-2">• Board Certified in Cosmetic Dentistry</li>
                <li className="flex items-start gap-2">• Advanced Implant Training</li>
                <li className="flex items-start gap-2">• Member of Dental Council</li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 text-black space-y-4 shadow-md">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="p-2 bg-white rounded-lg shadow-sm"><Phone size={16} className="text-purple-600"/></div>
              <span>+91 99017 61312</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="p-2 bg-white rounded-lg shadow-sm"><Mail size={16} className="text-purple-600"/></div>
              <span>hello@orchiddental.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileHome;