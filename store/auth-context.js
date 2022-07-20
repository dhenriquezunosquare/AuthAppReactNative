import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => { },
    logout: () => { }
})

export const AuthContextProvider = ({children})=>{
        const [token, setToken] = useState();

       
        

        const authenticate=(token)=>{
            if(token){
                setToken(token);
                AsyncStorage.setItem("token", token);
            }
        }

        const logout=()=>{
            setToken(null);
            AsyncStorage.removeItem("token");
        }

        const value = {
            token: token,
            isAuthenticated: !!token,
            authenticate: authenticate,
            logout: logout

        }

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}


