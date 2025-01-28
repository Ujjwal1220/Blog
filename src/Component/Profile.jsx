import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [bio, setbio] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  const profilebio = async () => {
    if (!bio) {
      console.log("Please enter a bio.");
      return;
    }

    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.put(
        "/profile/", // Proxy URL for profile
        { bio },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Bio updated successfully", response.data);
    } catch (err) {
      console.log("Error updating bio:", err.response?.data || err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-96 shadow-xl p-4">
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type Bio here"
            value={bio}
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setbio(e.target.value)}
          />
          <button className="btn btn-primary w-full" onClick={profilebio}>
            Update Bio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
