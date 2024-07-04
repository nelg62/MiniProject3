import { Avatar, Button, Container, TextField } from "@mui/material";
import InputFileUpload from "./FileUploadButton";
import ForwardIcon from "@mui/icons-material/Forward";
import { useState } from "react";

export default function PostForm({ existingPost, onPostSaved }) {
  const initialPostData = existingPost || {
    userid: 1,
    content_text: "",
    content_imageURL: "",
  };

  const [post, setPost] = useState(initialPostData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = existingPost
      ? `http://localhost:8081/posts/${existingPost.id}`
      : "http://localhost:8081/posts/create";
    const method = existingPost ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      const savedPost = await response.json();
      console.log("saved post:", savedPost.data);
      onPostSaved(
        existingPost
          ? { ...savedPost.data, id: existingPost.id }
          : savedPost.data
      );
      setPost(initialPostData);
    } catch (error) {
      console.error("Error saving post", error);
    }
  };

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Avatar sx={{ height: "50px", width: "50px" }}></Avatar>
          <TextField
            id="contenttext"
            name="content_text"
            label="Start a Conversation"
            value={post.content_text}
            onChange={handleChange}
          ></TextField>
          <InputFileUpload />
          <Button variant="contained" type="submit">
            <ForwardIcon />
          </Button>
        </div>
      </form>
    </Container>
  );
}
