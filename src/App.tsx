import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
    const queryClient= new QueryClient()

    const router = createBrowserRouter([
      { path: "/", 
        element: <RootLayout />, 
        errorElement: <ErrorPage/>,
        children: [
        { index:true, element: <HomePage /> },

      ]},
    ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
