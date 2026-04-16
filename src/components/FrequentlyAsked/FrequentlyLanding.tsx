import React from 'react'
import Navbar from '../Navbar/Navbar'
import FrequentlyAskedHome from './FrequentlyAskedHome'
import Footer from '../Footer/Footer'

const FrequentlyLanding:React.FC = () => {
  return (
    <div>
      <Navbar/>
      <FrequentlyAskedHome/>
      <Footer/>
    </div>
  )
}

export default FrequentlyLanding
