//r-r-d v5
// import { BrowserRouter as Router, Route } from "react-router-dom";

//rrd v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { Text } from "@chakra-ui/react";

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
      <Text textAlign="Center">Navigation</Text>
      <RouterProvider router={router}>
        {/* <Home/>
        <ProductPage></ProductPage> */}
      </RouterProvider>
      <Text textAlign="Center">Footer</Text>
    </>
  );
}

export default App;
