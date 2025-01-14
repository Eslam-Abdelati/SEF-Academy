import React from "react";

function ResultsCircularProgress({ studentMarks, examMarks }) {
  const percentage = Math.round((studentMarks / examMarks) * 100);
  const size = 200;
  const strokeWidth = 12;
  // Radius of the outer circle
  const radius = (size - strokeWidth) / 2;
  // Radius of the inner circle
  const innerRadius = radius - strokeWidth - 4;
  const circumference = radius * 2 * Math.PI; 
  const innerCircumference = innerRadius * 2 * Math.PI; 

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
      style={{ transform: "rotate(-90deg)" }} 
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
        stroke="#FFD700"
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
        stroke="#FFD700" 
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
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }} 
      >
        {`${studentMarks} / ${examMarks}`}
      </text>
    </svg>
  );
}

export default ResultsCircularProgress;
