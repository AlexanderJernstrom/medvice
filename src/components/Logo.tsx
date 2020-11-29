import React from "react";
import { Link } from "react-router-dom";
import logo from "../Logo.png";

export const Logo = (props: any) => {
  return (
    <div>
      <Link to="/">
        <img
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: window.innerWidth * 0.11,
            height: window.innerHeight * 0.22,
          }}
          src={logo}
        />
      </Link>
    </div>
  );
};
