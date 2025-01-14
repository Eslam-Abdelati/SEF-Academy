import { useState, useEffect, useMemo } from "react";

export default function useFetcData(
  url,
  options = { method: "GET", headers: { "Content-Type": "application/json" } }
) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Memoize options to prevent infinite re-fetching
  const memoizedOptions = useMemo(() => options, [options]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, memoizedOptions);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, memoizedOptions]); 

  return { data, error, loading };
}
