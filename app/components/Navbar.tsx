'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

const closeMenu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>



const Navbar = () => {
    const [toggle, useToggle] = useState(false)

    return (
        <div className='bg-[#F01A1D] min-h-[14vh] flex items-center'>
            <div className='flex flex-row gap-4 text-white items-center mx-8 w-full h-full justify-between md:justify-start'>
                <div className="justify-self-start md:hidden cursor-pointer" onClick={() => useToggle(!toggle)}>{hamburgerIcon}</div>
                <div className={toggle ? "mobile-menu h-screen w-full fixed top-0 right-0 bottom-0 left-0 z-10 bg-black duration-200 ease-in" : "mobile-menu h-screen w-full fixed top-0 right-0 bottom-0 left-[-100%] z-10 bg-black ease-out duration-200"}>
                    <div className="flex flex-row gap-4 text-white mx-8 my-6 justify-start h-full w-full">
                        <div className={toggle && "absolute top-8 left-8 self-start md:hidden cursor-pointer transition ease-in duration-300"} onClick={() => useToggle(!toggle)}>{closeMenu}</div>
                        <div className="mobile-links justify-self-start my-20 flex flex-col gap-8 text-xl">
                            <Link href="/">Professionals</Link>
                            <Link href="/">Research</Link>
                            <Link href="/">Products</Link>
                            <Link href="/">Contact</Link>
                            <hr className="opacity-75 my-8"></hr>
                            <Link href="/">Oral Health</Link>
                            <Link href="/">Colgate's Mission</Link>
                            <Link href="/">The World Smiles</Link>
                        </div>
                        <div className={toggle && "absolute top-16 right-2 font-bold text-xl italic self-start md:hidden cursor-pointer rotate-90"}>Colgate.</div>
                        {/* <div className="mobile-menu-text flex items-center justify-end h-full w-full rotate-90 text-2xl italic font-bold">Colgate.</div> */}
                    </div>
                </div>
                <div className="logo w-16 h-16 flex items-center justify-self-end md:justify-self-start"><img src="logo.png" alt="" /></div>
                <div className="hidden font-sans links md:flex flex-row items-center gap-8 mx-8 text-xl font-light">
                    <Link href="/">Professionals</Link>
                    <Link href="/">Research</Link>
                    <Link href="/">Products</Link>
                    <Link href="/">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar