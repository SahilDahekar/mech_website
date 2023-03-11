import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ActCard from "../components/ActCard.jsx";
import Data from "../Data.js";

const Activities = () => {
  return (
    <>
      <Navbar/>
      <header className="h-24"/>
      <h2 className='text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 py-6'>Activities</h2>
      <div className="mx-6 mb-6 grid md:grid-cols-2">
        {Data.activities.reverse().map((ele,idx)=>{
          return <ActCard key={idx} id={idx} link={ele.link} des={ele.description} date={ele.date} time={ele.time}/>
        })}
      </div>
      <Footer/>
    </>
  )
}

export default Activities;