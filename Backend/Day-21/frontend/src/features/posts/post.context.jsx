import { createContext } from "react";
import { useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [Post, setPost] = useState(null);
  const [Feed, setFeed] = useState(null);

  return (
    <PostContext.Provider value={{ loading, setLoading, setPost, feed, set }}>
      {children}
    </PostContext.Provider>
  );
};
