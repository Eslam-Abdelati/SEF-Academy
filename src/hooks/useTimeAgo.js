import { useState, useEffect } from "react";

function useTimeAgo(publishedTime) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentTime = new Date();
      const pastTime = new Date(publishedTime);
      const differenceInSeconds = Math.floor((currentTime - pastTime) / 1000);

      let interval = Math.floor(differenceInSeconds / 31536000);
      if (interval > 1) return `${interval} years ago`;

      interval = Math.floor(differenceInSeconds / 2592000);
      if (interval > 1) return `${interval} months ago`;

      interval = Math.floor(differenceInSeconds / 86400);
      if (interval > 1) return `${interval} days ago`;

      interval = Math.floor(differenceInSeconds / 3600);
      if (interval > 1) return `${interval} hours ago`;

      interval = Math.floor(differenceInSeconds / 60);
      if (interval > 1) return `${interval} minutes ago`;

      return `just now`;
    };

    setTimeAgo(calculateTimeAgo());

    const intervalId = setInterval(() => {
      setTimeAgo(calculateTimeAgo());
    }, 60000); // Updates every minute

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [publishedTime]);

  return timeAgo;
}

export default useTimeAgo;
