import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
    const { Userstate, setUserstate } = useContext(UserContext)
   
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />
            <pre>{JSON.stringify(Userstate, null, 3)}</pre>
            <button className="btn btn-warning"
                onClick={() => { setUserstate({}) }}>Logout</button>
        </div>
    )
}
