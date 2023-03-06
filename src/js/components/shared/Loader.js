import React from "react";
import "./Loader.scss";

// dido: more loading animations here:
// https://tobiasahlin.com/spinkit/

export default function Loader() {
  return (
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  );
}
