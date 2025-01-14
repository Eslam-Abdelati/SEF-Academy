import React from "react";
import { Link } from "react-router-dom";

const AsideLinks = ({ id, title, path, activeItem, setActiveItem }) => {
  return (
    <li>
      <Link
        to={path}
        className={`nav-link ${activeItem === id ? "active" : ""}`}
        onClick={() => setActiveItem(id)}
      >
        {title}
      </Link>
    </li>
  );
};

export default AsideLinks;
