"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { navbardata } from '../Data'
import Link from 'next/link'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className='bg-slate-700 w-full h-14 flex justify-between '>
            <div className='flex  items-center lg:pl-10 pl-4'>
                <Image src='/mainlogo.png' alt='logo image' className='rounded-full hover:shadow-black hover:shadow-xl' width={50} height={50} />
            </div>
            <div className='lg:flex hidden justify-end text-white w-[70%] md:w-[75%] items-center '>
                {
                    navbardata.map((item, index) =>
                        <Link href={item.link} key={index}>
                            <h2 className='hover:text-black hover:bg-white  rounded-md text-xl outline-1 py-[4px] px-10 font-bold'>{item.heading}</h2>
                        </Link>
                    )
                }

            </div>

            <div className='flex justify-end pr-2 lg:pl-3 lg:mr-10 m-0 w-[100%] sm:w-[50%] md:w-[75%] lg:w-[15%] xl:w-[12%] items-center'>
                <button className=' hover:bg-green-600 hover:text-white bg-amber-300 rounded-md text-black font-bold px-4 py-[5px]'>Try for Free</button>
            </div>

            {visible ?
                (
                    <Image src='/close.svg' alt='menu' className='lg:hidden  cursor-pointer flex justify-end lg:mr-6 mr-5' width={32} height={32} onClick={() => setVisible(false)} />
                )
                :
                (
                    <Image src='/menu.svg' alt='close' className='lg:hidden  cursor-pointer flex justify-end lg:mr-6 mr-5' width={32} height={32} onClick={() => setVisible(true)} />
                )
            }

            {
                visible
                &&
                <div className="flex flex-col bg-slate-500 text-white items-center justify-center lg:hidden  fixed w-full p-4 mt-14 ">


                    {
                        navbardata?.map((item, index) =>
                            <Link key={index} href={item.link} className='p-2'>
                                <h1 className="hover:text-black hover:bg-white px-3 py-1 rounded-md text-xl font-bold" onClick={() => {
                                    setVisible(false)
                                }}>{item.heading}</h1>
                            </Link>)
                    }
                </div>
            }

        </div>
    )
}

export default Navbar