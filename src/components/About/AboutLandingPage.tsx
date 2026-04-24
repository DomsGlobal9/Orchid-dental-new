// import React from 'react'

import Navbar from '../Navbar/Navbar'
import Expertise from './Expertise'
import Description from './description'
import Clinic from './Clinic'
import Founder from './Founder'
import Whychoose from './Whychoose'
import Howwework from './Howwework'
import OurMission from './OurMission'
import Specialists from './Specialists'
import MeetourTeam from './MeetourTeam'
import Ourlocations from './Ourlocations'
import FAQ from "../Home/FAQ";
import Footer from '../Footer/Footer'
import BranchLocation from '../OurLocations/BranchLocation'
const AboutLandingPage = () => {
  return (
    <div>
       <Navbar />
       <Expertise />
       <Description />
       <Clinic />
       
       <Founder />
       <Whychoose />
       <Howwework />
       <OurMission />
       <Specialists />
       <MeetourTeam />
       <Ourlocations />
       <BranchLocation/>
       <FAQ />
       <Footer />
    </div>
  )
}

export default AboutLandingPage
