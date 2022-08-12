import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <img src="https://c.tenor.com/x6w5niSTPysAAAAd/responsive-website.gif" />
    </div>
  );
};

export default Home;
