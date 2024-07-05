import { useState } from "react";

// Create a new comment
export default function CreateCommentForm({ postId, onCommentAdded }) {
  // initial state for new comment
  const initialCommentData = {
    userid: 1, //set userid as 1 for now will change when users are created
    content_text: "",
    postid: postId,
  };

  // State for comment being created
  const [comment, setComment] = useState(initialCommentData);

  // Handle submiting form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create a new comment
      const response = await fetch(
        `http://localhost:8081/posts/${postId}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comment),
        }
      );

      // Check the response and save to newComment
      const newComment = await response.json();

      // update comments in postlist
      onCommentAdded(newComment.data);

      // Reset comment form
      setComment({ ...initialCommentData, postid: postId });
    } catch (error) {
      console.error("Error adding comment", error);
    }
  };

  // Handle input field changes
  const handleChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* input field for comment */}
      <input
        type="text"
        name="content_text"
        value={comment.content_text}
        onChange={handleChange}
        placeholder="Add a comment"
      />
      {/* Submit button to post comment */}
      <button type="submit">Comment</button>
    </form>
  );
}
