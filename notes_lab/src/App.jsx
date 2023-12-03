import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContextProvider from "./components/UserContextProvider";
import HomePage from "./routers/HomePage";
import RequireAuth from "./components/RequireAuth";
import AllNotes from "./routers/AllNotes";
import Layout from "./routers/Layout";
import MakeNote from "./routers/MakeNote";
import ErrorPage from "./routers/ErrorPage";
import EditNote from "./routers/EditNote";
import Note from "./routers/Note";
import SignUp from "./routers/SignUp";
import Login from "./routers/Login";
import { loader as noteLoader } from "../src/routers/Note";
import { loader as notesLoader } from "../src/routers/AllNotes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/notes",
        loader: notesLoader,
        element: <AllNotes />,
      },
      {
        path: "/notes/create",
        element: <MakeNote />,
      },
      {
        path: "/notes/edit/:id",
        element: <EditNote />,
      },
      {
        path: "/notes/view/:id",
        loader: noteLoader,
        element: <Note />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
