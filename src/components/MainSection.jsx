import React, { useState } from "react";

export default function MainSection() {
  const [sliderValue, setSliderValue] = useState(16);
  const [gridLines, setGridLines] = useState(true);
  const [penColorValue, setPenColorValue] = useState("#000000");
  const [bgColorValue, setBgColorValue] = useState("#ffffff");
  const [currentMode, setCurrentMode] = useState("color");
  let backgroundColor = bgColorValue;
  let isDown = false;

  const getSliderValue = (event) => {
    setSliderValue(event.target.value);
  };

  const getPenValue = (event) => {
    setPenColorValue(event.target.value);
  };

  const getBgValue = (event) => {
    setBgColorValue(event.target.value);
  };

  const clearBg = () => {
    window.location.reload();
  };

  function changeColor(e) {
    if (e.type === "mousedown") {
      isDown = true;
    }
    if (e.type === "mouseup") {
      isDown = false;
    }
    if (isDown) {
      if (currentMode === "rainbow") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      } else if (currentMode === "color") {
        e.target.style.backgroundColor = penColorValue;
      } else if (currentMode === "eraser") {
        e.target.style.backgroundColor = "#ffffff";
      }
    }
  }

  const setupGrid = () => {
    const arr = Array(sliderValue ** 2).fill(0);
    const sideMeasure = "1fr ".repeat(sliderValue);
    return (
      <div
        className="grid-container"
        style={{
          gridTemplateColumns: sideMeasure,
          gridTemplateRows: sideMeasure,
        }}
        draggable="false"
      >
        {arr.map((tmp) => (
          <div
            className="grid-square"
            style={{
              border: gridLines ? "0.5px solid silver" : "none",
              backgroundColor: bgColorValue,
            }}
            onMouseDown={changeColor}
            onMouseOver={changeColor}
            onMouseUp={changeColor}
          ></div>
        ))}
      </div>
    );
  };
  console.log(bgColorValue);
  const changeMode = (e) => {
    if (currentMode !== "color") {
      setCurrentMode("color");
    }
    if (e.target.className === "eraser-btn") {
      if (currentMode !== "eraser") {
        setCurrentMode("eraser");
      }
    }
    if (e.target.className === "rainbow-btn") {
      if (currentMode !== "rainbow") {
        setCurrentMode("rainbow");
      }
    }
  };

  const toggleGridLines = () => {
    setGridLines(!gridLines);
  };

  return (
    <main className="main">
      <div className="controls">
        <div className="color-card">
          <div className="color-box">
            <input
              type="color"
              className="color-select"
              value={penColorValue}
              onChange={getPenValue}
            />
            <span> Pen Color</span>
          </div>
        </div>
        <div className="color-card-2">
          <div className="color-box">
            <input
              type="color"
              className="bg-color-select"
              value={bgColorValue}
              onChange={getBgValue}
            />
            <span> Background Color</span>
          </div>
        </div>
        <button className="eraser-btn" onClick={changeMode}>
          Toggle Eraser
        </button>
        <button className="rainbow-btn" onClick={changeMode}>
          Rainbow Mode
        </button>
        <p className="size-value">
          Grid Size: {sliderValue} x {sliderValue}
        </p>
        <input
          className="size-slider"
          type="range"
          min="1"
          max="64"
          value={sliderValue}
          onChange={getSliderValue}
        />
        <button className="toggle-lines" onClick={toggleGridLines}>
          Toggle Grid Lines
        </button>
        <button className="clear-btn" onClick={clearBg}>
          Reset
        </button>
      </div>
      <div className="grid-wrapper">{setupGrid()}</div>
    </main>
  );
}
