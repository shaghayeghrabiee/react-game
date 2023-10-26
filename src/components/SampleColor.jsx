import React from "react";

const SampleColor = ({ color, onClick }) => {
  return (
    <button
      className="pixelSampleColor"
      style={{ backgroundColor: `${color}` }}
      onClick={onClick}
    ></button>
  );
};

export default SampleColor;
