import React, {useState} from "react";
import CreateWeigh from "./CreateWeigh";


function Menu  () {
    const [show,setshow]=useState(false);
    
    function handleClick(){
        setshow(true)
    }
    
    
    return(
        <div className="Weighs">
            
            
            {show ? <CreateWeigh /> : 
            
            <div className="Weigh">
                <h1>CAT SCALE</h1>
            <button  className = "firstWeigh" onClick={handleClick}>1st Weigh</button>
            <button className="secondWeigh"> ReWeigh</button>
            </div>}
            
            
        </div>
    )
}

export default Menu;