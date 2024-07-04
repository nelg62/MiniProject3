import DisplayPost from "../components/DisplayPosts";
import PostForm from "../components/PostForm";

export default function BlogPage() {
  return (
    <div className="BlogApp">
      <h1>Welcome to the BlogPage</h1>
      <PostForm />
      <DisplayPost />
    </div>
  );
}
