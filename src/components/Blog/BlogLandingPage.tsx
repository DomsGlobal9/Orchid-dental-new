import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dentalcare from './Dentalcare';
import FeaturedArticle from './FeaturedArticle';
import LatestArticle from './LatestArticle';
import ReadyTransform from '../Services/ReadyTransform';   
import FAQ from "../Home/FAQ"; 
import Footer from '../Footer/Footer';
const BlogLandingPage: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Dentalcare />
        <FeaturedArticle />
        <LatestArticle />
        <ReadyTransform />
        <FAQ />
        <Footer />
    </div>
  );
}

export default BlogLandingPage;