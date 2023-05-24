import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));
const UserProfile = lazy(() => import("./UserProfile"));
const AboutMe = lazy(() => import("./AboutMe"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/profile/:userId" element={<UserProfile />} />
    </Routes>
  );
};

export default Routing;
