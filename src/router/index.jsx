import { createBrowserRouter } from "react-router-dom";
import { Week1, Layout } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Week1 />,
      },
    ],
  },
]);

export default router;
