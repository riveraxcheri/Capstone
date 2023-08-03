import React, { useState } from 'react';


const CustomButton = () => {
    const [status, setStatus] = useState("")

    function handleClick(){
        if(status === "active"){
            setStatus("inactive");
        }
        else {
            setStatus("inactive");
        }
    }
    return ( 
        <div>
            <button onClick={handleClick}>Submit</button>
        </div>
     );
}
 
export default CustomButton;