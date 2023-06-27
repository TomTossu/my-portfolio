'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { IconMoonFilled, IconSunHigh } from '@tabler/icons-react';
import { handleScroll } from '../utils/utils';
import { NavLink } from './NavLink';

const routes = [
    {
        id: crypto.randomUUID(),
        label: "About",
        route: "about",
    },
    {
        id: crypto.randomUUID(),
        label: "Experience",
        route: "experience",
    },
    {
        id: crypto.randomUUID(),
        label: "Projects",
        route: "projects",
    },
    {
        id: crypto.randomUUID(),
        label: "Contact",
        route: "contact",
    },
];

export const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [currentTheme, setCurrentTheme] = useState('light')

    useEffect(() => {
        const system = theme === 'system' ? systemTheme : theme
        setCurrentTheme(system)
    }, [])

    const handleSetTheme = (value) => {
        setCurrentTheme(value)
        setTheme(value)
    }

    return (
        <header className='shadow-md px-4'>
            <div as={'nav'} className='flex flex-row py-3 items-center'>
                <div className='flex flex-1 justify-center'>
                    <NavLink route='#home' className='mr-auto'>Home</NavLink>
                </div>

                <div className='flex flex-1 justify-center cursor-pointer'>
                    {currentTheme === 'dark' ?
                        <IconSunHigh onClick={() => handleSetTheme('light')}></IconSunHigh> :
                        <IconMoonFilled onClick={() => handleSetTheme('dark')}></IconMoonFilled>}
                </div>

                <div className='flex flex-1 flex-row justify-center'>
                    <div className='ml-auto'>
                        {routes.map(({ id, label, route }) => (
                            <NavLink key={id} route={`#${route}`} className='mx-1.5 p-1'>{label}</NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}
