import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({children})=>{
    const[admin,setAdmin] = useState(null);
    useEffect(()=>{
        if (localStorage.getItem('admin')) {
            setAdmin(localStorage.getItem('admin'));
        }
    },[])

    return(
        <UserContext.Provider value={[admin,setAdmin]}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=> useContext(UserContext);