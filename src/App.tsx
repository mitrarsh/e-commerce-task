import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";


const App = () => {

    const router = createBrowserRouter([
      { path: "/", 
        element: <RootLayout />, 
        errorElement: <ErrorPage/>,
        children: [
        { index:true, element: <HomePage /> },
      ]},
    ]);

  return (
  <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
