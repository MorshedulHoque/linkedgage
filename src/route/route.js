import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import Blog from "../components/Blog/Blog";
import BlogPost from "../components/Blog/BlogPost"; // Import your BlogPost component
import About from "../components/about/About";
import PrivacyPolicy from "../components/terms_privacy/PrivacyPolicy";
import Terms from "../components/terms_privacy/Terms";

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
        path: "/blog/:slug", // Dynamic route for blog post
        element: <BlogPost />, // Component to render the specific blog post
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
]);

export default router;
