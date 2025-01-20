import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function Car() {
    const navigate = useNavigate()
    return (
        <div className='bg-white h-screen'>
            <div className='flex text-2xl text-black border shadow-sm'>
                <FaArrowLeft className='ml-4 mt-5' onClick={() => { navigate('/sellfirst') }} />
                <h1 className='mt-4 ml-7 mb-4'>Include some details</h1>
            </div>
            <div className="w-[23rem]">
                <input
                    type="text"
                    placeholder="Brand *"
                    className="border-b bg-white text-xl border-black w-full p-2 ml-5 mt-8"
                />
                <input
                    type="text"
                    placeholder="Year *"
                    className="border-b bg-white text-xl border-black w-full p-2 ml-5 mt-8"
                />
                <input
                    type="text"
                    placeholder="Fuel *"
                    className="border-b bg-white text-xl border-black w-full p-2 ml-5 mt-8"
                />
                <select className='bg-white text-xl border-black w-[22.5rem] p-2 ml-5 mt-8'>
                    <option>
                        Automatic
                    </option>
                    <option>
                        Manual
                    </option>
                </select>

                <input
                    type="text"
                    placeholder="No. of Owners "
                    className="border-b bg-white text-xl border-black w-full p-2 ml-5 mt-8"
                />

                <input
                    type="text"
                    placeholder="Ad title * "
                    className="border-b bg-white text-xl border-black w-full p-2 ml-5 mt-8"
                />
                <p className='text-black mt-3 ml-5'>Mention the key features of your item (e.g. brand, model, age, type)</p>

                <input
                    type="text"
                    placeholder="Describe what you are selling * "
                    className="border-b bg-white text-xl border-black w-full p-2 ml-5 mt-8"
                />
                <p className='text-black mt-3 ml-5'>Include condition, feature and reason for selling</p>
            </div>
            <div className='border shadow-sm mt-36 h-12 place-items-center'>
            <button className='bg-slate-700 w-[25rem] h-14 ml-1 text-white text-xl font-bold'>Next</button>
            </div>


        </div>
    )
}

export default Car
