import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";


const App = () => {

    const router = createBrowserRouter([
      { path: "/", 
        element: <RootLayout />, 
        children: [
        { path: "/", element: <HomePage /> },
      ]},
    ]);

  return (
  <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
