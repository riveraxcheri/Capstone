import StudentInfo from "./StudentInfo";

const StudentTable = ({ students, userInput }) => {
  return (
    <ul>
      {students
        .filter(
          (student) =>
            student.id.includes(userInput) ||
            student.first_name.includes(userInput) ||
            student.last_name.includes(userInput) ||
            student.username.includes(userInput) ||
            student.points.includes(userInput) ||
            student.email.includes(userInput)
        )
        .map((student) => (
          <StudentInfo student={student} key={student.id} />
        ))}
    </ul>
  );
};

export default StudentTable;
