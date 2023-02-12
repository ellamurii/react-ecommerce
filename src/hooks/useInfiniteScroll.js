import { useEffect, useState } from "react";

const SCROLL_ADJUSTMENT = 50;

// would have used react-query :)
const useInfiniteScroll = () => {
  const [fetchNext, setFetchNext] = useState(false)

  const onScroll = () => {
    const scrollPosition =
      window.innerHeight +
      document.documentElement.scrollTop +
      SCROLL_ADJUSTMENT;

    const docHeight = document.documentElement.offsetHeight;

    if (scrollPosition > docHeight) {
      setFetchNext(true);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return [fetchNext, setFetchNext]
};

export default useInfiniteScroll;
