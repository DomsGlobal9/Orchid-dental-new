import React from 'react'
import Navbar from '../Navbar/Navbar'
import VeneersHome from './VeneersHome'
// import KerlasLandmark from '../Services/KerlasLandmark'
import VeneersDesc from './VeneersDesc'
import VeneersServices from './VeneersServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'
import PinkKerla from '../PinkKerla'

const VeneersLanding = () => {
  return (
    <div>
      <Navbar/>
      <VeneersHome/>
      {/* <KerlasLandmark/> */}
      <PinkKerla/>
      <VeneersDesc/>
      <VeneersServices/>
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

export default VeneersLanding
