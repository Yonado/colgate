import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#F01A1D] flex flex-row gap-8 px-20 min-h-[25vh] items-center text-white'>
            <div className="flex flex-1 flex-col text-white gap-2 pr-10">
                <div className="logo text-3xl font-bold italic drop-shadow-2xl">Colgate.</div>
                <div className="copyrights text-xs">© 2022 Colgate-Palmolive Company.
                    All rights reserved.</div>
            </div>
            <div className='grid grid-cols-2 gap-[80px] md:gap-0 p-4 md:grid-cols-4  justify-between items-center w-full '>
                <div className="grid-rows-3 grid flex-col text-xs underline underline-offset-2 gap-3">
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">All Products</Link>
                </div>
                <div className="grid-rows-3 grid text-xs underline underline-offset-2 gap-3">
                    <Link href="/">About Our Ads</Link>
                    <Link href="/">Children's Privacy Policy</Link>
                    <Link href="/">All Articles</Link>
                </div>
                <div className="grid-rows-3 grid text-xs underline underline-offset-2 gap-3">
                    <Link href="/">Coupons</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Selling Points</Link>
                </div>
                <div className="grid-rows-3 grid text-xs underline underline-offset-2 gap-3">
                    <Link href="/">Our Mission</Link>
                    <Link href="/">Colgate Professional</Link>
                    <Link href="/">Educational Resources</Link>
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