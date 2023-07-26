import React from 'react';
import ReactDOM from 'react-dom/client';
import CreateBlog from "./components/blogs/Create";
import Bloglist from "./components/bloglist";
import BlogView from "./components/blogs/Show";
import BlogEdit from "./components/blogs/Edit";
import App from './App';

import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
  path: "/blog",
  element: <Bloglist/>,
},
{
  path: "/blog/create",
  element: <CreateBlog/>,
},
{
  path: "/blog/:id",
  element: <BlogView/>,
},
{
  path: "/blog/edit/:id",
  element: <BlogEdit/>,
},

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
