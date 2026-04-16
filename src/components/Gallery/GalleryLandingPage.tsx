import React from 'react';
import Navbar from '../Navbar/Navbar';
import KerlasLandmark from '../Services/KerlasLandmark';
import OrchidExperiences from './OrchidExperiences';   

import ReadyTransform from '../Services/ReadyTransform';
import FAQ from '../Home/FAQ';
import Footer from '../Footer/Footer';

const GalleryLandingPage = () => {
  return (
    <div>
        
        <Navbar />
        <div className='mt-6'>

        </div>
        <KerlasLandmark />
        <OrchidExperiences />
        <ReadyTransform />
        <FAQ />
        <Footer />
        
    </div>
  )
}   
export default GalleryLandingPage