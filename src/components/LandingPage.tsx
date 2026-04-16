
import React from 'react'

import Navbar from './Navbar/Navbar'
import RefineSignature from './Home/RefineSignature'
import CertificateStandard from './Home/CertificateStandard'
import AboutOrchidCard from './Home/AboutOrchidCard'
import InfinityScrool from './Home/InfinityScrool'
import StatsSection from './Home/StatsSection'
import OurServices from './Home/OurServices'
import OurTeam from './Home/OurTeam'
import GetInTouch from './Home/GetInTouch'
import Blog from './Home/blog'
import PatientTestimonials from './Home/patientTestimonials'
import ViewOurLocation from './Home/ViewOurLocation'
import BookAppointment from './Home/BookAppointment'
import FAQ from './Home/FAQ'
import Footer from './Footer/Footer'
const LandingPage = () => {
  return (
   <div>
       <Navbar />
       <RefineSignature />
       <CertificateStandard />
       <AboutOrchidCard />
       <InfinityScrool />
       <StatsSection />
       <OurServices />
       <OurTeam />
       <GetInTouch />
       <Blog />
       <PatientTestimonials />
        <ViewOurLocation />
        <BookAppointment />
        <FAQ />
        <Footer />
   </div>
  )
}

export default LandingPage
