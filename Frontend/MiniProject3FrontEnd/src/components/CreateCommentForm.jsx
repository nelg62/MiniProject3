import { useState } from "react";

export default function CreateCommentForm({ postId, onCommentAdded }) {
  const initialCommentData = {
    userid: 1,
    content_text: "",
    postid: postId,
  };

  const [comment, setComment] = useState(initialCommentData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8081/posts/${postId}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comment),
        }
      );

      const newComment = await response.json();
      onCommentAdded(newComment.data);
      setComment({ ...initialCommentData, postid: postId });
    } catch (error) {
      console.error("Error adding comment", error);
    }
  };

  const handleChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="content_text"
        value={comment.content_text}
        onChange={handleChange}
        placeholder="Add a comment"
      />
      <button type="submit">Comment</button>
    </form>
  );
}
