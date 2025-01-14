import React, { useEffect, useMemo } from "react";
import useFetchData from "../../hooks/useFetchData";
import Article from "../ui/newsPage/Article";
import Loader from "../ui/loader/Loader"; // Assuming you have a Loader component

function AllBusinessNews() {
  const url = "../DB/articles.json";
  const options = useMemo(
    () => ({
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }),
    []
  );

  const { data, error, loading } = useFetchData(url, options);

  useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [error]);

  const businessData = data?.filter((art) => art.category === "business");

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <p className="text-danger">Error fetching data</p>
      </div>
    );
  }

  if (businessData?.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <h3 className="text-white fw-bolder">Coming Soon...</h3>
      </div>
    );
  }

  return (
    <section className="business-articls">
      <div className="d-flex flex-column gap-5">
        {businessData.map((art) => (
          <Article key={art.id} data={art} />
        ))}
      </div>
    </section>
  );
}

export default AllBusinessNews;
