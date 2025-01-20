import React from 'react'
import olxicon from '../../../../assets/olxlogo.png'
import { AiOutlineHeart } from "react-icons/ai";

function UserNav() {
    return (
        <div className='bg-white border border-b-slate-400 shadow-md shadow-gray-200'>
            <div className="navbar">
                <div className="flex">
                    <img src={olxicon} className='w-[8rem]' />
                </div>
                <div className=" gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered border-black bg-white w-[16rem] sm:w-[68rem] " />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <AiOutlineHeart size={35} className='hidden sm:ml-2 sm:inline-block cursor-pointer' />
                    <div className='sm:border-4  sm:rounded-2xl sm:w-[5.5rem] sm:text-center border-t-indigo-500 border-l-yellow-500 border-r-teal-400 border-b-blue-500 hidden sm:block cursor-pointer'>
                        <p className='text-black font-bold mb-1'> <span className=' text-black text-2xl'>+ </span>SELL</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserNav
