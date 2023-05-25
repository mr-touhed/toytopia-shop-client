import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase.config";

const auth = getAuth(app)
export const UserContext = createContext(null)
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            
                setUser(currentUser)
                setLoading(false)
            
            
        })
        return () => unsubscribe()
    },[])


    // create user 
    const createuser = async(name,email,password,image) =>{
        setLoading(true)
        const createUser = await createUserWithEmailAndPassword(auth,email,password)
         // eslint-disable-next-line
        const update = await updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
        return createUser
    }

    // login with google 
    const Googleprovider = new GoogleAuthProvider();
    const googleSign = () =>{
        setLoading(true)
       return  signInWithPopup(auth,Googleprovider)
    }

    // user signin 
    const userSign = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
       return signOut(auth)
        
    }

    const userInfo = {
        user,
        loading,
        createuser,
        googleSign,
        userSign,
        logOut
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;