import React from 'react'
import Navbar from '../Navbar/Navbar';
import UltimateGuide from './UltimateGuide';
import UnderstandingProfessional from './UderstandingProfessional';
import RelatedArticles from './RelatedArticles';
import ReadyTransform from '../Services/ReadyTransform';
import FAQ from '../Home/FAQ';
import Footer from '../Footer/Footer';

const EachBlogLanding:React.FC = () => {
  return (
    <div>
      <Navbar />
      <UltimateGuide />
      <UnderstandingProfessional />
      <RelatedArticles />
      <ReadyTransform />
      <FAQ />
      <Footer />
    </div>
  )
}

export default EachBlogLanding;
