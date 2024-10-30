import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    action: rootAction,
    loader: rootLoader,
    children: [
      {
        path: "/contacts/:contactId",
        loader: contactLoader,
        element: <Contact></Contact>,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
