import React from 'react'
import Link from 'next/link'
import Buttons from './Buttons'

export default function Navbar() {
    return (
        <div className="border border-b px-8 flex justify-evenly py-3">
            <p className="text-primaryblue text-2xl">Classifieds</p>
            <input type="text" className="border border-gray-300 w-1/2 px-2 rounded-lg" placeholder="Search for anything..." />
            <Buttons />
        </div>
    )
}
