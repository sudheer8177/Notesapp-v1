import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./home";
import Createnote from './createnote';
import './index.css';  


function App() {
  return (
    <div className="App">
     <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/createnote" element={<Createnote/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  )
};
     


 
 
  

export default App;
