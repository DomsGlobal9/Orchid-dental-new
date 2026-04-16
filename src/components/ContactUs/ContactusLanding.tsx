import React from 'react'
import Navbar from '../Navbar/Navbar'
import RequestAppointment from './RequestAppointment'
import ContactInformation from './ContactInformation'
import CallUs from './CallUs'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'
const ContactusLanding:React.FC = () => {
  return (
    <div>
        <Navbar />
        <RequestAppointment />
        <ContactInformation />
        <CallUs/>
        <FAQ />
        <Footer />
    </div>
  )
}

export default ContactusLanding
