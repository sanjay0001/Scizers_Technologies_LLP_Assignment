import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import URL from '../env'
import './navbar.css'
export default function Contact(props) {
    const [status,setStatus] = useState("")
    async function deleteContact(){
        const res=await axios.post(URL+"/delete",{mobileNumber:props.mobileNumber})
        setStatus("none")
    }
    async function editContact(){
        // Need more time to write
    }
  return (
    <div style={{display:status}}>
        <h5>{props.name}</h5>
        <h5>{props.mobileNumber}</h5>
        <button className='button-3' onClick={deleteContact} style={{margin:"10px"}}>Delete</button>
        <button className='button-3' onClick={editContact}>Edit</button>
        <br></br><br></br>
        <hr></hr>
    </div>
  )
}
