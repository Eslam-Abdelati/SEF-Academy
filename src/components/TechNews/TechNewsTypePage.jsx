import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TechLaptopsNews from "./TechLaptopsNews";
import TechPhonesNews from "./TechPhonesNews";
import TechTabletsNews from "./TechTabletsNews";

function TechNewsTypePage() {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (type !== "labtops" && type !== "phones" && type !== "tablets") {
      navigate("/tech");
    }
  }, [type, navigate]);

  return (
    <>
      {type === "labtops" && <TechLaptopsNews />}
      {type === "phones" && <TechPhonesNews />}
      {type === "tablets" && <TechTabletsNews />}
    </>
  );
}

export default TechNewsTypePage;
