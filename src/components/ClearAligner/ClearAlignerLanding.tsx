// import React from 'react'
import Navbar from '../Navbar/Navbar'
import ClearAlignerHome from './ClearAlignerHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import ClearAlignerDesc from './ClearAlignerDesc'
import ClearAlignerServices from './ClearAlignerServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const ClearAlignerLanding = () => {
  return (
    <div>
        <Navbar/>
        <ClearAlignerHome/>
        <KerlasLandmark/>
        <ClearAlignerDesc/>
        <ClearAlignerServices/>
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

export default ClearAlignerLanding
