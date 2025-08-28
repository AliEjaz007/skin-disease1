import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/auth";
import "./MyReports.css";

const MyReports = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const token = await currentUser.getIdToken();
        const res = await fetch("http://localhost:5000/api/images", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch images");

        // Fetch remedies and diet plans for each image
        const updatedImages = await Promise.all(
          data.map(async (img) => {
            try {
              if (!img.analysisResult?.disease) {
                return { ...img, remedies: [], dietPlan: [] };
              }
              const diseaseRes = await fetch(
                `http://localhost:5000/api/diseases/${encodeURIComponent(img.analysisResult.disease)}`
              );
              const diseaseData = await diseaseRes.json();
              if (!diseaseRes.ok) {
                console.error(`Failed to fetch disease info for ${img.analysisResult.disease}:`, diseaseData.error);
                return { ...img, remedies: [], dietPlan: [] };
              }
              return {
                ...img,
                remedies: diseaseData.remedies || [],
                dietPlan: diseaseData.dietPlan || [],
              };
            } catch (err) {
              console.error(`Error fetching disease info for ${img.analysisResult.disease}:`, err);
              return { ...img, remedies: [], dietPlan: [] };
            }
          })
        );

        setImages(updatedImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser) fetchImages();
  }, [currentUser]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this report?");
    if (!confirmDelete) return;

    try {
      console.log("Attempting to delete report with ID:", id);
      const token = await currentUser.getIdToken();

      const res = await fetch(`http://localhost:5000/api/images/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Delete response status:", res.status);

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Detailed delete error:", errorData);
        throw new Error(errorData.error || "Failed to delete report");
      }

      setImages((prevImages) => prevImages.filter((img) => img._id !== id));
      setMessage("✅ Report deleted successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Full delete error:", err);
      setError(err.message || "An error occurred while deleting");
      setTimeout(() => setError(""), 3000);
    }
  };

  if (!currentUser) {
    return (
      <div className="reports">
        <h1 className="reports__title">Please log in to view your reports.</h1>
      </div>
    );
  }

  return (
    <div className="reports">
      <h1 className="reports__title">📋 My Saved Reports</h1>

      {loading && <p className="reports__loading">Loading reports...</p>}
      {error && <p className="reports__error">❌ {error}</p>}
      {message && <p className="reports__success">{message}</p>}

      {!loading && images.length === 0 && (
        <p className="reports__empty">No reports found.</p>
      )}

      <ul className="reports__list">
        {images.map((img) => (
          <li className="reports__item" key={img._id}>
            <p>
              <strong>Disease:</strong> {img.analysisResult?.disease || "Unknown"}
            </p>
            <p>
              <strong>Confidence:</strong>{" "}
              {img.analysisResult?.confidence ? `${img.analysisResult.confidence}%` : "N/A"}
            </p>
            <p>
              <strong>Severity:</strong> {img.analysisResult?.severity || "N/A"}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {img.analysisResult?.description || "No description available"}
            </p>
            <p>
              <strong>Date:</strong> {new Date(img.createdAt).toLocaleString()}
            </p>

            <details className="reports__section">
              <summary>🌿 Remedies</summary>
              <ul>
                {img.remedies?.length ? (
                  img.remedies.map((item, i) => <li key={i}>{item}</li>)
                ) : (
                  <li>No remedies available.</li>
                )}
              </ul>
            </details>

            <details className="reports__section">
              <summary>🍽️ Diet Plan</summary>
              <ul>
                {img.dietPlan?.length ? (
                  img.dietPlan.map((item, i) => <li key={i}>{item}</li>)
                ) : (
                  <li>No diet plan available.</li>
                )}
              </ul>
            </details>

            <div className="reports__buttons">
              <button onClick={() => navigate(`/image-view/${img._id}`)}>
                View Image
              </button>
              <button onClick={() => handleDelete(img._id)}>
                Delete Report
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReports;