import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { usePostContext } from "../context/PostContext";

export default function DisplayPosts() {
  const { posts } = usePostContext();
  console.log("afasfaaffas", posts);
  const postList = posts ?? [];
  return (
    <>
      <List>
        {postList.map((post) => {
          return (
            <ListItem>
              <ListItemText>
                <Typography>{post.content_text}</Typography>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
