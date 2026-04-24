// import React from 'react';
 import {Link} from "react-router-dom"
const ThankyouHome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fafafa] px-4">
      {/* Container for content */}
      <div className="text-center">
        
        {/* Main Heading with Script-like feel */}
        <h1 className="text-6xl md:text-7xl font-serif italic text-[#432641] mb-6">
          Thank you !
        </h1>

        {/* Subtext */}
        <div className="space-y-2 mb-10">
          <p className="text-xl md:text-2xl text-[#333333] font-medium">
            Thanks for Connecting with us.
          </p>
          <p className="text-lg md:text-xl text-[#333333]">
            Our Executive will connect to you with in next 15-20 mins
          </p>
        </div>

        {/* Action Button */}
        <Link to='/'>
        
         <button 
          onClick={() => window.location.href = '/'}
          className="bg-[#432641] text-white px-10 py-3 rounded-full text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Go Home
        </button>
        
        </Link>
       
        
      </div>
    </div>
  );
};

export default ThankyouHome;