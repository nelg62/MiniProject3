import {
  Avatar,
  Button,
  Container,
  IconButton,
  TextField,
} from "@mui/material";
import InputFileUpload from "./FileUploadButton";
import ForwardIcon from "@mui/icons-material/Forward";
import { useState } from "react";

export default function PostForm() {
  const initialPostData = {
    userid: 1,
    content_text: "",
    content_imageURL: "",
  };

  const [post, setPost] = useState(initialPostData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handlesubmit event", event);
    console.log("handlesubmit post", post);

    const createPost = async (post) => {
      try {
        const response = await fetch("http://localhost:8081/posts/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        });

        const newPost = await response.json();

        setPost((prevPosts) => [prevPosts, newPost]);
      } catch (error) {
        console.error("Error adding Post", error);
      }
    };
    await createPost(post);

    setPost(initialPostData);
  };

  const handleChange = (event) => {
    console.log("handlechange name", event.target.name);
    console.log("handlechange value", event.target.value);
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
