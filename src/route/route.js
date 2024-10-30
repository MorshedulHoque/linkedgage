import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import Blog from "../components/blog/Blog";
import Admin from "../components/admin/Admin";
import OnePost from "../components/blog/OnePost";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <OnePost />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
