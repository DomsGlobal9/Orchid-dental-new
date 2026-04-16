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
   </Routes>

  )
}

export default App
