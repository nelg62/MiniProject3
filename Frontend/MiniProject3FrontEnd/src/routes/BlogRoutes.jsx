import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import DashboardPage, {
  DashboardMessages,
  DashboardTasks,
} from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
import BlogPage from "../pages/BlogPage";

function BlogRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<BlogPage {...props} />} />

      {/* nested routes, matches on /dash/messages etc */}
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>

      <Route path="/about" element={<AboutPage {...props} />} />

      <Route path="/BlogApp" element={<Homepage {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default BlogRoutes;
