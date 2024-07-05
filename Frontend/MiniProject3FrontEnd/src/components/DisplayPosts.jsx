import PostList from "./PostList";

// Display a list of posts
export default function DisplayPosts({ posts, onPostUpdated, onPostDeleted }) {
  return (
    <div>
      {/* Map through posts array and render PostList component for each post */}
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
