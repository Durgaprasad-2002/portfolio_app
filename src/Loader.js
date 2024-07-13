import React from "react";

const Loader = () => {
  const containerStyle = {
    display: "flex",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: " #14131a !important",
    margin: 0,
    padding: 0,
  };

  const itemStyle = {
    position: "relative",
    width: "100px",
    height: "100px",
    backgroundColor: "rgb(43, 164, 239)",
    willChange: "transform",
    animation: "Rotate 3s ease infinite forwards",
  };

  const imgLogoStyle = {
    width: "100px",
    height: "100px",
    position: "absolute",
    mixBlendMode: "darken",
    zIndex: 10,
    height: "auto",
  };

  const keyframes = `
    @keyframes Rotate {
      0% ,100%{
        border-radius: 50%;
        transform: rotate(0deg);
      }
      25% {
        border-radius: 15px;
        transform: rotate(90deg);
      }
      50% {
        border-radius: 15px;
        transform: rotate(180deg);
      }
      75% {
        border-radius: 50%;
        transform: rotate(270deg);
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      <img
        alt="Logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfwaFQyGqiy3UUxcssMMeL2WHM3jRi2tQZpntenC7jBBWbCLuqmfd8gxJFRR1eQFx818&usqp=CAU"
        style={imgLogoStyle}
      />
      <div style={itemStyle}></div>
    </div>
  );
};

export default Loader;
