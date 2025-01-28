import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [profileData, setProfileData] = useState(null);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.get("/profile/", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfileData(response.data);
    } catch (err) {
      console.error("Something went wrong:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Profile Data</h2>

          <p>
            {profileData ? JSON.stringify(profileData, null, 2) : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
