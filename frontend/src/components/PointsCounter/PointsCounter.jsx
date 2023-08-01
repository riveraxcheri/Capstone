import { useState } from "react";

const PointsCounter = ({updatePoints}) => {
    const [points, setPoints] = useState(0)

    const handleIncrement = () => {
        setPoints(points + 1);
    };
    const handleDecrement = () => {
        setPoints(points - 1);
    };
    const handleChange = (e) => {
        setPoints(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        updatePoints (points);
        setPoints();
    }

    return ( 
        <form className="points-counter" onSubmit={handleSubmit}>
            <h3>Points Total:{points}</h3>
            <button value={points}
            onClick={handleIncrement}>
                 + </button>
            <button value={points}
            onClick={handleDecrement}>
                 - </button>
            <input type="submit" value="Update Points" onChange={(e)=>handleChange(e)}/>
        </form>
     );
}
 
export default PointsCounter;