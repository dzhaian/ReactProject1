import React from 'react';
import '../styles/Component7.css'
import img from '../img/img4.jpg';
import logo from "../img/splatter.png";

function Component7() {
    return (
       <div className="container">
           <div className="component7">
               <div className="comp7">
                   <a href="/" className="compon7">
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                   </a>

               </div>
               <div className="comp7">
                   <a href="/" className="compon7">
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                   </a>
               </div>
               <div className="comp7">
                   <a href="/" className="compon7">
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                       <img src={img} className="image" />
                   </a>
               </div>
           </div>
       </div>
    );
}

export default Component7;
