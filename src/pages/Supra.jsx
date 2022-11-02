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
        <div className="px-8 py-6 text-center mb-4 items-center grid md:grid-cols-3 gap-8">

        <p className="text-xl flex flex-col gap-3">
          <p>Rutwij Kulkarni <br/><span className="text-sm text-gray-500">(Team Captain)</span></p>
          <p>Prof. Vishal Chavan <br/><span className="text-sm text-gray-500">(Faculty Advisor)</span></p>
        </p>

        <p className="text-xl flex flex-col gap-3">
          <p>AIR 3rd - <span className="text-transparent font-bold bg-clip-text bg-gradient-to-t from-orange-900 via-amber-100 to-orange-900">₹50,000</span></p>
          <p>Cost 1st place - <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700'>₹30,000</span></p>
          <p>Skidpad Test 1st place - <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700'>₹30,000</span></p>
          <p>Best Innovation award - <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">₹30,000</span></p>
          <p>Vehicle  Acceleration 2nd place - <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-slate-600 to-indigo-200'>₹20,000</span></p>
        </p>

        <p className="text-xl flex flex-col gap-3">
          <p>Mr. Sunil Redekar <br/><span className="text-sm text-gray-500">(Chairman PVG COET & GKPIOM)</span></p>
          <p>Prof. Rajendra Kaduskar <br/><span className="text-sm text-gray-500">(Director PVG COET & GKPIOM)</span></p>
          <p>Dr. Manoj Tarambale <br/><span className="text-sm text-gray-500">(Principal PVG COET & GKPIOM)</span></p>
          <p>Mechanical Engineering Department
          <br/><span className="text-sm text-gray-500">(Teaching, Non-Teaching and Supporting Staff)</span></p> 
        </p>

      </div>

      <div className="text-center mb-6"><a className="text-center text-xl text-blue-500 px-4 py-2 border-2 border-blue-700 hover:text-white hover:bg-blue-700 rounded animate-pulse hover:animate-none transition" target="_blank" href="https://docs.google.com/uc?id=1JtyJw9vsJhQePZvQwf8uGpXNdUco8qOv">Check out SUPRA video here</a></div>

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