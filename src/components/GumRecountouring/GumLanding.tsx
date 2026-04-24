import React from 'react'
import Navbar from '../Navbar/Navbar'
import GumHome from './GumHome'
// import KerlasLandmark from '../Services/KerlasLandmark'
import GumDesc from './GumDesc'
import GumServices from './GumServices'
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

const GumLanding = () => {
  return (
    <div>
       <Navbar/>
       <GumHome/>
       {/* <KerlasLandmark/> */}
       <PinkKerla/>
       <GumDesc/>
       <GumServices/>
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

export default GumLanding
