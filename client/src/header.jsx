import React from "react";
import {Link} from 'react-router-dom';
import './index.css';

const date = new Date().getFullYear();




function Header() {
  return (
    <div className="logo">
      <Link to='/' className="hero">Notes</Link>
      <Link className="linkcreate" to="/createnote">Create note</Link>
    </div>
  );
}


function Footer() {
  return <p className="copy-right">&copy; {date}</p>;
}

export { Header, Footer };
