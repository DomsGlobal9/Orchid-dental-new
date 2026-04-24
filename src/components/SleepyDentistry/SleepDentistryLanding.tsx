// import React from 'react'
import Navbar from '../Navbar/Navbar'
import SleepDentistryHome from './SleepDentistryHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import SleepDentistryDesc from './SleepDentistryDesc'
import SleepDentistryServices from './SleepDentistryServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const SleepDentistryLanding = () => {
  return (
    <div>
       <Navbar/>
       <SleepDentistryHome/>
       <KerlasLandmark/>
       <SleepDentistryDesc/>
       <SleepDentistryServices/>
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

export default SleepDentistryLanding
