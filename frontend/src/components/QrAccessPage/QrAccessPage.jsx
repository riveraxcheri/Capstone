//Components
import CommentForm from "../CommentForm/CommentForm";
import PointsForm from "../PointsCounter/PointsForm";

//General
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";

//Quick Access Page for Teachers
const QrAccessPage = ({ studentData }) => {
  const [points, setPoints] = useState(0);
  const [user, token] = useAuth();
  const [studentName, setStudentName] = useState({});

  const updatePoints = (student) => {
    let updatePoints = [points, student];
    setPoints(updatePoints);
  };

  // POST New Comment
  async function addNewComment(newComment) {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/comments/",
      newComment
    );
    if (response.status === 204) {
      console.log("Comment Added!");
    };
  }

  return (
    <div className="quick-access-container">
      <PointsForm updatePoints={updatePoints} />
      <CommentForm addNewComment={addNewComment}/>
      <button>Go to Cart</button>
    </div>
  );
};

export default QrAccessPage;
