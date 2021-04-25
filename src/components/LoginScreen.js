import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const {setUserstate} = useContext(UserContext)
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button className="btn btn-primary"
                    onClick={()=>{
                        setUserstate({
                            id:1,
                            nombre:'Jonathan',
                            apellido:'Castillo',
                            email:'JCastillo@gmail.com'
                        })
                    }}>Login</button>
        </div>
    )
}
