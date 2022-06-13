import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SecureRoute = ({children}) => {
    const {user} = UserAuth()
    if(!user){
        return <Navigate to='/signin'/> 
    }else {
        return children
    }
}

export default SecureRoute