import { usePostContext } from "../context/PostContext";
import PostList from "./PostList";

export default function DisplayPosts() {
  const { posts } = usePostContext();
  console.log("afasfaaffas", posts);
  const postList = posts ?? [];
  return (
    <>
      {postList.map((post) => {
        return <PostList key={post.id} post={post}></PostList>;
      })}
    </>
  );
}
