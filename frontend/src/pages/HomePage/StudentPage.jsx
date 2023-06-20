import React from 'react';
import useAuth from '../../hooks/useAuth';



const StudentPage = () => {
    const [user, token] = useAuth();

    return ( 
        <div>
            <h1>Student Home Page</h1>
            <h2>Welcome {user.username}!</h2>
            <p>Points Total: {user.points}</p>
            <button >Get QR Code</button>
        </div>
     );
}
 
export default StudentPage;

{/* <button onClick={qrCodesGenerator}>Get my QR Code</button>
const [user, token] = useAuth();
const [qrCodes, setQrCodes] = useState([]);

useEffect(() => {
  const qrCodesGenerator = async () => {
    try {
      let response = await axios.get(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user.id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      
      setQrCodes(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  qrCodesGenerator();
}, [token]); */}