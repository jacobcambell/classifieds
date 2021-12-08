import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="border border-b px-8 flex justify-evenly py-3">
            <p className="text-primaryblue text-2xl">Classifieds</p>
            <input type="text" className="border border-gray-300 w-1/2 px-2 rounded-lg" placeholder="Search for anything..." />
            <div className="flex items-center">
                <Link href="/login"><a className="mr-3">Log In</a></Link>
                <Link href="/signup"><a className="bg-primaryblue text-white py-1 px-2 rounded-lg">Sign Up</a></Link>
            </div>
        </div>
    )
}
