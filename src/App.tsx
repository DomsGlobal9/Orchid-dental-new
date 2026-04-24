import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LandindPage from "../src/components/LandingPage"
import AboutLandingPage from './components/About/AboutLandingPage'
import ServicesLandingpage from './components/Services/ServicesLandingpage'
import GeneralDensityLanding from './components/GenaralDensity/GeneralDensityLanding'
import InternalDensityLanding from './components/InternalDensity/InternalDensityLanding'
import BlogLandingPage from './components/Blog/BlogLandingPage'
import EachBlogLanding from './components/Blog/EachBlogLanding'
import GalleryLandingPage from './components/Gallery/GalleryLandingPage'
import OurTeamLanding from './components/OurTeam/OurTeamLanding'
import ContactusLanding from './components/ContactUs/ContactusLanding'
import PrivacyLanding from './components/PrivacyPolicy/PrivacyLanding'
import TermsConditionsLanding from './components/TermsConditions/TermsConditionsLanding'
import FrequentlyLanding from './components/FrequentlyAsked/FrequentlyLanding'
import DoctorProfileLanding from './components/DoctorProfile/DoctorProfileLanding'
import FeedBackFormLanding from './components/FeedBackForm/FeedBackFormLanding'
import OurLocationLanding from './components/OurLocations/OurLocationLanding'
import MyProfileLanding from './components/MyProfile/MyProfileLanding'
import MyAccountLanding from './components/MyAccount/MyAccountLanding'
import MyBookingLanding from './components/MyBookings/MyBookingLanding'
import MyBookingDetailsLanding from './components/MyBookingDetails/MyBookingDetailsLanding'


import DentalFillingLanding from './components/DentalFilling/DentalFillingLanding'
import DentalBridgeLanding from './components/DentalBridge/DentalBridgeLanding'
import DentalCrownsLanding from './components/DentalCrowns/DentalCrownsLanding'
import WisdomTeethLanding from './components/WisdomTeeth/WisdomTeethLanding'
import RootCanalLanding from './components/RootCanal/RootCanalLanding'
import DentureServicesLanding from './components/DentureServices/DentureServicesLanding'

import CosmeticDentistryLanding from './components/CosmeticDentistry/CosmeticDentistryLanding'
import VeneersLanding from './components/Veneers/VeneersLanding'
import CompositeBondingLanding from './components/CompositeBonding/CompositeBondingLanding'
import DentalImplantsLanding from './components/DentalImplants/DentalImplantsLanding'
import ClearAlignerLanding from './components/ClearAligner/ClearAlignerLanding'
import TeethWhiteningLanding from './components/TeethWhitening/TeethWhiteningLanding'
import SleepDentistryLanding from './components/SleepyDentistry/SleepDentistryLanding'
import GumLanding from './components/GumRecountouring/GumLanding'
import BracesLanding from './components/BracesTreatment/BracesLanding'


import LaserLanding from './components/Laser/LaserLanding'
import PediatricLanding from './components/Pediatric/PediatricLanding'
import DentalToursimLanding from './components/DentalTourism/DentalToursimLanding'

import ThankyouLanding from './components/Thankyou/ThankyouLanding'
const App = () => {
  return (
   <Routes>

       <Route path="/" element={<LandindPage />} />
       <Route path="/about" element={<AboutLandingPage />} />
       <Route path="/services" element={<ServicesLandingpage />} />
       <Route path="/general-density" element={<GeneralDensityLanding />} />
       <Route path="/internal-density" element={<InternalDensityLanding />} />
       <Route path="/blog" element={<BlogLandingPage />} />
       <Route path="/each-blog" element={<EachBlogLanding />} />
       <Route path="/gallery" element={<GalleryLandingPage />} />
       <Route path="/our-team" element={<OurTeamLanding />} />
       <Route path='/contact-us' element= {<ContactusLanding/>} />  
       <Route path='/privacy-policy' element = {<PrivacyLanding/>}/>
       <Route path='/terms-conditions' element ={<TermsConditionsLanding/>}/>
       <Route path='/frequently-asked' element = {<FrequentlyLanding/>} />
       <Route path='/doctor-profile' element = {<DoctorProfileLanding/>}/>
       <Route path='/feed-back' element = {<FeedBackFormLanding/>}/>
       <Route path='/our-location' element= {<OurLocationLanding/>}/>
       <Route path='/profile' element = {<MyProfileLanding/>} />
       <Route path='/my-account' element= {<MyAccountLanding/>}/>
       <Route path='/my-booking' element= {<MyBookingLanding/>}/>
       <Route path='/booking-details' element= {<MyBookingDetailsLanding/>}/>



       <Route path='/dental-filling' element= {<DentalFillingLanding/>}/>
       <Route path='/dental-bridge' element ={<DentalBridgeLanding/>}/>
       <Route path='/dental-crown' element = {<DentalCrownsLanding/>}/>
       <Route path='/wisdom-teeth' element = {<WisdomTeethLanding/>}/>
       <Route path='/root-canal' element= {<RootCanalLanding/>}/>
       <Route path='/denture-service' element = {<DentureServicesLanding/>}/>
       <Route path='/cosmetic-dentistry' element = {<CosmeticDentistryLanding/>}/>
       <Route path='/veneers' element = {<VeneersLanding/>}/>
       <Route path='/composite-bonding' element= {<CompositeBondingLanding/>}/>
       <Route path='/dental-implants' element = {<DentalImplantsLanding/>}/>
       <Route path='/clear-aligner' element = {<ClearAlignerLanding/>}/>
       <Route path = '/teeth-whitening' element = {<TeethWhiteningLanding/>}/>
       <Route path='/sleep-dentistry' element = {<SleepDentistryLanding/>}/>
       <Route path = '/gum-recountouring' element = {<GumLanding/>}/>
       <Route path='/braces-treatment' element = {<BracesLanding/>}/>


        <Route path='/Laser' element = {<LaserLanding/>}/>
        <Route path = '/pediatric' element = {<PediatricLanding/>}/>
        <Route path = 'dental-tourism' element = {<DentalToursimLanding/>}/>

        <Route path = "/thankyou" element = {<ThankyouLanding/>}/>
   </Routes>

  )
}

export default App
