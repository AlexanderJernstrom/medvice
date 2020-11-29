import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Logo } from "./components/Logo";

export const LandingPage = (props: any) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Logo />
      <h1 style={{ color: "#f9ffff", textAlign: "center" }}>Medvice</h1>

      <div
        style={{
          display: "flex",
          color: "#f9ffff",
          width: "50%",
          marginLeft: "25%",
          justifyContent: "space-around",
        }}
      >
        <div
          className="landing-container"
          onClick={() => props.history.push("/courses")}
        >
          <h3 style={{ textDecoration: "none" }}>Courses</h3>
          <p>A place where you can view courses on various medical topics</p>
        </div>

        <div
          className="landing-container"
          onClick={() => props.history.push("/articleSearch")}
        >
          <h3>Article searcher</h3>
          <p>
            Here you can search for any medical article, in different languages
          </p>
        </div>
        <div
          className="landing-container"
          onClick={() => props.history.push("/termSearch")}
        >
          <h3>Term search</h3>
          <p>
            A place where you can search any medical term, organ or body part
          </p>
        </div>
      </div>
      <div className="landing-image" />
    </div>
  );
};
