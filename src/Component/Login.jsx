import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utilish/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [isLogin, setisLogin] = useState(true); // Corrected default value

  const handleLogin = async () => {
    if (!email || !password) {
      console.log("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "/login/", // Proxy URL (make sure it resolves correctly)
        { email, password },
        { withCredentials: true }
      );

      // Assuming response contains an access token
      const accessToken = response.data.tokens.access;

      // Store the access token in localStorage
      localStorage.setItem("authToken", accessToken);

      console.log("Login Successful");
      dispatch(addUser(response.data)); // Store user data (optional)
      navigate("/feed"); // Redirect to feed page
    } catch (err) {
      console.log("Error during login:", err.response?.data || err.message);
    }
  };

  const handleSignup = async () => {
    if (!username || !email || !password) {
      console.log("Please enter username, email, and password.");
      return;
    }

    try {
      const response = await axios.post(
        "/register/", // Proxy URL for signup (Vite will handle the proxy)
        { username, email, password },
        { withCredentials: true }
      );

      // Assuming the response contains the tokens object
      const accessToken = response.data.tokens.access; // Access token from the response

      // Store the access token in localStorage
      localStorage.setItem("authToken", accessToken);

      console.log("User Created Successfully");
      dispatch(addUser(response.data)); // Store user data (optional)
      navigate("/feed"); // Redirect to feed page after successful signup
    } catch (err) {
      console.log(
        "Something went wrong during signup:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{isLogin ? "Login" : "Sign Up"}</h2>
          <div>
            {!isLogin && (
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <h1>Username</h1>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={username}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setusername(e.target.value)}
                />
              </label>
            )}
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <h1>Email</h1>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={email}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setemail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <h1>Password</h1>
              </div>
              <input
                type="password" // Use type="password" to hide input
                placeholder="Type here"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setpassword(e.target.value)}
              />
            </label>
          </div>

          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={isLogin ? handleLogin : handleSignup}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            className="text-red-600 m-auto cursor-pointer"
            onClick={() => setisLogin((value) => !value)}
          >
            {isLogin ? "New User : Sign Up here" : "Existing User : Login here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
