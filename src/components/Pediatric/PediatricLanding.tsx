import React from 'react'
import Navbar from '../Navbar/Navbar'
import PediatricHome from './PediatricHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import PediatricDesc from './PediatricDesc'
import PediatricServices from './PediatricServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const PediatricLanding = () => {
  return (
    <div>
       <Navbar/>
       <PediatricHome/>
       <KerlasLandmark/>
       <PediatricDesc/>
       <PediatricServices/>
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

export default PediatricLanding
