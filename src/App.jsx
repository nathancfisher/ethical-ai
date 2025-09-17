import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
