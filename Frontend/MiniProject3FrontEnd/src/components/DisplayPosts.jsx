import PostList from "./PostList";

export default function DisplayPosts({ posts, onPostUpdated, onPostDeleted }) {
  return (
    <div>
      {posts.map((post) => (
        <PostList
          key={post.id}
          post={post}
          onPostUpdated={onPostUpdated}
          onPostDeleted={onPostDeleted}
        />
      ))}
    </div>
  );
}
