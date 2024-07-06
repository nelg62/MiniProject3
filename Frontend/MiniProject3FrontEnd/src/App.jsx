import "./App.css";
import BlogRoutes from "./routes/BlogRoutes";
import NavBar from "./components/NavBar";
import MyThemeProvider from "./context/ThemeContext";
import { PostProvider } from "./context/PostContext";
import PersistentDrawerLeft from "./components/Drawer";

function App() {
  return (
    <>
      <MyThemeProvider>
        <PostProvider>
          <PersistentDrawerLeft />
          <BlogRoutes />
        </PostProvider>
      </MyThemeProvider>
    </>
  );
}

export default App;
