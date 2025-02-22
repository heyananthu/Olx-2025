import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
function BottomNav() {
    const navigate = useNavigate()
    return (
        <div className="bg-white fixed bottom-0 left-0 p-4 h-20 w-full shadow-lg flex justify-around items-center sm:hidden md:hidden">            <div className='flex gap-11 text-black ml-2 mt-4'>
            <FaHome size={40} className='cursor-pointer' />
            <IoChatboxOutline size={40} className='cursor-pointer' />
            <p className='rounded-full font-bold fixed left-[10.5rem] top-[49.5rem] w-24 h-24 text-6xl text-center bg-white border-8 border-l-green-500 border-t-red-600 border-r-yellow-300 border-b-blue-600 p-1 cursor-pointer'
                onClick={() => { navigate('/sellfirst') }}
            >+</p>
            <p className='text-2xl font-sans mt-4'>Sell</p>
            <TiDocumentText size={40} className='cursor-pointer' />
            <VscAccount size={40} className='cursor-pointer' />
        </div>
        </div>
    )
}

export default BottomNav
