import { useState } from "react";

const PointsCounter = ({points}) => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };


    return ( 
        <div className="points-counter" >
            <h3>Points:{points}</h3>
            <button
            onClick={handleIncrement}>
                 + </button>
            <button
            onClick={handleDecrement}>
                 - </button>
        </div>
     );
}
 
export default PointsCounter;