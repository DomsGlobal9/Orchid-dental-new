import React from 'react'
import Navbar from '../Navbar/Navbar'
import OurServices from './OurServices'
import ServicesFaq from './ServicesFaq'
import KerlasLandmark from './KerlasLandmark'
import RealPeople from './RealPeople'
import ReadyTransform from './ReadyTransform'
import Footer from '../Footer/Footer'
const ServicesLandingpage:React.FC = () => {
  return (
    <div>

        <Navbar />
        <OurServices />
        <ServicesFaq />
        <KerlasLandmark />
        <RealPeople />
        <ReadyTransform />
        <Footer />
    </div>
  )
}

export default ServicesLandingpage
