// import React from 'react'
import Navbar from '../Navbar/Navbar'
import BracesHome from './BracesHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import BracesDesc from './BracesDesc'
import BracesServices from './BracesServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const BracesLanding = () => {
  return (
    <div>
      <Navbar/>
      <BracesHome/>
      <KerlasLandmark/>
      <BracesDesc/>
      <BracesServices/>
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

export default BracesLanding
