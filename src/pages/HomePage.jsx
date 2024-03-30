import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div>
      <p>Home Page</p> 
      <Link to={"/profile"}>
        go to Profile
      </Link>
    </div>
  );
};

export default HomePage;
