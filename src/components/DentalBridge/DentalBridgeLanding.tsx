import React from 'react'
import Navbar from '../Navbar/Navbar'
import DentalBridgeHome from './DentalBridgeHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import DentalBridgeDesc from './DentalBridgeDesc'
import DentalBridgeServices from './DentalBridgeServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const DentalBridgeLanding:React.FC = () => {
  return (
    <div>
       <Navbar/>
       <DentalBridgeHome/>
       <KerlasLandmark/>
       <DentalBridgeDesc/>
       <DentalBridgeServices/>
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

export default DentalBridgeLanding
