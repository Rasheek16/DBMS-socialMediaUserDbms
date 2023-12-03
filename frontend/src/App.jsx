import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllUsers } from "./Components";
import "./index.css";

import { Logo } from "./Components";
import HomeLayout from "./Pages/HomeLayout";
import { Landing, PostDetails, User, UserPosts } from "./Pages";
import AllGroups from "./Pages/AllGroups";
import SingleGroupPage from "./Pages/SingleGroupPage";
import Posts from "./Components/Posts";
import GroupDetails from "./Components/GroupDetails";
import Comments from "./Components/Comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/users",
        index: true,
        element: <Landing />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      { path: "/user/:id/posts", element: <UserPosts /> },
      { path: "/user/:id/groups", element: <GroupDetails /> },
      { path: "/user/:id/comments", element: <Comments /> },
      { path: "/post/:id", element: <PostDetails /> },

      {
        path: "/groups",
        element: <AllGroups />,
      },
      {
        path: "/group/:id",
        element: <SingleGroupPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
