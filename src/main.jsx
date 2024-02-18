import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/AppHome/Signup.jsx";
import Login from "./components/AppHome/Login.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import AddStory from "./components/addStory/AddStory.jsx";
import AddPost from "./components/addPost/AddPost.jsx";
import SingleMainStory from "./components/addStory/SingleMainStory.jsx";
import Profile from "./components/sidebar/Profile.jsx";
import ProfilePosts from "./components/sidebar/ProfilePosts.jsx";
import SavedPostsMain from "./components/sidebar/SavedPostsMain.jsx";
import MessagesMain from "./components/sidebar/MessagesMain.jsx";
import SearchBar from "./components/sidebar/SearchBar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  { path: "/home", element: <Home /> },
  { path: "/search", element: <SearchBar /> },
  { path: "/addstory", element: <AddStory /> },
  { path: "/addpost", element: <AddPost /> },
  // { path: "/reels", element: <ShowReels /> },
  { path: "/singlestory/:id", element: <SingleMainStory /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profileposts/:heading", element: <ProfilePosts /> },
  { path: "/savedposts", element: <SavedPostsMain /> },
  { path: "/messages", element: <MessagesMain /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
