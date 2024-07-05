import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CreateCommentForm from "./CreateCommentForm";
import { Box, Button, Container, Paper } from "@mui/material";

export default function PostList({ post }) {
  const [comments, setComments] = React.useState([]);
  const [showComments, setShowComments] = React.useState(false);

  React.useEffect(() => {
    const getCommentsOnPost = async () => {
      try {
        console.log("postid", post.id);
        const response = await fetch(
          `http://localhost:8081/posts/${post.id}/comments`
        );
        const data = await response.json();
        let dataComments = data.data;
        console.log("getcommenydata", dataComments);
        setComments(Array.isArray(dataComments) ? dataComments : []);
      } catch (error) {
        console.error("Error fetching comments", error);
        setComments([]);
      }
    };
    getCommentsOnPost();
  }, [post.id]);

  const handleCommentAdded = (newComment) => {
    setComments((prevComments) =>
      Array.isArray(prevComments) ? [...prevComments, newComment] : [newComment]
    );
  };

  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
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
                      <React.Fragment>
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
                      </React.Fragment>
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
                Array.isArray(comments) &&
                comments.map((comment) => (
                  <Paper sx={{ width: "100%", mb: 2 }}>
                    <ListItem key={comment.id}>
                      <ListItemText primary={comment.content_text} />
                      <ListItemAvatar>
                        <Avatar
                          alt={comment.userid}
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                    </ListItem>
                  </Paper>
                ))}
            </Paper>
          </List>
        </Box>
      </Container>
    </>
  );
}
