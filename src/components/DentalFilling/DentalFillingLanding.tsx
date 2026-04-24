// import React from 'react'
import Navbar from '../Navbar/Navbar'
import DentalFillingSection from './DentalFillingSection'
// import KerlasLandmark from '../Services/KerlasLandmark'
import DentalFillingDesc from './DentalFillingDesc'
import DentalFillingServices from './DentalFillingServices'
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

const DentalFillingLanding = () => {
  return (
    <div>
      <Navbar/>
      <DentalFillingSection/>
      {/* <KerlasLandmark/> */}
      <PinkKerla/>
      <DentalFillingDesc/>
      <DentalFillingServices/>
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

export default DentalFillingLanding
