import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/productDetails";
import { CartItemsContextProvider } from "./store/cartStore";
import Cart from "./pages/Cart";

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
