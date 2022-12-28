'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { motion, useScroll } from "framer-motion"
import { useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <div className='bg-[#F01A1D]'>
        <div className='md:h-[70vh] pb-20 md:pb-0 flex flex-col md:flex-row  w-full md:pt-20 max-w-[90%] mx-auto gap-12'>
          <div className="text-white text flex flex-col gap-4 md:gap-8 items-center justify-start">
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              animate={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.5 }}
            ><h2 className='font-vera italic font-bold text-6xl md:text-8xl drop-shadow-xl tracking-wide'>Colgate.</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 1 }}
            ><h4 className='drop-shadow-md tracking-wider text-3xl md:text-5xl font-sans font-light'>The Power of a Smile.</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 1 }}
            >
              <p className="font-vera italic tracking-wide drop-shadow-sm text-center">Learn how Colgate champions optimism, sustainability, and healthy smiles around the world.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 1 }}
            ><button className='border-2 border-white py-3 px-4 rounded-3xl rounded-tr-none drop-shadow-sm text-lg hover:text-[#F01A1D] hover:bg-white  transition ease-in-out duration-200'>Learn More</button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -95 }}
            viewport={{ once: true }}
            transition={{ type: "tween", duration: 0.5 }}
            className="hidden md:block image">
            <div className="circle bg-white rounded-full p-10 md:mt-[-100px] flex-1 flex items-center mx-auto w-[300px] h-[300px] md:w-[700px] md:h-[700px] z-0">
              <img className='relative mx-auto my-auto w-[70%]' src="toothpaste3.webp" alt="" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="md:flex hidden md:flex-row gap-8 justify-center px-12 relative mt-8 z-80 text-center font-sans">
        {/* <Link href="/">
          <div className="rounded-xl text-xl italic px-6 py-2 text-[#F01A1D] underline-offset-[12px] underline">
            <h6 className='drop-shadow-sm'>Oral Health</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl italic px-6 py-2 text-[#F01A1D] underline-offset-[12px] underline">
            <h6 className='drop-shadow-sm'>Colgate's Mission</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl italic px-6 py-2 text-[#F01A1D] underline-offset-[12px] underline">
            <h6 className='drop-shadow-sm'>Oral Health</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl italic px-6 py-2 text-[#F01A1D] underline-offset-[12px] underline">
            <h6 className='drop-shadow-sm'>Colgate's Mission</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl italic px-6 py-2 text-[#F01A1D] underline-offset-[12px] underline">
            <h6 className='drop-shadow-sm'>Oral Health</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl italic px-6 py-2 text-[#F01A1D] underline-offset-[12px] underline">
            <h6 className='drop-shadow-sm'>Colgate's Mission</h6>
          </div>
        </Link> */}

        <Link href="/">
          <div className="rounded-xl text-xl px-6 py-2 bg-[#B31F24] text-white">
            <h6 className='drop-shadow-sm'>Oral Health</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl px-6 py-2 bg-[#B31F24] text-white">
            <h6 className='drop-shadow-sm'>Colgate's Mission</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl  px-6 py-2 bg-[#B31F24] text-white">
            <h6 className='drop-shadow-sm'>The World Smiles</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl px-6 py-2 bg-[#B31F24] text-white">
            <h6 className='drop-shadow-sm'>Oral Health</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl px-6 py-2 bg-[#B31F24] text-white">
            <h6 className='drop-shadow-sm'>Colgate's Mission</h6>
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-xl text-xl px-6 py-2 bg-[#B31F24] text-white">
            <h6 className='drop-shadow-sm'>The World Smiles</h6>
          </div>
        </Link>
      </div>


      <div className='flex flex-col-reverse md:flex-row justify-center gap-10 mx-8 md:mx-16 my-8 '>
        <div className="left max-w-[50] md:max-w-[35%] flex flex-col gap-4">
          <div className="flex gap-2 flex-col text-white bg-[#F01A1D] p-8 text-center rounded-lg cursor-pointer">
            <h4 className='text-5xl italic font-bold drop-shadow-xl'>Innovation</h4>
            <p className='text-lg italic drop-shadow-md'>Leading the dental world since 1873.</p>
          </div>
          <div className="flex gap-2 flex-col text-white p-8 text-center rounded-lg bg-[#F01A1D] bg-cover bg-no-repeat bg-[url('../public/optic-white.webp')] cursor-pointer">
            <h4 className='text-5xl italic pt-20 max-w-[80%] '>Whiten your teeth <span className="font-bold drop-shadow-md">while you sleep.</span></h4>
            <p className='text-lg italic drop-shadow-md'>with Colgate® Optic White® Overnight Whitening Pen.</p>
          </div>
          <div className="flex gap-2 flex-col text-white bg-[#F01A1D] p-8 py-[80px] text-center rounded-lg cursor-pointer">
            <h4 className='text-4xl italic font-bold drop-shadow-xl'>All Colgate Products >> </h4>
          </div>
        </div>
        <div className="right flex flex-col gap-4">
          <div className="cursor-pointer w-full h-1/2 bg-no-repeat md:h-[500px] md:w-[750px] hover:bg-black/40 bg-black/20 transition ease-in-out bg-blend-overlay rounded bg-cover bg-[url('../public/Colgate-lede.webp')] flex flex-col justify-end pb-16 p-8 gap-2">
            <h6 className="text-5xl italic text-white max-w-[50%] text-center font-bold drop-shadow-lg">Colgate.</h6>
            <h6 className="text-white italic drop-shadow-md text-4xl max-w-[60%]">Take your dental game to <span className="font-bold drop-shadow-lg">the next level.</span></h6>
          </div>
          <div className="md:h-[300px] md:w-[750px] rounded bg-[#8B89C5] flex flex-row items-center p-5 md:p-0">
            <div className="flex-col text-white px-10 gap-6 flex text-center">
              <h4 className='text-4xl font-bold italic drop-shadow-lg'>Changing the game.</h4>
              <h6 className="text-2xl drop-shadow-lg">Colgate® <span className="font-bold">Optic White®</span></h6>
              <button className='border-2 border-white py-3 px-4 rounded-3xl rounded-tr-none drop-shadow-sm text-lg hover:text-[#8B89C5] hover:bg-white  transition ease-in-out duration-200'>Learn More</button>
            </div>
            <div className="h-full w-full overflow-hidden flex items-center ">
              <img src="/colgate-optic-white-regimen.png.rendition.486.597.png" className='object-cover md:scale-[55%]' alt="" />
            </div>
          </div>
          {/* <div><img className="rounded" src="/Co by Colgate lede.webp" alt="" /></div> */}
        </div>
      </div>


      <div className='flex flex-col md:flex-row justify-center gap-10 mx-8 md:mx-16 my-8'>
        <div className="left max-w-[50] md:max-w-[100%] flex flex-col gap-4">
          <div className="banner flex flex-col px-4 py-10  bg-[#900405] text-white italic gap-10 rounded-lg md:mt-[-70px]">
            <h6 className='text-center drop-shadow-lg text-4xl text-normal font-bold'>Popular:</h6>
            <div className="links flex flex-col drop-shadow-lg ml-2 gap-8 texl-4xl items-center md:items-start">
              <Link className='text-3xl' href="/">Power of <span className="font-bold">Optimism</span> >></Link>
              <Link className='text-3xl' href="/">Empowering <span className="font-bold">the youth</span> >></Link>
              <Link className='text-3xl' href="/">Future has a <span className="font-bold">smile</span> >></Link>
              <Link className='text-3xl' href="/">Know <span className="font-bold">what you get</span> >></Link>
            </div>
          </div>
        </div>
        <div className="right flex flex-col gap-4">
          <div className="bg-center cursor-pointer w-full h-1/2 bg-no-repeat md:h-[500px] md:w-[750px] hover:bg-black/40 bg-black/20 transition ease-in-out bg-blend-overlay rounded bg-cover bg-[url('../public/home-hero-father.webp')] flex flex-col justify-center pb-16 p-8 gap-2">
            <div className="text flex flex-col text-4xl text-white max-w-[40%] gap-12">
              <h4 className='drop-shadow-lg text-5xl font-bold italic'>Colgate keeps the world smiling.</h4>
              <button className="p-5 border-white border-2 rounded-full justify-center items-center hover:text-black hover:bg-white transition ease-in-out duration-300 text-center justify-self-end font-bold">Our Mission</button>
            </div>
          </div>
        </div>
      </div>



    </div >
  )
}



// <div className='flex flex-col md:flex-row justify-between gap-4 mx-16 my-8'>
//         <div className="left max-w-full md:max-w-[35%] flex flex-col gap-4">
//           <div className="flex gap-2 flex-col text-white bg-[#F01A1D] p-8 text-center rounded-lg">
//             <h4 className='text-5xl italic font-bold drop-shadow-xl'>Innovation</h4>
//             <p className='text-lg italic drop-shadow-md'>Leading the dental world since 1873.</p>
//           </div>
//           <div className="flex gap-2 flex-col text-white p-8 text-center rounded-lg bg-[#F01A1D] bg-cover bg-no-repeat bg-[url('../public/optic-white.webp')]">
//             {/* <div className='relative '>
//               <img className="absolute object-cover" src="optic-white.webp" alt="" />
//             </div> */}
//             <h4 className='text-5xl italic pt-20 max-w-[80%] '>Whiten your teeth <span className="font-bold drop-shadow-md">while you sleep.</span></h4>
//             <p className='text-lg italic drop-shadow-md'>Leading the dental world since 1873.</p>
//           </div>
//           <div className="flex gap-2 flex-col text-white bg-[#F01A1D] p-8 text-center rounded-lg">
//             <h4 className='text-4xl italic font-bold drop-shadow-xl'>All Colgate Products >> </h4>
//           </div>
//         </div>
//         <div className="right flex flex-col cursor-pointer">
//           <div className="w-full h-full bg-no-repeat bg-cover md:h-[500px] md:w-[750px] hover:bg-black/40 bg-black/20 transition ease-in-out bg-blend-overlay rounded bg-contain bg-center bg-[url('../public/Colgate-lede.webp')] flex flex-col justify-end pb-16 p-8 gap-2">
//             <h6 className="text-5xl italic text-white max-w-[50%] text-center font-bold drop-shadow-lg">Colgate.</h6>
//             <h6 className="text-white italic drop-shadow-md text-4xl max-w-[60%]">Take your dental game to <span className="font-bold drop-shadow-lg">the next level.</span></h6>
//           </div>
//           {/* <div><img className="rounded" src="/Co by Colgate lede.webp" alt="" /></div> */}
//         </div>
//       </div>