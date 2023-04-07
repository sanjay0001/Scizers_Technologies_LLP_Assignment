import React from 'react'
import './navbar.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import URL from '../env'
export default function Navbar(props) {

  const [addContactStatus,setaddContactStatus] = useState("none")
  const [span,setSpan] = useState("")
  const [name,setName] = useState("")
  const [number,setNumber] = useState("")
 

  async function addContact(){
    try{
      console.log(name+" ",number)
      const response = await axios.post(URL+"/addContact",{Name:name,mobileNumber:number})
      if(response.data.status=="present") setSpan("Number already present")
      else{
        setSpan("Successfully added contact")
        const randomNum = Math.random()*100;
        props.change(randomNum)
      }
    }catch(e){
      console.log(e)
      setSpan("Can't add contact")
    }
  }
  return (
    <div className='navBar'>
        <h2 style={{display:"inline"}}>Address Book Manager</h2>
        <h3 style={{display:"inline",float:"right",margin:"5px"}} onClick={()=>{
          if(addContactStatus=="none") setaddContactStatus("")
          else setaddContactStatus("none")
        }}>Add contact</h3>

        <div style={{display:addContactStatus,textAlign:"center",width:"30%",margin:"auto",backgroundColor:"white",padding:"20px",borderRadius:"29px",zIndex:2,position: "relative"}}>
              <h3 style={{margin:"8px",padding:"4px"}}>Add Contact</h3>
              <input style={{margin:"8px",padding:"4px"}} type='text' placeholder='Name' onChange={(e)=>{setName(e.target.value)}} ></input> <br></br>
              <input style={{margin:"8px",padding:"4px"}} type='number' placeholder='Mobile Number' onChange={(e)=>{setNumber(e.target.value)}}></input><br></br>
              <button class="button-3"  style={{margin:"8px",padding:"4px"}}  onClick={addContact}>save</button><br></br>
              <span style={{margin:"8px",padding:"4px"}}>{span}</span>
        </div>
    </div>
  )
}



