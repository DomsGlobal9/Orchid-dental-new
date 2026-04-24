import React from 'react'
import Navbar from '../Navbar/Navbar'
import RootCanalMain from './RootCanalMain'
// import KerlasLandmark from '../Services/KerlasLandmark'
import RootCanalDesc from './RootCanalDesc'
import RootCanalServices from './RootCanalServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import Footer from '../Footer/Footer'
import FAQ from '../Home/FAQ'
import PinkKerla from '../PinkKerla'

const RootCanalLanding:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <RootCanalMain/>
        {/* <KerlasLandmark/> */}
        <PinkKerla/>
        <RootCanalDesc/>
        <RootCanalServices/>
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

export default RootCanalLanding
