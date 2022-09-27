import React , { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import Data from "../Data.js";
import { Link } from 'react-router-dom';

const Home = () => {
  const [count,setCount] = useState(0);

  const BgArray = [
    "https://docs.google.com/uc?id=19bUA7xcC8XzklUPM_zw2SS-QYUcMQn_T",
    "https://docs.google.com/uc?id=1JxRbRy-y1mXAvFIfsAWp_tHrLaJ6UdTV",
    "https://docs.google.com/uc?id=18s_73ar1y_FzcgVc4FDS1fWPe1Gbf792",
    "https://docs.google.com/uc?id=1OdyTQZ540c_SwW4ZKNr2Wunf3Obm14Iu",
    "https://docs.google.com/uc?id=1-SUHI8LeFr24_AGK2tvCcZiAsmGZ8X24"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if(count === 4){
        setCount(0);
      }
      else{
        setCount(prevcount => prevcount + 1);
      }
    }, 8000);
  
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
        <Navbar/>

        <header className="h-[100vh] w-full bg-no-repeat bg-cover bg-center relative">
            <img className="absolute top-0 left-0 h-full w-full -z-10 object-cover" src={BgArray[count]} alt={count} />
            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-black'/>
            <div className="max-w-[70%] text-3xl absolute bottom-[8%] left-7">
              <p>Mechanical Department PVG COET</p>
              <p className="text-[#ffbe0b] text-xl mt-2">Dr. M. M. Bhoomkar</p>
              <p className="text-sm text-[#c9a541] -mt-1">HOD Mech. Engg. Dept.</p>
            </div>
        </header>

        <p className="p-6 w-[90%] md:w-[80%] lg-[70%] text-xl mx-auto text-center">The Department of Mechanical Engineering was established in the year 1991 with an intake of 60 students, which was increased to 120 students in the year 2009. Since its inception, the Department has been offering a four-year B.E. program in Mechanical Engineering at undergraduate level while at the postgraduate level, it offers Ph.D. program in Mechanical Engineering.</p>

        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-4 mb-4">Student Associations</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3 py-6 mb-8 px-4 gap-4">
          {/* Card 1 MESA */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-[#161a1d] max-w-sm">
              <div className="h-64 w-full">
                <img className="rounded-t-lg object-cover w-full h-full" src={Data.homePage.dynamechLink} alt="" loading='lazy'/>
              </div>
              <div className="p-6">
                <h5 className="text-white text-2xl font-medium mb-2">MESA</h5>
                <p className="text-gray-200 text-base mb-4">
                ‘MESA’ is an organization which works for the benefits of the students. The purpose of MESA is to enrich students with different qualities to enhance their personality and emerges as multi-functional engineer who is recognized globally.
                </p>
                <Link to="/mesa" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</Link>
              </div>
            </div>
          </div>

          {/* Card 2 SUPRA */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-[#161a1d] max-w-sm">
              <div className="w-full h-64">
                <img className="rounded-t-lg object-cover w-full h-full" src={Data.homePage.supraLink} alt="" loading='lazy'/>
              </div>
              <div className="p-6">
                <h5 className="text-white text-2xl font-medium mb-2">SUPRA</h5>
                <p className="text-gray-200 text-base mb-4">
                Team Maverick is the official formula student team of PVG's COET. We participate in two events called Supra and Formula Bharat. Supra is a National level event conducted at the Buddha International Circuit in Noida, and F1 Bharat is an international event held in Coimbatore.

                </p>
                <Link to="/supra" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</Link>
              </div>
            </div>
          </div>

          {/* Card 3 BAJA */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-[#161a1d] max-w-sm">
              <div className="w-full h-64">
                <img className="rounded-t-lg object-cover h-full w-full" src={Data.homePage.bajaLink} alt="" loading='lazy'/>
              </div>
              <div className="p-6">
                <h5 className="text-white text-2xl font-medium mb-2">BAJA</h5>
                <p className="text-gray-200 text-base mb-4">
                We are a team from PVGCOET that designs, fabricates, tests, and competes for an ATV at national level competitions.
                'Built with Passion, Driven with Pride'

                </p>
                <Link to="/baja" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</Link>
              </div>
            </div>
          </div>

        </div>

        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-4 mb-4">Product Innovation Lab</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center px-6 py-6">
          {Data.piLab.map((ele,idx)=>{
            return <div className="w-full h-full"><img className="rounded-lg cursor-pointer hover:scale-[1.01] w-full h-full object-cover transition-all" key={idx} src={ele.link} alt={`piLab-${idx}`} /></div>
          })}
        </div>

        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-4 mb-4">Notice Board</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center px-6 py-6">
          {Data.noticeBoard.map((ele,idx)=>{
            return <div className="w-full h-full"><img className="rounded-lg cursor-pointer hover:scale-[1.01] w-full h-full object-cover transition-all" key={idx} src={ele.link} alt={`noticeBoard-${idx}`} /></div>
          })}
        </div>

        <Footer/>
    </>
  )
}

export default Home;