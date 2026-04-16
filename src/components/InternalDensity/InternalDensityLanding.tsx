import React from 'react'


import Navbar from '../Navbar/Navbar'
import DentalCheckups from './DentalCheckups'
import KerlasLandmark from '../Services/KerlasLandmark'
import InternalDescription from './InternalDescription'
import ServiceOptions from './ServiceOpitions'
import Reasons from './Reasons'
import VisitJourney from './VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/specialists'
import HealthyBenefits from './HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'
const InternalDensityLanding: React.FC = () => {
  return (
    <div>
        <Navbar />
        <DentalCheckups />
        <KerlasLandmark />
        <InternalDescription />
        <ServiceOptions />
        <Reasons />
        <VisitJourney />
        <ReadyTransform />
        <Specialists />
        <HealthyBenefits />
        <GetInTouch />
        <RealPeople />
        <FAQ />
        <Footer />
    </div>
  )
}

export default InternalDensityLanding
