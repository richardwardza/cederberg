import React from "react";

interface ProgressProps {
  bgColor: string;
  progress: number;
  height: string;
  label: string;
}

export const ProgressBar = ({ bgColor, progress, height, label }: ProgressProps) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    marginBottom: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgColor,
    TextAlignment: "right",
  };

  const progresstext = {
    padding: 10,
    color: "#2C3E50",
    fontSize: "12px",
    marginLeft: "35px",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{label}</span>
      </div>
    </div>
  );
};
