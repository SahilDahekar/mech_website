import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Achieve = () => {
  return (
    <>
      <Navbar/>

      <header className="h-[100vh] bg-AchievementsBg bg-no-repeat bg-cover" />

      <h2 className="text-center font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 py-6">Achievements</h2>

      <h3 className="text-3xl text-center font-bold">Supra 2022 Achievement</h3>

      <div className="px-8 py-6 w-full h-full grid md:grid-cols-3 gap-4">
          <img className="object-cover w-full h-full rounded-md" src="https://docs.google.com/uc?id=1AHBLzr7xV27iA3VAKtqKvwa9suJq1cBF" alt="mech achievements" />
          <img className="object-cover md:col-span-2 w-full h-full rounded-md" src="https://docs.google.com/uc?id=13a27tB53ZuwK23fLWWgEWW0EuNXlK_ts" alt="mech achievements" />
      </div>

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

      <hr/>

      {/* Lions Club */}
      <h3 className="text-3xl text-center font-bold mt-4">Best Teachers Award</h3>

      <div className="px-8 py-6 w-full h-full mt-4 grid md:grid-cols-2 gap-4">
        <img className="object-cover w-full h-full rounded-md" src="https://docs.google.com/uc?id=1RzwkPNCJ8s3PGwoMcuYuAGAjoMcmYj3u" alt="mech achievements" />

        <img className="object-cover w-full h-full rounded-md" src="https://docs.google.com/uc?id=1uYRsZiEJEZlSWY8jTgzwOM0E4VpGzEk2" alt="mech achievements" />
      </div>

      <p className="text-xl text-center px-8 pb-6">
      On 12 Sept 22, the Best Teachers Award was awarded to Dr. N.G Jaiswal by Lions Club, Pune
      </p>
      {/* Lions Club */}

      <hr/>

      <h3 className="text-3xl text-center font-bold mt-4">Vinodottam Karandak Achievement</h3>

      <div className="px-8 py-6 w-full h-full my-4 gap-4">
          <img className="object-cover w-full h-full rounded-md" src="https://docs.google.com/uc?id=1Ebr93ckgdQrTTqT6cY9SeVYNZ2UJ5hk5" alt="mech achievements" />
          <p className="text-xl text-center px-8 py-6">Congratulations to a Student from college for winning the honor of mastery in her one-act gave Aala Pakhru in the Vinodottam Karandak Open State Level One Act Competition.</p>
      </div>

      <Footer/>
    </>
  )
}

export default Achieve;