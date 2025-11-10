import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <>
      <div className="  bg-blue-200 ">
        <div className="flex justify-end gap-2 pt-2">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <h1 className=" p-3 ">DAYANANDA J V</h1>
      </div>
    </>
  );
}

export default Headers;
