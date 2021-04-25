import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

    const [Userstate, setUserstate] = useState({})
    
    return (
        
        <div>

            <UserContext.Provider value={{
                Userstate,
                setUserstate
                
            }}>

            <AppRouter />
            
            </UserContext.Provider>
       
        </div>
        
    )
}
