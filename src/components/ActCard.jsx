import React from 'react';
import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";

const ActCard = ({id,link,des,date,time}) => {

    const slideLeft = () => {
        var slider = document.getElementById('slider' + id);
        slider.scrollLeft = slider.scrollLeft - 580;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider' + id);
        slider.scrollLeft = slider.scrollLeft + 580;
    };

  return (
    <div className="flex flex-col p-4 m-4 bg-[#161a1d] rounded-md">
        {link.length === 1 ? 
        <div className="h-96 rounded-md">
            <img className="object-cover rounded-md w-full h-full" src={link} alt={des} />
        </div> : 
        <div className="relative">
            <IoIosArrowDropleftCircle onClick={slideLeft} size={35} className="absolute top-1/2 left-1 -translate-y-1/2 cursor-pointer opacity-[0.5] hover:opacity-[1]"/>
            <div id={"slider" + id} className="flex overflow-x-scroll scroll-smooth h-96 scrollbar-hide rounded-md">
               { link.map((obj,id)=>{
                    return <img className="object-cover rounded-md w-full h-full mr-2 last-of-type:mr-0" src={obj} alt={id}/>
                })}
            </div>
            <IoIosArrowDroprightCircle onClick={slideRight} size={35} className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer opacity-[0.5] hover:opacity-[1]"/>
        </div>}
        <div className="flex items-center py-2 text-[#a4a6a8]">
            {date && <p className="mr-2 text-sm">{date}</p>}
            {time && <span className="text-sm">{time}</span>}
        </div>
        <p className="text-lg text-center font-bold py-2">{des}</p>
    </div>
  )
}

export default ActCard;