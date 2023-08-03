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
  const [username, setUserName] = useState({});
	const [entry, setEntry] = useState("");
	
	// POST New Comment
	async function addNewComment() {
		try {
			let newComment = {
				user: { username },
				comm_text: { entry },
			};
			const response = await axios.post(
				"http://127.0.0.1:8000/api/comments/",
				newComment,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
		} catch (error) {
			console.log(error.response.data);
		}
	}

	
  const updatePoints = (student) => {
    let updatePoints = [points, student];
    setPoints(updatePoints);
  };

  return (
    <div className="quick-access-container">
      <PointsForm updatePoints={updatePoints} />
      <CommentForm addNewComment={addNewComment} />
      <button>Go to Cart</button>
    </div>
  );
};

export default QrAccessPage;
