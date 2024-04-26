import React, { Component, createContext } from "react";
import Client from "shopify-buy";
const client = Client.buildClient({
  domain: import.meta.env.VITE_REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: import.meta.env.VITE_REACT_APP_SHOPIFY_API,
});

const ShopContext = createContext();

class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }
  createCheckout = async () => {
    // Create an empty checkout
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };

  addItemToCheckout = async () => {};
  removeLineItem = async (lineItemIdsToRemove) => {};

  fetchAllProducts = async () => {
    // Fetch all products in your shop
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };

  closeCart = () => {};
  openCart = () => {};
  closeMenu = () => {};
  OpenMenu = () => {};

  render() {
    // console.log(this.state.checkout);
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          addItemToCheckout:this.addItemToCheckout,
          removeLineItem:this.removeLineItem,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          OpenMenu: this.OpenMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}
const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
