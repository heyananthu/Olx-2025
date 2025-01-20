import React from 'react'
import { FaCar } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { FaMobileButton } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { FaShirt } from "react-icons/fa6";
import { MdChair } from "react-icons/md"; 
import { GiSittingDog } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
function ScrollSection() {
    return (
        <div>
            <div className='grid grid-cols-4 gap-3 gap-y-7 ml-3 mt-6'>
                <FaCar size={80} className=' text-red-600 bg-slate-200 p-2 rounded-xl cursor-pointer' />
                <GiHouse size={80} className=' text-blue-600 bg-slate-200 p-2 rounded-xl cursor-pointer' />
                <FaMobileButton size={80} className=' text-cyan-400 bg-slate-200 p-2 rounded-xl cursor-pointer' />
                <MdOutlineWorkOutline size={80} className=' text-orange-400 bg-slate-200 p-2 rounded-xl cursor-pointer' />
                <RiMotorbikeFill size={80} className=' text-black bg-slate-200 p-2 rounded-xl cursor-pointer'/>
                <RiComputerFill size={80} className=' text-yellow-400 bg-slate-200 p-2 rounded-xl cursor-pointer'/>
                <MdChair  size={80} className=' text-pink-400 bg-slate-200 p-2 rounded-xl cursor-pointer'/>
                <FaShirt size={80} className=' text-blue-800 bg-slate-200 p-2 rounded-xl cursor-pointer'/>
                <GiSittingDog size={80} className=' text-slate-600 bg-slate-200 p-2 rounded-xl cursor-pointer'/>
                <FaBook size={80} className=' text-stone-600 bg-slate-200 p-2 rounded-xl cursor-pointer'/>
            </div>
        </div>
    )
}

export default ScrollSection
