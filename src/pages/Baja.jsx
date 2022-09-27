import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Data from "../Data.js";

const Baja = () => {
  return (
    <>
      <Navbar/>
      <header className="h-24"/>
      {/* <video src="https://docs.google.com/uc?id=1JPJVlw6D4lsS4WropX-bIEO5tfuOZuGZ" controls /> */}
      <div className="">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center py-2">BAJA</h3>
        <p className="text-center text-lg w-[70%] mx-auto py-4 px-3">We are a team from PVGCOET that designs, fabricates, tests, and competes for an ATV at national level competitions.'Built with Passion, Driven with Pride'</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center px-6 py-6">
          {Data.baja.map((ele,idx)=>{
            return <div className="w-full h-full"><img className="rounded-lg cursor-pointer hover:scale-[1.01] w-full h-full object-cover transition-all" key={idx} src={ele} alt={`mesa-${idx}`} /></div>
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Baja;