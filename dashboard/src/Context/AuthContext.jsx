import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [isauth, setauth] = useState(false)
    function toggleauth() {
        setauth(true)
    }
   return <AuthContext.Provider value={{isauth,toggleauth}}>
        {
           children
        }
    </AuthContext.Provider>
}