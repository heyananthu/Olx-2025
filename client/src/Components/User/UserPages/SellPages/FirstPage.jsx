import React from 'react'
import { FaCar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { GiHouse } from "react-icons/gi";
import { FaMobileButton } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { FaShirt } from "react-icons/fa6";
import { MdChair } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function FirstPage() {
    const navigate=useNavigate()
    return (
        <div className='bg-white h-screen'>
            <div className='flex text-2xl'>
                <FaArrowLeft className='text-black mt-6 ml-3' onClick={()=>{navigate('/')}}/>
                <h1 className='text-black mt-5 ml-8'>What are you offering ?</h1>
            </div>
            <div className="mt-12">
                <table className=" border-gray-500 w-full">
                    <tbody >
                        <tr className="border border-gray-500 ">
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer" onClick={()=>{navigate('/car')}}>
                                <FaCar size={40}  />
                                <p className='text-black text-xl'>Car</p>
                            </td>
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <GiHouse size={40} />
                                <p className='text-black text-xl'>Properties</p>
                            </td>
                        </tr>

                        <tr className="border border-gray-500">
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <FaMobileButton size={40} />
                                <p className='text-black text-xl'>Mobiles</p>

                            </td>
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <FaBook size={40} />
                                <p className='text-black text-xl'>Books</p>

                            </td>
                        </tr>

                        <tr className="border border-gray-500">
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <MdOutlineWorkOutline size={40} />
                                <p className='text-black text-xl'>Jobs</p>

                            </td>
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <RiMotorbikeFill size={40} />
                                <p className='text-black text-xl'>Bikes</p>

                            </td>
                        </tr>

                        <tr className="border border-gray-500">
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <RiComputerFill size={40} />
                                <p className='text-black text-xl'>Electronics</p>

                            </td>
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <FaShirt size={40} />
                                <p className='text-black text-xl'>Fashion</p>

                            </td>
                        </tr>
                        <tr className="border border-gray-500">
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <MdChair size={40} />
                                <p className='text-black text-xl'>Furniture</p>

                            </td>
                            <td className="border border-gray-500 p-4 place-items-center cursor-pointer">
                                <GiSittingDog size={40} />
                                <p className='text-black text-xl'>Pets</p>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FirstPage
