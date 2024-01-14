"use client";
import React from "react";

type TestButtonProps = {
  text: string;
  onClick?: () => void;
};

const TestButton: React.FC<TestButtonProps> = ({ text, onClick }) => {
  return (
    <button className="btn btn-success" onClick={onClick}>
      {text}
    </button>
  );
};

export default TestButton;
