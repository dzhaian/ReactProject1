import React from 'react';
import '../styles/Component3.css'
import Component2 from "./Component2";
import img from '../img/img2.png'

function Component3() {
    return (
       <div  className="container">
           <div className="component3">
               <Component2 />
               <img src={img} alt={"img"}/>
           </div>
       </div>
    );
}

export default Component3;
