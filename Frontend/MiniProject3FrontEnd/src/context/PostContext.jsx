import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ childern }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:8081/posts");

        const postData = await response.json();
        setPosts(postData.posts);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    getPosts();
  }, []);

  return <PostContext.Provider value={{ posts }}></PostContext.Provider>;
};

export const usePostContext = () => {
  return useContext(PostContext);
};
