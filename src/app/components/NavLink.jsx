'use client'
import React from 'react'
import { handleScroll } from '../utils/utils'
import Link from 'next/link'

export const NavLink = ({ route, className, children }) => {
    return (
        <Link href={route} className={className} onClick={(e) => handleScroll(e)}>
            {children}
        </Link>
    )
}
