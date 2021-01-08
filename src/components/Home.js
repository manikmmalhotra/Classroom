import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Nav from "./Nav";
import Button from "./Button";
const Home = () => {
  return (
    <div className="Home">
      <Nav />
      <Link to="/registerasainstructor">
        <Button buttonName="homeButton" label="Instructor" />
      </Link>
      <Link to="/registerasastudent">
        <Button buttonName="homeButton" label="Student" />
      </Link>
    </div>
  );
};

export default Home;
