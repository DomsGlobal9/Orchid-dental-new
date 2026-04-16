import React from 'react'
import Navbar from '../Navbar/Navbar'
import DoctorProfileHome from './DoctorProfileHome'
import Footer from '../Footer/Footer'

const DoctorProfileLanding:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <DoctorProfileHome/>
        <Footer/>
    </div>
  )
}

export default DoctorProfileLanding
