import React from 'react'
import Navbar from '../Navbar/Navbar'

import OurDentists from './OurDentists'
import FAQ from '../Home/FAQ'
import Footer from '../Footer/Footer'

const OurTeamLanding:React.FC = () => {
  return (
    <div>
      
        <Navbar />
        <OurDentists/>
        <FAQ/>
        <Footer/>

    </div>
  )
}

export default OurTeamLanding
