import React from "react";
import { RingLoader } from "react-spinners";
import "./Loader.css";

const Loader = ({ loading, size = 100, color = "#2f855a" }) => {
  return (
    <div className="loader-container">
      <RingLoader color={color} loading={loading} size={size} />
    </div>
  );
};

export default Loader;
