import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function PaginationDemo() {
  const buttonStyle = {
    margin: "0 5px",
    width: "32px",
    height: "32px",
    lineHeight: "32px",
    textAlign: "center",
    background: "#eee",
    color: "#000",
    border: "2px solid #000",
    borderRadius: "50%",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const nextStyle = {
    ...buttonStyle,
    background: "#007bff",
    color: "#fff",
  };

  const disabledStyle = {
    ...buttonStyle,
    cursor: "default",
    background: "#eee",
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      {[1, 2, 3, 4, 5].map((page) => (
        <button key={page} style={buttonStyle}>
          {page}
        </button>
      ))}

      <button style={disabledStyle} disabled>
        ...
      </button>

      <button style={buttonStyle}>149</button>

      <button style={nextStyle}>
        <FaChevronRight size={12} />
      </button>
    </div>
  );
}
