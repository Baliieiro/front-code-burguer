import { useState } from "react";
import { toast } from "react-toastify";

import ImgLogo from "../../assets/cart-logo.svg";
import { TableCart } from "../../components";
import { ButtonDefault } from "../../components";
import useCart from "../../hooks/useCart";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import {
  ContainerCart,
  Banner,
  ContainerTable,
  Head,
  ResumeRequest,
  ContainerItems,
} from "./styles";

export function Cart() {
  const { cartProducts } = useCart();
  const [taxDelivery] = useState(5);

  function valueTotalCart() {
    let initialValue = 0;
    const value = cartProducts.reduce(
      (accumulator, currentValue) =>
        currentValue.price * currentValue.quantity + accumulator,
      initialValue,
    );

    return value;
  }

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    await toast.promise(api.post("/orders", { products: order }), {
      pending: "Realizando seu pedido...",
      success: "Pedido realizado com sucesso",
      error: "Falha ao realizar seu pedido, tente novamente",
    });
  };

  return (
    <ContainerCart>
      <Banner src={ImgLogo} alt="image home logo" />
      <section>
        <ContainerTable>
          <Head>
            <p></p>
            <p>Itens</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Total</p>
          </Head>
          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((cartProduct) => (
              <TableCart product={cartProduct} key={cartProduct.id} />
            ))
          ) : (
            <strong>Nenhum item no carrinho.</strong>
          )}
        </ContainerTable>
        <ResumeRequest>
          <ContainerItems>
            <div className="top">
              <h2 className="title">Resumo do pedido</h2>
              <p className="items">Itens</p>
              <p className="items-price">{formatCurrency(valueTotalCart())}</p>
              <p className="tax">Taxa de entrega</p>
              <p className="tax-price">{formatCurrency(taxDelivery)}</p>
            </div>
            <div className="bottom">
              <h2>Total</h2>
              <p>{formatCurrency(valueTotalCart() + taxDelivery)}</p>
            </div>
          </ContainerItems>
          <ButtonDefault onClick={submitOrder}>Finalizar pedido</ButtonDefault>
        </ResumeRequest>
      </section>
    </ContainerCart>
  );
}
