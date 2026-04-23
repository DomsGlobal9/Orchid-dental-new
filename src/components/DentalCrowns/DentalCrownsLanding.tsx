import React from 'react'


import Navbar from '../Navbar/Navbar'
import DentalCrownHome from './DentalCrownHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import DentalCrownDesc from './DentalCrownDesc'
import DentalCrownServices from './DentalCrownServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import Footer from '../Footer/Footer'
import FAQ from '../Home/FAQ'

const DentalCrownsLanding = () => {
  return (
    <div>
      <Navbar/>
     <DentalCrownHome/>
     <KerlasLandmark/>
     <DentalCrownDesc/>
     <DentalCrownServices/>
     <Reasons/>
     <VisitJourney/>
     <ReadyTransform/>
     <Specialists/>
     <HealthyBenefits/>
     <GetInTouch/>
     <RealPeople/>
     <FAQ/>
     <Footer/>
    </div>
  )
}

export default DentalCrownsLanding
