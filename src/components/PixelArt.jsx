import React, { createContext, useContext } from "react";
import SampleColor from "./SampleColor";
import Pixel from "./Pixel";

const colorContext = createContext({
  color: "lightgray",
  setColor: () => {},
});
const boxColor = [
  { colorName: "Red", color: "red" },
  { colorName: "Blue", color: "blue" },
  { colorName: "Green", color: "green" },
  { colorName: "Black", color: "black" },
  { colorName: "Yellow", color: "yellow" },
  { colorName: "Purple", color: "purple" },
];

const Pixels = () => {
  const { color } = useContext(colorContext);
  const pixels = [];
  for (let i = 0; i < 100; i++) {
    pixels.push(<Pixel color={color} />);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10,1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
};
const PixelArt = () => {
  const [color, setColor] = React.useState("lightgray");

  return (
    <colorContext.Provider value={{ color, setColor }}>
      <div style={{ display: "flex", flexDirection: "Column" }}>
        <h2 style={{ margin: "auto" }}>Choose a color</h2>
        <div className="sampleColor" style={{ margin: "auto" }}>
          {boxColor.map((item) => (
            <SampleColor
              color={item.color}
              onClick={() => setColor(item.color)}
            />
          ))}
        </div>
        <Pixels />
      </div>
    </colorContext.Provider>
  );
};

export default PixelArt;
