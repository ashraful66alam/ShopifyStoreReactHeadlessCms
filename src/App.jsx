//r-r-d v5
// import { BrowserRouter as Router, Route } from "react-router-dom";

//rrd v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/products/:handle",
      element: <ProductPage />,
    },
  ]);

  return (
    <>
      {/* <h1>React shopify store</h1> */}
      <Navbar></Navbar>
      <Cart></Cart>
      <RouterProvider router={router}>
        {/* <Home/>
        <ProductPage></ProductPage> */}
      </RouterProvider>
      <Text textAlign="Center">Footer</Text>
    </>
  );
}

export default App;
