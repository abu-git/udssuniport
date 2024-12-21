'use client'
import React, { useState } from 'react'
import logo from '../public/udsslogo-removebg-preview.png'
import Image from 'next/image'

function Navigation() {
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <div className='px-8 md:px-10 py-3 fixed top-0 z-10 w-full'>
            <nav className='flex justify-between items-center text-white'>
                <div>
                    <Image
                        src={logo}
                        alt='VerifyNG Logo'
                        width={50}
                        height={50}
                        priority
                    />
                </div>

                <ul className={`hidden lg:flex justify-between items-center w-2/3`}>
                    <li>
                        <h2 className='nav-hover cursor-pointer'>About</h2>
                    </li>
                    <li>
                        <h2 className='nav-hover cursor-pointer'>Admission</h2>
                    </li>
                    <li>
                        <h2 className='nav-hover cursor-pointer'>Curiculum</h2>
                    </li>
                    <li>
                        <h2 className='nav-hover cursor-pointer'>Gallery</h2>
                    </li>
                    <li>
                        <h2 className='nav-hover cursor-pointer'>Contact</h2>
                    </li>
                </ul>

                {/* mobile navigation button --- is hidden on large devices */}
                <button onClick={() => setShowSideBar(!showSideBar)} className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button> 
            </nav>

            {/* Small Devices Navigation */}
            <div className={`top-0 right-0 w-[380px] bg-white text-lime-700 p-10 pl-20 fixed h-full z-40 ease-in-out duration-300 ${showSideBar ? "translate-x-0" : "translate-x-full"}`}>
                <nav>
                    <div className='flex justify-end'>
                        <button onClick={() => setShowSideBar(!showSideBar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className='text-center py-8 text-[20px]'>
                        <li>
                            <h2 className='nav-hover cursor-pointer'>About</h2>
                        </li>
                        <li>
                            <h2 className='nav-hover cursor-pointer'>Admission</h2>
                        </li>
                        <li>
                            <h2 className='nav-hover cursor-pointer'>Curiculum</h2>
                        </li>
                        <li>
                            <h2 className='nav-hover cursor-pointer'>Gallery</h2>
                        </li>
                        <li>
                            <h2 className='nav-hover cursor-pointer'>Contact</h2>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation