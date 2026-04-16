import React from 'react'
import Navbar from '../Navbar/Navbar'
import OurLocationImg from './OurLocationImg'
import DifferentLocations from './DifferentLocations'
import BranchLocation from './BranchLocation'
import StillQuestions from './StillQuestions'
import Footer from '../Footer/Footer'

const OurLocationLanding:React.Fc = () => {
  return (
    <div>
      <Navbar/>
      <OurLocationImg/>
      <DifferentLocations />
      <BranchLocation/>
      <StillQuestions/>
      <Footer/>
    </div>
  )
}

export default OurLocationLanding
