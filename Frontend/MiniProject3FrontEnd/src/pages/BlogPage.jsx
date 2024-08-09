import { useEffect, useState } from "react";
import DisplayPosts from "../components/DisplayPosts";
import PostForm from "../components/PostForm";

export default function BlogPage() {
  // State to store posts
  const [posts, setPosts] = useState([]);

  // Fetch posts when the page loads
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts from backend using getPosts controller function / route
        const response = await fetch(
          "https://miniproject3-naib.onrender.com/posts"
        );
        const data = await response.json();
        // Set posts in state
        setPosts(data.data || []);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };
    fetchPosts();
  }, []);

  // Handle saving posts create and edit
  const handlePostSaved = (savedPost) => {
    if (!savedPost) {
      console.error("Saved post is undefined");
      return;
    }

    console.log("Updated post in blogpage:", savedPost);
    setPosts((prevPosts) => {
      // Find index of the post being updated
      const index = prevPosts.findIndex((post) => post.id === savedPost.id);
      if (index !== -1) {
        // update the post
        const updatedPosts = [...prevPosts];
        updatedPosts[index] = savedPost;
        return updatedPosts;
      } else {
        // add a new post
        return [...prevPosts, savedPost];
      }
    });
  };

  // Handle deleting a post
  const handlePostDeleted = (deletedPostId) => {
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== deletedPostId)
    );
  };

  return (
    <div className="BlogApp">
      <h1>Welcome to the BlogPage</h1>
      {/* Form to create or update posts */}
      <PostForm onPostSaved={handlePostSaved} />
      {/* Display list of posts */}
      <DisplayPosts
        posts={posts}
        onPostUpdated={handlePostSaved}
        onPostDeleted={handlePostDeleted}
      />
    </div>
  );
}
