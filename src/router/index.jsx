import { createBrowserRouter } from "react-router-dom";
import { Week1, Layout, Week2 } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Week1 />,
      },
      {
        path: "/week-1",
        element: <Week1 />,
      },
      {
        path: "/week-2",
        element: <Week2 />,
      },
    ],
  },
]);

export default router;
