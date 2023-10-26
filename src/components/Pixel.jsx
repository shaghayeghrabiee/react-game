import React, { useState } from "react";

const Pixel = ({ color }) => {
  const [pixelColor, setPixelColor] = useState("lightgray");

  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
        cursor: "pointer",
      }}
      onClick={() => setPixelColor(color)}
    ></div>
  );
};

export default Pixel;
