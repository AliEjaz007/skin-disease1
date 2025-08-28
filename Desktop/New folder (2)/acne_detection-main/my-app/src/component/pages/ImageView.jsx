// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useAuth } from "../../firebase/auth";

// const ImageView = () => {
//   const { id } = useParams();
//   const { currentUser } = useAuth();
//   const [imageUrl, setImageUrl] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const token = await currentUser.getIdToken();
//         const res = await fetch(`http://localhost:5000/api/images/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         if (!res.ok) throw new Error("Failed to fetch image");

//         const blob = await res.blob();
//         const url = URL.createObjectURL(blob);
//         setImageUrl(url);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     if (currentUser) fetchImage();
//   }, [id, currentUser]);

//   if (error) return <p>Error: {error}</p>;
//   if (!imageUrl) return <p>Loading...</p>;

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>📷 Your Uploaded Image</h2>
//       <img src={imageUrl} alt="Skin disease" style={{ maxWidth: "80%" }} />
//     </div>
//   );
// };

// export default ImageView;







import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../firebase/auth";
import "./ImageView.css";

const ImageView = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const token = await currentUser.getIdToken();
        const res = await fetch(`http://localhost:5000/api/images/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) throw new Error("Failed to fetch image");

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (err) {
        setError(err.message);
      }
    };

    if (currentUser) fetchImage();
  }, [id, currentUser]);

  const handleBack = () => {
    navigate("/my-reports");
  };

  if (error) return <p>Error: {error}</p>;
  if (!imageUrl) return <p>Loading...</p>;

  return (
    <div className="image-view-container">
      <h2 className="image-view-title">📷 Your Uploaded Image</h2>
      <img src={imageUrl} alt="Skin disease" className="image-view-img" />
      <div>
        <button onClick={handleBack} className="image-view-button">
          🔙 Back to Reports
        </button>
      </div>
    </div>
  );
};

export default ImageView;
