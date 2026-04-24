// import React from 'react'
import Navbar from '../Navbar/Navbar'
import LaserHome from './LaserHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import LaserDesc from './LaserDesc'
import LaserServices from './LaserServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const LaserLanding = () => {
  return (
    <div>
       <Navbar/>
       <LaserHome/>
       <KerlasLandmark/>
       <LaserDesc/>
       <LaserServices/>
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

export default LaserLanding
