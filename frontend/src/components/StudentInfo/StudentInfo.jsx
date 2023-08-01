import React, { useState } from 'react';
import axios from 'axios';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
//pull and list student info

const StudentInfo = ({student}) => {
    // const [user, token] = useAuth();
    const [qrCode, setQrCode] = useState([]);
    // const [studentId, setStudentId] = useState();
    // const [studentName, setStudentName] = useState("");
    // const [student, setStudent] = useState("");
    // const [userId, setUserId] = useState("");
    // const [entries, setEntries] = useState([]);
    // const [points, setPoints] = useState(0);

    // const getUserId = () => {
    //     if (user?.is_student) {
    //         setUserId(user.student.user_id);
    //     }
    //     else {
    //         setUserId("input needed");
    //     }
    //     return (userId);
    // };
    // const getPoints = () => {
    //     if (user?.is_student) {
    //         setPoints(user.student.points);
    //     }
    //     else {
    //         setPoints(0);
    //     }
    //     return (points);
    // };
// GET QR Code - change to {studentId} from example
    const getQrCode = async () => {
        try {
            let response = await axios.get(
                "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example");

            setQrCode(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }
        qrCode();
  return (
    <ul className="student-info">
      <li className="list-group-item">Username:{student.username}</li>
      <li className="list-group-item">Email:{student.email}</li>
      <li className="list-group-item">Name:{student.first_name} {student.last_name}</li>
      <li className="list-group-item">User Id:{student.user_id}</li>
      <li className="list-group-item">Points:{student.points}</li>
      <li className="list-group-item">QR Code:{student.qrCode}</li>
      <EditButton/>
      <DeleteButton/>
    </ul>
  );
};

export default StudentInfo;
