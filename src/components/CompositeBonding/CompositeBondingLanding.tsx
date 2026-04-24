// import React from 'react'
import Navbar from '../Navbar/Navbar'
import CompositeHome from './CompositeHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import CompositeDesc from './CompositeDesc'
import CompositeServices from './CompositeServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const CompositeBondingLanding = () => {
  return (
    <div>
      <Navbar/>
      <CompositeHome/>
      <KerlasLandmark/>

      <CompositeDesc/>
      <CompositeServices/>
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

export default CompositeBondingLanding
