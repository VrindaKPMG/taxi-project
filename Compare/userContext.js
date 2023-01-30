import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

export const UserProvider = ({child}) = {
    const [user, setUser] = useState({
        username:"TestUser",
        password:"password"
    })

    return (
        <UserContext.Provider
        value={{user, setUser}}>
            {child}
        </UserContext.Provider>
    )
}


