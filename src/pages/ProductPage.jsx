import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);

  const { handle } = useParams();

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) {
    return <div>loading......</div>;
  }
  return <h1>{product.title}</h1>;
};

export default ProductPage;
