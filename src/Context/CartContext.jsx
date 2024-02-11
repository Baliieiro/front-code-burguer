import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

CartContextProvider.propTypes = {
  children: PropTypes.node,
};

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStore = async (products) => {
    await localStorage.setItem(
      "codeburguer:cartInfo",
      JSON.stringify(products),
    );
  };

  const deleteProduct = async (productId) => {
    const newCart = cartProducts.filter((p) => p.id !== productId);
    setCartProducts(newCart);

    await updateLocalStore(newCart);
  };

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((p) => p.id === product.id);

    let newProductInCart = [];

    if (cartIndex >= 0) {
      newProductInCart = cartProducts;
      newProductInCart[cartIndex].quantity++;
      setCartProducts(newProductInCart);
    } else {
      product.quantity = 1;
      newProductInCart = [...cartProducts, product];
      setCartProducts(newProductInCart);
    }

    await updateLocalStore(newProductInCart);
  };

  const increaseProductInCart = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProducts(newCart);

    await updateLocalStore(newCart);
  };

  const decreaseProductInCart = async (productId) => {
    const cartIndex = cartProducts.findIndex((p) => p.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });

      setCartProducts(newCart);

      await updateLocalStore(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem("codeburguer:cartInfo");

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };
    loadUserData();
  }, []);

  const cart = {
    cartProducts,
    putProductInCart,
    increaseProductInCart,
    decreaseProductInCart,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
