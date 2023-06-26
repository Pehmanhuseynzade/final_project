import { createContext, useContext, useEffect, useState } from "react";

const MarxalContext = createContext();

// eslint-disable-next-line react/prop-types
export const MarxalContextProvider = ({children})=>{
    const[user,setUser] = useState(null);
    useEffect(()=>{
        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'));
        }
    },[])

    return(
        <MarxalContext.Provider value={[user,setUser]}>
            {children}
        </MarxalContext.Provider>
    )
}

export const useMarxalContext = ()=> useContext(MarxalContext);
