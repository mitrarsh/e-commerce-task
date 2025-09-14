import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Cart from "./pages/User/Cart";
import ErrorPage from "./pages/User/ErrorPage";
import HomePage from "./pages/User/HomePage";
import ProductDetails from "./pages/User/productDetails";
import { CartItemsContextProvider } from "./store/cartStore";
import AdminPannel from "./pages/Admin/AdminPannel";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/product/:id", element: <ProductDetails /> },
        { path: "/cart", element: <Cart /> },
        { path: "/admin-pannel", element: <AdminPannel /> },
      ],
    },
  ]);

  return (
    <CartItemsContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </CartItemsContextProvider>
  );
};

export default App;
