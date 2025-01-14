import React from "react";

const CircularProgress = ({ percentage }) => {
  const size = 100; // The size of the SVG element
  const strokeWidth = 6; // The thickness of the progress stroke
  const radius = (size - strokeWidth) / 2; // Radius of the outer circle
  const innerRadius = radius - strokeWidth - 4; // Radius of the inner circle
  const circumference = radius * 2 * Math.PI; // Circumference of the outer circle
  const innerCircumference = innerRadius * 2 * Math.PI; // Circumference of the inner circle

  // Increase the offset for the outer circle
  const outerStrokeDashoffset =
    circumference - (percentage / 100) * circumference;

  // Use the same calculation for the inner circle's offset
  const innerStrokeDashoffset =
    innerCircumference - (percentage / 100) * innerCircumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ transform: "rotate(-90deg)" }} // Rotating to start from the top
    >
      {/* Outer Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#eee"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#FFD700" // Gold color
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={outerStrokeDashoffset}
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={innerRadius}
        stroke="#eee"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={innerRadius}
        stroke="#FFD700" // Gold color
        strokeWidth={strokeWidth}
        strokeDasharray={innerCircumference}
        strokeDashoffset={innerStrokeDashoffset}
        strokeLinecap="round"
        fill="none"
      />
      {/* Text in the center */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16px"
        fill="#fff"
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }} // Adjusted to keep text upright
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgress;
