import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-[#F01A1D] min-h-[14vh] flex items-center'>
            <div className='flex flex-row gap-4 text-white items-center mx-8 w-full h-full justify-between md:justify-start'>
                <div className="justify-self-start md:hidden">Mobile Menu</div>
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