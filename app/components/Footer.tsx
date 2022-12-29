import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#F01A1D] flex flex-col md:py-0 py-8 md:flex-row gap-8 px-20 min-h-[25vh] items-center text-white max-w-full'>
            <div className="flex flex-1 flex-col text-white gap-2 pr-10">
                <div className="logo text-3xl font-bold italic drop-shadow-2xl">Colgate.</div>
                <div className="copyrights text-xs">© 2022 Colgate-Palmolive Company.
                    All rights reserved.</div>
            </div>
            <div className='font-sans grid grid-cols-2 gap-[80px] md:gap-0 p-4 md:grid-cols-4  justify-between items-center w-full '>
                <div className="grid-rows-3 grid flex-col text-sm  gap-3 w-full">
                    <h6 className="no-underline font-semibold text-md pl-4">TERMS</h6>
                    <Link className="underline underline-offset-2" href="/">Terms of Use</Link>
                    <Link className="underline underline-offset-2" href="/">Privacy Policy</Link>
                    <Link className="underline underline-offset-2" href="/">All Products</Link>
                </div>
                <div className="grid-rows-3 grid text-sm  gap-3 w-full">
                    <h6 className="no-underline font-semibold text-md pl-4">POLICIES</h6>
                    <Link className="underline underline-offset-2" href="/">About Our Ads</Link>
                    <Link className="underline underline-offset-2" href="/">Children's Privacy</Link>
                    <Link className="underline underline-offset-2" href="/">All Articles</Link>
                </div>
                <div className="grid-rows-3 grid text-sm gap-3 w-full">
                    <h6 className="no-underline font-semibold text-md pl-4">PRODUCTS</h6>
                    <Link className="underline underline-offset-2" href="/">Coupons</Link>
                    <Link className="underline underline-offset-2" href="/">Contact</Link>
                    <Link className="underline underline-offset-2" href="/">Selling Points</Link>
                </div>
                <div className="grid-rows-3 grid text-sm  gap-3 w-full">
                    <h6 className="no-underline font-semibold text-md pl-4">MISSION</h6>
                    <Link className="underline underline-offset-2" href="/">Our Mission</Link>
                    <Link className="underline underline-offset-2" href="/">Colgate Professional</Link>
                    <Link className="underline underline-offset-2" href="/">Educational Resources</Link>
                </div>
            </div>
            {/* <div className='flex justify-between items-center flex-row w-full '>
                <div className="flex flex-col text-xs underline underline-offset-2 gap-3">
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">All Products</Link>
                </div>
                <div className="flex flex-col text-xs underline underline-offset-2 gap-3">
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">All Products</Link>
                </div>
                <div className="flex flex-col text-xs underline underline-offset-2 gap-3">
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">All Products</Link>
                </div>
                <div className="flex flex-col text-xs underline underline-offset-2 gap-3">
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">All Products</Link>
                </div>
            </div> */}
        </div>
    )
}

export default Footer