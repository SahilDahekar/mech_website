import React from 'react';
import {FaInstagram , FaYoutube} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="px-4 pt-6 pb-3 bg-[#161a1d]">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center mb-6">MECH PVG</h1>
        <div className="grid gap-4 sm:gap-0 grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 md:w-[80%] lg:w-[60%] mx-auto mb-3 sm:divide-x divide-slate-500">
            <div className="flex flex-col justify-center items-center gap-1">
                <Link to="/mesa"><h2 className="text-2xl font-bold">MESA</h2></Link>
                <div className="flex items-center gap-2">
                    <a href="https://www.instagram.com/pvg_mesa/?hl=en" target="_blank" rel='noreferrer'>
                        <FaInstagram className="text-[#a4a6a8] hover:text-[#E1306C] cursor-pointer" size={20}/>
                    </a>
                    <BsTwitter className="text-[#a4a6a8] hover:text-[#1DA1F2] cursor-pointer" size={20}/>
                    <FaYoutube className="text-[#a4a6a8] hover:text-[#FF0000] cursor-pointer" size={20}/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <Link to="/supra"><h2 className="text-2xl font-bold">SUPRA</h2></Link>
                <div className="flex items-center gap-2">
                    <a href="https://www.instagram.com/_team_maverick/?hl=en" target="_blank" rel='noreferrer'>
                        <FaInstagram className="text-[#a4a6a8] hover:text-[#E1306C] cursor-pointer" size={20}/>
                    </a>
                    <BsTwitter className="text-[#a4a6a8] hover:text-[#1DA1F2] cursor-pointer" size={20}/>
                    <FaYoutube className="text-[#a4a6a8] hover:text-[#FF0000] cursor-pointer" size={20}/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <Link to="/baja"><h2 className="text-2xl font-bold">BAJA</h2></Link>
                <div className="flex items-center gap-2">
                    <a href="https://www.instagram.com/team_conquistador/?hl=en" target="_blank" rel="noreferrer">
                        <FaInstagram className="text-[#a4a6a8] hover:text-[#E1306C] cursor-pointer" size={20}/>
                    </a>
                    <BsTwitter className="text-[#a4a6a8] hover:text-[#1DA1F2] cursor-pointer" size={20}/>
                    <FaYoutube className="text-[#a4a6a8] hover:text-[#FF0000] cursor-pointer" size={20}/>
                </div>
            </div>
        </div>
        <div>
            <p className="text-xs text-center text-[#a4a6a8]">Copyright ©2022 <br/> Mechanical Department PVGCOET</p>
        </div>
    </div>
  )
}

export default Footer;