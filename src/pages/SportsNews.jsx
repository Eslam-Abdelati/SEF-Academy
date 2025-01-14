import React, { useEffect, useMemo } from "react";

import AllSportsNews from "../components/sportsNews/AllSportsNews";
import LatestSportsNews from "../components/sportsNews/LatestSportsNews";

function SportsNews() {
  return (
    <>
      <div className="d-flex flex-column gap-5">
        <LatestSportsNews />
        <AllSportsNews />
      </div>
    </>
  );
}

export default SportsNews;
