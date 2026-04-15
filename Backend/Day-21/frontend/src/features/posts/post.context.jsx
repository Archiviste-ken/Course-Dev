import { createContext } from "react";
import { useState } from "react";
import { getFeed } from "./services/post.api";


export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [Post, setPost] = useState(null);
  const [feed, setFeed] = useState(null);

  return (
    <PostContext.Provider value={{ loading, setLoading, setPost, feed, setFeed }}>
      {children}
    </PostContext.Provider>
  );
};
