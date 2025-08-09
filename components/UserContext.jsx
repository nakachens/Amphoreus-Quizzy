import React, {createContext, useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export function UserProvider({children}){
    const [name,setName] = useState("");

    return <UserContext.Provider value={{name, setName}}>{children}</UserContext.Provider>;
}