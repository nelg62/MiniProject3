import { useState } from "react";
import "./App.css";
import BlogRoutes from "./routes/BlogRoutes";
import NavBar from "./components/NavBar";
import MyThemeProvider from "./context/ThemeContext";
import { PostProvider } from "./context/PostContext";
import DisplayPosts from "./components/DisplayPosts";

function App() {
  return (
    <>
      <MyThemeProvider>
        <PostProvider>
          <NavBar></NavBar>
          <BlogRoutes />
        </PostProvider>
      </MyThemeProvider>
    </>
  );
}

export default App;
