import React, { useState } from "react";
import './index.css';
import { Header,Footer } from "./header";
import axios from 'axios';

function Createnote() {
   
    const [heading, setHeading] = useState({
        Heading: "",
        Desc: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setHeading({ ...heading, [name]: value });
    }

    const Addnote = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/create',heading)
        .then(()=>{
            console.log("ok")
        })
        .catch((err)=>console.log(err))

        setHeading({
            Heading:"",
            Desc:""
        })
    };
   

    return (
        <div>
          <Header/>
        <form className="FormData" onSubmit={Addnote}>
            <input type="text" name="Heading"  placeholder="Enter the heading" value={heading.Heading} onChange={handleChange}/>
            <input type="text" name="Desc" placeholder="Enter the description"  value={heading.Desc} onChange={handleChange}/>
            <button type="submit" className="button">Add Blog</button>
        </form>
        <Footer/>
    </div>
    );
}

export default Createnote;
