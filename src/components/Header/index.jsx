import { Link } from "react-router-dom";

import Cart from "../../assets/cart.png";
import Person from "../../assets/person.png";
import {
  Container,
  ContainerText,
  PageLink,
  ContainerLeft,
  ContainerRight,
} from "./styles";
export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <Link to="/">link</Link>
        <PageLink>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="logo-carrinho" />
        </PageLink>
        <div className="line"></div>
        <PageLink>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>

        <ContainerText>
          <p>Ola, Daniel</p>
          <PageLink>Sair</PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
