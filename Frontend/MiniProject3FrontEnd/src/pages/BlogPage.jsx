import { useEffect, useState } from "react";
import DisplayPosts from "../components/DisplayPosts";
import PostForm from "../components/PostForm";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8081/posts");
        const data = await response.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };
    fetchPosts();
  }, []);

  const handlePostSaved = (savedPost) => {
    if (!savedPost) {
      console.error("Saved post is undefined");
      return;
    }

    console.log("Updated post in blogpage:", savedPost);
    setPosts((prevPosts) => {
      const index = prevPosts.findIndex((post) => post.id === savedPost.id);
      if (index !== -1) {
        const updatedPosts = [...prevPosts];
        updatedPosts[index] = savedPost;
        return updatedPosts;
      } else {
        return [...prevPosts, savedPost];
      }
    });
  };

  const handlePostDeleted = (deletedPostId) => {
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== deletedPostId)
    );
  };

  return (
    <div className="BlogApp">
      <h1>Welcome to the BlogPage</h1>
      <PostForm onPostSaved={handlePostSaved} />
      <DisplayPosts
        posts={posts}
        onPostUpdated={handlePostSaved}
        onPostDeleted={handlePostDeleted}
      />
    </div>
  );
}
