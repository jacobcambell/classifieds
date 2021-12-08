import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCN_oNEP_0xfx0JTYsYB5YzpFENWDZJX8k",
    authDomain: "classifieds-6177d.firebaseapp.com",
    projectId: "classifieds-6177d",
    storageBucket: "classifieds-6177d.appspot.com",
    messagingSenderId: "969411171201",
    appId: "1:969411171201:web:e43469567c66d457400e80"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)