import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    const {Userstate} = useContext(UserContext)
    console.log(Userstate)
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>

            <pre>{JSON.stringify(Userstate,null,3)}</pre>

        </div>
    )
}
