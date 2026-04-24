import React from 'react'
import Navbar from '../Navbar/Navbar'
import DentalImplantHome from './DentalImplantHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import DentalImplantDesc from './DentalImplantDesc'
import DentalImplantServices from './DentalImplantServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const DentalImplantsLanding = () => {
  return (
    <div>
        <Navbar/>
        <DentalImplantHome/>
        <KerlasLandmark/>
        <DentalImplantDesc/>
        <DentalImplantServices/>

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

export default DentalImplantsLanding
