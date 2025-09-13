import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./pages/productDetails";


const App = () => {
    const queryClient= new QueryClient()

    const router = createBrowserRouter([
      { path: "/", 
        element: <RootLayout />, 
        errorElement: <ErrorPage/>,
        children: [
        { index:true, element: <HomePage /> },
        { path:"/product/:id", element: <ProductDetails /> },

      ]},
    ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
