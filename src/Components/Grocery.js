import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';


const Grocery =()=>{
    
const {loggedInUser} = useContext(UserContext)
    return <div> {loggedInUser}</div>
   
}

export default Grocery;