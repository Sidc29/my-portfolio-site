import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Shiddharth Choudhari`;
  }, [title]);
  return null;
};
