import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navbarColor = () => {
    if(window.scrollY >= 80){
      setNavColor(true);
    }
    else{
      setNavColor(false);
    }
  }

  let activeStyle = {
    color: "#ced4da",
  };

  window.addEventListener('scroll', navbarColor);

  return (
    <>
      <div className={ navColor ? 'fixed top-0 w-full bg-[#00000099] backdrop-blur transition-all flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white shadow z-[100]' : 'fixed bg-[#0000004d] top-0 w-full transition-all flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white z-[100]'}>
        <Link to="/" className="flex items-center">
          {/* <img className="w-6 h-6 mr-2" src={process.env.PUBLIC_URL + "./images/image.png"} alt="logo student connect"/> */}
          <h2 className='w-full text-3xl font-bold'>MECH PVG</h2>
        </Link>
        <ul className='hidden md:flex'>
          <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/Activities"><li className="p-4 hover:text-[#FF9505] font-semibold">Activities</li></NavLink>
          <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/achieve"><li className="p-4 hover:text-[#FF9505] font-semibold">Achievements</li></NavLink>
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
      </div>
        <ul className={nav ? 'fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#242424] ease-in-out duration-500 z-[120]' : 'ease-in-out duration-500 fixed left-[-100%] z-[120]'}>
          <h1 className='w-full text-3xl font-bold text-center py-8'><Link to="/">MECH.</Link></h1>
            <li className="p-4 border-t border-gray-600 hover:text-[#FF9505] text-center font-semibold"><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/activities">Activities</NavLink></li>
            <li className="p-4 border-t border-b border-gray-600 hover:text-[#FF9505] text-center font-semibold"><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/achieve">Achievements</NavLink></li>
        </ul>
    </>
  );
};

export default Navbar;