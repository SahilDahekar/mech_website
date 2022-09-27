import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Data from "../Data.js";

const Supra = () => {
  return (
    <>
      <Navbar/>
      <header className="h-24"/>
      {/* <video src="https://docs.google.com/uc?id=1JPJVlw6D4lsS4WropX-bIEO5tfuOZuGZ" controls /> */}
      <div className="">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-2">SUPRA (2022)</h3>
        <p className="text-center text-lg w-[70%] mx-auto py-4 px-3">Team Maverick is the official formula student team of PVG's COET. We participate in two events called Supra and Formula Bharat. Supra is a National level event conducted at the Buddha International Circuit in Noida, and F1 Bharat is an international event held in Coimbatore.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center px-6 py-6">
          {Data.supra.map((ele,idx)=>{
            return <div className="w-full h-full"><img className="rounded-lg cursor-pointer hover:scale-[1.01] w-full h-full object-cover transition-all" key={idx} src={ele} alt={`mesa-${idx}`} /></div>
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Supra;