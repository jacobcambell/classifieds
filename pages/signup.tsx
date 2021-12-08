import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../components/firebase-config';

const labelClasses = '';
const inputClasses = 'border border-gray-400 w-full mb-3 p-1';

export default function register() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPass, setConfirmPass] = useState<string>('')

    const handleSubmit = async () => {
        if (password !== confirmPass) {
            alert('Please ensure your passwords match')
            return;
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <Navbar />

            <div className="w-1/3 m-auto my-3">
                <p className="text-2xl mb-3">Sign Up</p>
                <p className={labelClasses}>Email</p>
                <input type="text" onChange={e => { setEmail(e.target.value) }} className={inputClasses} />

                <p className={labelClasses}>Password</p>
                <input type="password" onChange={e => { setPassword(e.target.value) }} className={inputClasses} />

                <p className={labelClasses}>Confirm Password</p>
                <input type="password" onChange={e => { setConfirmPass(e.target.value) }} className={inputClasses} />

                <button className="bg-primaryblue text-white block w-full py-2" onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    )
}
