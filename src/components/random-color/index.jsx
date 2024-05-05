import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColors = "#";

    for (let i = 0; i < 6; i++) {
      hexColors += hex[randomColorUtil(hex.length)];
    }
    setColor(hexColors);
  }

  function randomColorUtil(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomRGBColor() {
    const r = randomColorUtil(256);
    const g = randomColorUtil(256);
    const b = randomColorUtil(256);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Colors"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
