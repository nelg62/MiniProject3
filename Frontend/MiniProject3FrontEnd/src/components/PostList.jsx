import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  ThumbUpOffAlt as ThumbUpOffAltIcon,
  ThumbUpAlt as ThumbUpAltIcon,
} from "@mui/icons-material";
import CreateCommentForm from "./CreateCommentForm";
import PostForm from "./PostForm";

export default function PostList({ post, onPostUpdated, onPostDeleted }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [likePost, setLikePost] = useState(false);
  const [likeAmount, setLikeAmount] = useState(0);

  useEffect(() => {
    const getCommentsOnPost = async () => {
      try {
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

  useEffect(() => {
    const getLikesOnPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/likes/getAllLikesonPost/${post.id}`
        );
        const data = await response.json();
        setLikeAmount(Array.isArray(data.data) ? data.data.length : 0);
        const userLiked = data.data.some((like) => like.userId === 1); // Replace 1 with the current userId
        setLikePost(userLiked);
      } catch (error) {
        console.error("Error fetching likes on post", error);
      }
    };
    getLikesOnPost();
  }, [post.id]);

  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

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

  const handlePostSaved = (updatedPost) => {
    setIsEditing(false);
    onPostUpdated(updatedPost);
  };

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

  const handleToggleLike = async () => {
    try {
      const response = await fetch(`http://localhost:8081/likes/toggleLike`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: 1, postId: post.id }), // Replace 1 with the current userId
      });
      const result = await response.json();
      if (result.result === 200) {
        setLikeAmount(result.data.length);
        setLikePost(!likePost);
      }
    } catch (error) {
      console.error("Error toggling like", error);
    }
  };

  return (
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
          {isEditing ? (
            <PostForm existingPost={post} onPostSaved={handlePostSaved} />
          ) : (
            <Paper sx={{ width: "100%", mb: 2 }}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {post.content_text}
                        </Typography>
                        <br />
                        <Button onClick={toggleComments}>
                          {comments.length} Comments
                        </Button>
                        <IconButton onClick={() => setIsEditing(true)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleDeletePost}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={handleToggleLike}>
                          {likePost ? (
                            <>
                              <Typography>{likeAmount}</Typography>
                              <ThumbUpAltIcon />
                            </>
                          ) : (
                            <>
                              <Typography>{likeAmount}</Typography>
                              <ThumbUpOffAltIcon />
                            </>
                          )}
                        </IconButton>
                      </>
                    }
                  />
                </ListItem>
              </Paper>
              {showComments && (
                <CreateCommentForm
                  postId={post.id}
                  onCommentAdded={handleCommentAdded}
                />
              )}
              {showComments &&
                comments.map((comment) => (
                  <Paper key={comment.id} sx={{ width: "100%", mb: 2 }}>
                    <ListItem>
                      <ListItemText primary={comment.content_text} />
                      <IconButton
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
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
  );
}
