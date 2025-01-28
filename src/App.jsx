import React from "react";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import Navbar from "./Component/Navbar";
import Feed from "./Component/Feed";
import PostCard from "./Component/Post";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utilish/appStore";
const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post" element={<PostCard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
