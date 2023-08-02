import React, { useState } from 'react';
import "./PointsForm.css"
import useAuth from '../../hooks/useAuth';

const PointsForm = ({updatePoints}) => {

    const [user, token] = useAuth();
    const [studentId, setStudentId] = useState(`${user.student?.id}`);
    const [studentPoints, setStudentPoints] = useState();
    const [count, setCount] = useState(0);
    const [points, setPoints] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };
    const handleChange = (event) => {
        setPoints(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formValues ={
            points: studentPoints,
        }
        console.log (formValues);
        updatePoints(studentPoints);
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='points-form'>
                <h4>Update Student Points</h4>
                <div>
                    <label>Student Id:{studentId}</label>
                </div>
                <div>
                    <label>Update Points:</label>
                </div>
                <div>
                    <input 
                    type="number"
                    name="points"
                    value={studentPoints}
                    onChange={(event)=> setStudentPoints(event.target.value)}/>
                </div>
                <button type="submit" value="Update Student Points">Submit</button> 
            </div>
        </form>
     );
}
 
export default PointsForm;