import Link from 'next/link'
import React, { useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config'

export default function Buttons() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    })

    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    if (loggedIn) {
        return (
            <div className="flex items-center">
                <button onClick={() => { signOut(auth) }} className="bg-red-600 text-white py-1 px-2 rounded-lg">Log Out</button>
            </div>
        )
    } else {
        return (
            <div className="flex items-center">
                <Link href="/login"><a className="mr-3">Log In</a></Link>
                <Link href="/signup"><a className="bg-primaryblue text-white py-1 px-2 rounded-lg">Sign Up</a></Link>
            </div>
        )
    }

}
