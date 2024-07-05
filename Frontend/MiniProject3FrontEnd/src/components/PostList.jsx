import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CreateCommentForm from "./CreateCommentForm";
import { Box, Button, Container, IconButton, Paper } from "@mui/material";
import PostForm from "./PostForm";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PostList({ post, onPostUpdated, onPostDeleted }) {
  // State to manage comments and visuals
  const [comments, setComments] = React.useState([]);
  const [showComments, setShowComments] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);

  // Fetch comments for a post when list loads or post.id changes
  React.useEffect(() => {
    const getCommentsOnPost = async () => {
      try {
        console.log("postid", post.id);
        const response = await fetch(
          `http://localhost:8081/posts/${post.id}/comments`
        );
        const data = await response.json();

        setComments(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Error fetching comments", error);
        setComments([]);
      }
    };
    getCommentsOnPost();
  }, [post.id]);

  // Add new comment to comment list
  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  // Toggle comments to view or not view
  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  // Delete the current post
  const handleDeletePost = async () => {
    try {
      await fetch(`http://localhost:8081/posts/${post.id}`, {
        method: "DELETE",
      });
      onPostDeleted(post.id);
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  // Update the post data after saving
  const handlePostSaved = (updatedPost) => {
    setIsEditing(false);
    onPostUpdated(updatedPost);
  };

  // Delete a specific comment
  const handleDeleteComment = async (commentId) => {
    try {
      await fetch(`http://localhost:8081/posts/${post.id}/${commentId}`, {
        method: "DELETE",
      });
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  };

  return (
    <>
      <Container>
        <Box>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              flexDirection: "column",
            }}
          >
            {/* Display PostForm if editing, otherwise display post details */}
            {isEditing ? (
              <PostForm existingPost={post} onPostSaved={handlePostSaved} />
            ) : (
              <Paper sx={{ width: "100%", mb: 2 }}>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <ListItem alignItems="flex-start">
                    {/* Avatar for user */}
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          {/* Text for post */}
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {post.content_text}
                          </Typography>
                          <br />
                          {/* Buton to show number of comments and to display/hide comments when clicked */}
                          <Button onClick={toggleComments}>
                            {comments.length} Comments
                          </Button>
                          {/* Edit post button */}
                          <IconButton onClick={() => setIsEditing(true)}>
                            <EditIcon />
                          </IconButton>
                          {/* Delete post button */}
                          <IconButton onClick={handleDeletePost}>
                            <DeleteIcon />
                          </IconButton>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </Paper>
                {/* Display CreateCommentForm and list of comments if showComments state is true */}
                {showComments && (
                  // Create a comment Form
                  <CreateCommentForm
                    postId={post.id}
                    onCommentAdded={handleCommentAdded}
                  />
                )}
                {showComments &&
                  // Display comments
                  Array.isArray(comments) &&
                  comments.map((comment) => (
                    <Paper key={comment.id} sx={{ width: "100%", mb: 2 }}>
                      <ListItem>
                        {/* Comment text */}
                        <ListItemText primary={comment.content_text} />
                        {/* Delete comment button */}
                        <IconButton
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        {/* Avatar of user */}
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                      </ListItem>
                    </Paper>
                  ))}
              </Paper>
            )}
          </List>
        </Box>
      </Container>
    </>
  );
}
