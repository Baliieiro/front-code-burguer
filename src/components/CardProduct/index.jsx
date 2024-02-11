import { PropTypes } from "prop-types";

import useCart from "../../hooks/useCart";
import { ButtonDefault } from "../Button";
import { Container, Image, ProductName, ProductPrice } from "./styles";

CardProduct.propTypes = {
  product: PropTypes.object,
};
export function CardProduct({ product }) {
  const { putProductInCart } = useCart();
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <ButtonDefault onClick={() => putProductInCart(product)}>
          Adicionar
        </ButtonDefault>
      </div>
    </Container>
  );
}
