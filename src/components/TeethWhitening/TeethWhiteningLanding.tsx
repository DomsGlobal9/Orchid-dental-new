import React from 'react'
import Navbar from '../Navbar/Navbar'
import TeethWhiteningHome from './TeethWhiteningHome'
import KerlasLandmark from '../Services/KerlasLandmark'
import TeethWhiteningDesc from './TeethWhiteningDesc'
import TeethWhiteningServices from './TeethWhiteningServices'
import Reasons from '../InternalDensity/Reasons'
import VisitJourney from '../InternalDensity/VisitJourney'
import ReadyTransform from '../Services/ReadyTransform'
import Specialists from '../About/Specialists'
import HealthyBenefits from '../InternalDensity/HealthyBenfits'
import GetInTouch from '../Home/GetInTouch'
import RealPeople from '../Services/RealPeople'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const TeethWhiteningLanding = () => {
  return (
    <div>
      <Navbar/>
      <TeethWhiteningHome/>
      <KerlasLandmark/>
      <TeethWhiteningDesc/>
      <TeethWhiteningServices/>
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

export default TeethWhiteningLanding
