import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      console.log("getPosts");
      try {
        const response = await fetch("http://localhost:8081/posts");

        const postData = await response.json();
        console.log("postData", postData.data);
        setPosts(postData.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    getPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
