import React, { useState } from 'react'
import { createContext } from 'react'

export const UserContext = createContext();

function UserProvider(props) {
    const [user,setUser] = useState([]);
    return(
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
