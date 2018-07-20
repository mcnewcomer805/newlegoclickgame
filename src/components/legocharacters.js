import React from "react";
import "./legocharacters.css";

const Characters = (props)=>{
  return(

   <div className='col-sm-3'>
   <div className='card'>
    <div className='img-container'>
   <img src={props.image} onClick={()=>{props.grabId(props.id)}} className="img-fluid"/>   
   </div>
   </div>
   </div>
  ) 
}

export default Characters;