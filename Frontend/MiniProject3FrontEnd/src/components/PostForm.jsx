import { Avatar, Button, Container, TextField } from "@mui/material";
import InputFileUpload from "./FileUploadButton";
import ForwardIcon from "@mui/icons-material/Forward";
import { useState } from "react";

export default function PostForm({ existingPost, onPostSaved }) {
  //  set initial post data with existingPost data if it is available, otherwise set to the default values below
  const initialPostData = existingPost || {
    userid: 1,
    content_text: "",
    content_imageURL: "",
  };

  // State to manage post data
  const [post, setPost] = useState(initialPostData);

  // Handle submiting form
  const handleSubmit = async (event) => {
    event.preventDefault();

    // set URL and method based on if the form is being used for updating or creating
    const url = existingPost
      ? `https://miniproject3-naib.onrender.com/posts/${existingPost.id}`
      : "https://miniproject3-naib.onrender.com/posts/create";
    const method = existingPost ? "PUT" : "POST";

    try {
      // Send post data to backend
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      const result = await response.json();
      console.log("Response result:", result);

      // Handle response
      if (result && result.data) {
        console.log("Saved post:", result.data);
        // Update or create post state in blogPage
        onPostSaved(result.data);
        // Reset form after saveing data
        setPost(initialPostData);
      } else {
        console.error("Error saving post", result.error);
      }
    } catch (error) {
      console.error("Error saving post", error);
    }
  };

  // Handle input change from form
  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          {/* Avatar for user */}
          <Avatar sx={{ height: "50px", width: "50px" }}></Avatar>
          {/* Text field for post content */}
          <TextField
            id="contenttext"
            name="content_text"
            label="Start a Conversation"
            value={post.content_text}
            onChange={handleChange}
          ></TextField>
          {/* File upload button */}
          <InputFileUpload />
          {/* Submit button */}
          <Button variant="contained" type="submit">
            <ForwardIcon />
          </Button>
        </div>
      </form>
    </Container>
  );
}
