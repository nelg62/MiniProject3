import { useState } from "react";
import "./App.css";
import BlogRoutes from "./routes/BlogRoutes";
import NavBar from "./components/NavBar";
import MyThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <>
      <MyThemeProvider>
        <NavBar></NavBar>
        <BlogRoutes />
      </MyThemeProvider>
    </>
  );
}

export default App;
