import React, { useState } from "react";
import axios from "axios";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
//pull and list student info

const StudentInfo = ({ student }) => {
  // const [user, token] = useAuth();
  const [qrCode, setQrCode] = useState();
  const [studentId, setStudentId] = useState();
  // const [studentName, setStudentName] = useState("");
  // const [student, setStudent] = useState("");
  // const [userId, setUserId] = useState("");
  // const [entries, setEntries] = useState([]);
  // const [points, setPoints] = useState(0);

  // GET QR Code - change to {studentId} from example
  // created handler to create qrcode then use variable in src link to img

  //QR CODE Link Attempts
//   const getStudentId = () => {
//     setStudentId(student.user_id);
//   };

//   const qrCodeImg = async () => {
//     let qrId = (`"AAC"${studentId}`)
//       let response = await axios.get(
//         `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrId}`
//       );

//       setQrCode(response.data);
//     };
//   qrCode();
  return (
    <li className="student_info">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrId}" className="card-img-top" alt="student qr code" />
      <p>Student Id: {student.user_id}</p>
      <p>First Name: {student.first_name}</p>
      <p>Last Name: {student.last_name}</p>
      <p>Username: {student.username}</p>
      <p>Points: {student.points}</p>
      <p>Email: {student.email}</p>
      <EditButton />
      <DeleteButton />
    </li>
  );
};

export default StudentInfo;
