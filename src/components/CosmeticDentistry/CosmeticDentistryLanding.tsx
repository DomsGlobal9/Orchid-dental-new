// import React from 'react'
import Navbar from '../Navbar/Navbar'
import CosmeticHome from './CosmeticHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import CosmeticDesc from './CosmeticDesc'
import CosmeticServices from './CosmeticServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'



const CosmeticDentistryLanding = () => {
  return (
    <div>

        
       <Navbar/>
       <CosmeticHome/>
       <div className='mt-3'>

       </div>
       <KerlasLandmark />

        <CosmeticDesc/>
        <CosmeticServices/>

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

export default CosmeticDentistryLanding
