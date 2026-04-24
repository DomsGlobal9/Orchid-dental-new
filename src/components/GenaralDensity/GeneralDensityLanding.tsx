import React from 'react'

import Navbar from '../Navbar/Navbar'
import GeneralDensityFAQ from './GeneralDensityFAQ'
import GeneralDensityHome from './GeneralDensityHome'
// import KerlasLandmark from "../Services/KerlasLandmark"
import CoreGeneralService from './CoreGeneralService'
import GetInTouch from '../Home/GetInTouch'
import ReadyTransform from '../Services/ReadyTransform'
import Discover from './Discover'
import FAQ from '../Home/FAQ'
import RealPeople from '../Services/RealPeople'
import Footer from '../Footer/Footer'
import PinkKerla from '../PinkKerla'
const GeneralDensityLanding: React.FC = () => {
  return (
    <div>
      <Navbar />
      <GeneralDensityHome />
      <GeneralDensityFAQ />
      {/* <KerlasLandmark /> */}
      <PinkKerla/>
      <CoreGeneralService />
      <GetInTouch />
      <ReadyTransform />
      <Discover />
      <RealPeople/>
      <FAQ />
      <Footer />
    </div>
  )
}

export default GeneralDensityLanding
