import React, { useState } from "react";

import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
//pull and list student info

const StudentInfo = ({ student }) => {

  return (
    <li className="student_info">
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
