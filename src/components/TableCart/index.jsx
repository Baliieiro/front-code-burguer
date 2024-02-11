import PropTypes from "prop-types";

import useCart from "../../hooks/useCart";
import formatCurrency from "../../utils/formatCurrency";
import { Body, Quantity } from "./styles";

TableCart.propTypes = {
  product: PropTypes.object,
};

export function TableCart({ product }) {
  const { increaseProductInCart, decreaseProductInCart } = useCart();
  return (
    <Body>
      <img src={product.url} alt={product.name} />
      <p>{product.name}</p>
      <p>{formatCurrency(product.price)}</p>
      <Quantity>
        <button onClick={() => decreaseProductInCart(product.id)}>-</button>
        <p>{product.quantity}</p>
        <button onClick={() => increaseProductInCart(product.id)}>+</button>
      </Quantity>
      <p>{formatCurrency(product.quantity * product.price)}</p>
    </Body>
  );
}
