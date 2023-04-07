import React, { useState } from "react";
import Contact from "./Contact";
import { useEffect } from "react";
import URL from "../env";
import axios from "axios";
// const names = ["Deepak", "John", "Jane", "David", "Derek"];

function Home(props) {
  const [contacts,setContacts] = useState([])
  useEffect(()=>{
    axios.get(URL+"/showContacts").then((res)=>{setContacts(res.data)})
  },[props.change])

  const [searchTerm, setSearchTerm] = useState("");

  const filteredNames = contacts.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.mobileNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{margin:"30px auto",textAlign:"center",width:"25%",zIndex:-1}}>
      <input
        type="text"
        placeholder="Search Contact"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{margin:"0 0 0 11%",height:"20px"}}
      /> 
      <ul>
        {filteredNames.map((name) => (
          <Contact key={name} name={name.name} mobileNumber={name.mobileNumber} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
