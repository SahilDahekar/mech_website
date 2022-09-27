import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Data from "../Data.js";

const Mesa = () => {
  return (
    <>
      <Navbar/>
      <header className="h-24"/>
      <h2 className=" text-3xl md:text-4xl font-bold text-center px-2 py-4 mb-2">Mechanical Engineering Students Association<br/> (MESA)</h2>
      {/* <video src="https://docs.google.com/uc?id=1JPJVlw6D4lsS4WropX-bIEO5tfuOZuGZ" controls /> */}
      <p className="text-center text-lg w-[70%] mx-auto py-4 px-3">‘MESA’ is an organization which works for the benefits of the students. The purpose of MESA is to enrich students with different qualities to enhance their personality and emerges as multi-functional engineer who is recognized globally.</p>
      <div className="">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900 text-center py-2">DYNAMECH (2022)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center px-6 py-6">
          {Data.mesa.map((ele,idx)=>{
            return <div className="w-full h-full"><img className="rounded-lg cursor-pointer hover:scale-[1.01] w-full h-full object-cover transition-all" key={idx} src={ele} alt={`mesa-${idx}`} /></div>
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Mesa;