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
  Card,
  CardContent,
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

  // Fetch comments on post when post id changes
  useEffect(() => {
    const getCommentsOnPost = async () => {
      try {
        const response = await fetch(
          `https://miniproject3-naib.onrender.com/posts/${post.id}/comments`
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

  // Fetch likes on post when post ID changes
  useEffect(() => {
    const getLikesOnPost = async () => {
      try {
        const response = await fetch(
          `https://miniproject3-naib.onrender.com/likes/getAllLikesonPost/${post.id}`
        );
        const data = await response.json();
        setLikeAmount(Array.isArray(data.data) ? data.data.length : 0);
        const userLiked = data.data.some((like) => like.userId === 1);
        setLikePost(userLiked);
      } catch (error) {
        console.error("Error fetching likes on post", error);
      }
    };
    getLikesOnPost();
  }, [post.id]);

  // Handle adding a new comment to the state
  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  // Toggle displaying comments
  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  // Handle deleting a post
  const handleDeletePost = async () => {
    try {
      await fetch(`https://miniproject3-naib.onrender.com/posts/${post.id}`, {
        method: "DELETE",
      });
      onPostDeleted(post.id);
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  // Handle saving an updated post
  const handlePostSaved = (updatedPost) => {
    setIsEditing(false);
    onPostUpdated(updatedPost);
  };

  // Handle deleting a comment
  const handleDeleteComment = async (commentId) => {
    try {
      await fetch(
        `https://miniproject3-naib.onrender.com/posts/${post.id}/${commentId}`,
        {
          method: "DELETE",
        }
      );
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  };

  // Handle toggling a like on a post
  const handleToggleLike = async () => {
    try {
      const response = await fetch(
        `https://miniproject3-naib.onrender.com/likes/toggleLike`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: 1, postId: post.id }),
        }
      );
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
            // Show post form to edit
            <PostForm existingPost={post} onPostSaved={handlePostSaved} />
          ) : (
            <Paper sx={{ width: "100%", mb: 2 }}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                <Card>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <CardContent>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body1"
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
                    </CardContent>
                  </ListItem>
                </Card>
              </Paper>
              {/* Display comment form if showComment is true */}
              {showComments && (
                <CreateCommentForm
                  postId={post.id}
                  onCommentAdded={handleCommentAdded}
                />
              )}
              {/* Display comments if showComments is true */}
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
