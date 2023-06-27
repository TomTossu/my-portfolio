import Image from 'next/image'
import React from 'react'

import myPic from '../../../public/my-picture.jpg'
import { NavLink } from './NavLink'
import { IconArrowDown } from '@tabler/icons-react'

export const Hero = () => {
    return (
        <section id='home'>
            <div className='flex flex-col text-center items-center justify-center my-8 py-10 sm:py-24 md:py-24 md:flex-row md:space-x-4 md:text-left'>
                <div className='md:mt-2 md:w-1/2'>
                    <Image
                        src={myPic}
                        alt='profile picture'
                        width={325}
                        height={325}
                        className='rounded-full shadow-2xl
                        transition ease-in-out delay-150 hover:-translate-y-3 hover:translate-x-5 hover:scale-125 duration-300
                        '
                    />
                </div>
                <div className='md:mt-2 md:w-3/5'>
                    <h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-7xl'>Hi, I'm {" "}
                        <span className="animate-text 
                        bg-gradient-to-r 
                        from-teal-500 
                        via-purple-500 
                        to-orange-500 
                        bg-clip-text 
                        text-transparent
                        font-black">
                            Tomás!
                        </span>
                    </h1>
                    <div className='text-lg mt-4 mb-6 md:text-2xl'>
                        <p className='font-semibold text-4xl text-teal-600'>
                            Fullstack Developer {" "}
                        </p>
                        <p className='mt-2'>based in Buenos Aires, Argentina.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <NavLink route='#about' className='animate-bounce'><IconArrowDown /></NavLink>
            </div>
        </section>
    )
}
