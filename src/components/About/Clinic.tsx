import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Clinic: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8 lg:px-16 font-sans text-[#4a3b4d]">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 items-start">
          
          {/* Left Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Section 1: Holistic Approach */}
            <section>
              <Typography 
                variant="overline" 
                sx={{ fontSize: '1rem', fontWeight: 'normal' }}
                className="text-[#442140] font-bold tracking-widest block mb-2 uppercase"
              >
                Beyond the Chair: A Holistic Approach to Your Smile
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem' }} className="leading-relaxed text-gray-700">
                At Orchid Dental Care, we believe that dentistry is more than just a series of treatments; 
                it’s about building lasting relationships, restoring self-confidence, and enhancing your 
                overall well-being. We view every patient not just as a clinical case, but as an 
                individual with unique goals, concerns, and a story to tell.
              </Typography>
            </section>

            {/* Section 2: Building Relationships */}
            <section>
              <Typography 
                variant="overline" 
                sx={{ fontSize: '1rem', fontWeight: 'normal' }}
                className="text-[#442140] font-bold tracking-widest block mb-2 uppercase"
              >
                Building Relationships Through Trust
              </Typography>
              <Typography variant="body1" className="leading-relaxed text-gray-700">
                Our practice is founded on the principle of transparency. We take the time to listen to your history and understand your anxieties. By fostering an environment of open communication, we transform the traditional dental visit into a collaborative partnership. When you trust your care team, your journey toward oral health becomes a stress-free, empowering experience.
                Restoring Confidence, One Smile at a Time A smile is often the first thing people notice about you. Whether it’s through subtle refinements or transformative restorative work, our mission is to give you a smile that feels authentic to who you are.
              </Typography>
            </section>

            {/* Section 3: Restoring Confidence */}
            <section>
              <Typography 
                variant="body1" 
                sx={{ fontSize: '1rem', fontWeight: 'normal' }}
                className="mb-4 text-[#442140] font-medium"
              >
                Restoring Confidence, One Smile at a Time
              </Typography>
              <Typography variant="body2" className="mb-4 leading-relaxed text-gray-600">
                A smile is often the first thing people notice about you. Whether it’s through subtle 
                refinements or transformative restorative work, our mission is to give you a smile 
                that feels authentic to who you are.
              </Typography>
              
              <ul className="space-y-3 list-none pl-0">
                <li className="flex gap-2">
                  <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                  <Typography variant="body2">
                    <strong className="text-[#4a3b4d]">Social Impact:</strong> Feel the freedom to laugh, speak, and engage in conversations without hesitation.
                  </Typography>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                  <Typography variant="body2">
                    <strong className="text-[#4a3b4d]">Professional Edge:</strong> Carry yourself with the poise that comes from knowing your smile reflects your best self.
                  </Typography>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                  <Typography variant="body2">
                    <strong className="text-[#4a3b4d]">Personal Joy:</strong> Rediscover the simple pleasure of looking in the mirror and loving what you see.
                  </Typography>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Image Side */}
          <div className="order-1 lg:order-2">
            <Box 
              className="rounded-3xl overflow-hidden"
              sx={{ 
                /* Adjusted height to fit content better and removed h-[90%] from img */
                height: { xs: '350px', md: '500px', lg: '700px' },
                width: '100%' 
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                alt="Patient receiving dental consultation"
                className="w-full h-full object-cover"
              />
            </Box>
          </div>

          {/* Section 4: Overall Well-being */}
          {/* Reduced mt-12 to mt-4 and ensured col-span spans the gap */}
          <section className="mt-4 w-full lg:col-span-2 order-3"> 
            <Typography 
              variant="overline" 
              sx={{ fontSize: '1rem', fontWeight: 'normal' }}
              className="text-[#442140] font-bold tracking-widest block mb-2 uppercase"
            >
              Enhancing Your Overall Well-being
            </Typography>
            
            <Typography variant="body2" className="mb-4 leading-relaxed text-gray-600">
              Modern science has proven that oral health is a vital window into your systemic health. 
              By managing inflammation and preventing infection in the mouth, we are helping protect 
              your heart, your energy levels, and your longevity.
            </Typography>
            
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-2">
                <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                <Typography variant="body2">
                  <strong className="text-[#4a3b4d]">Functional Comfort:</strong> Proper dental care ensures you can enjoy your favorite foods and speak clearly, maintaining a high quality of life.
                </Typography>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7d5c7d] font-bold text-xl leading-none">•</span>
                <Typography variant="body2">
                  <strong className="text-[#4a3b4d]">Preventative Peace of Mind:</strong> Routine care reduces the risk of sudden dental emergencies, allowing you to focus on what matters most in your daily life.
                </Typography>
              </li>
            </ul>
          </section>

        </div>
      </Container>
    </div>
  );
};

export default Clinic;