import { useHistory, useLocation } from "react-router-dom";

import Cart from "../../assets/cart.png";
import Person from "../../assets/person.png";
import useUser from "../../hooks/useUser";
import {
  Container,
  ContainerText,
  PageLink,
  ContainerLeft,
  ContainerRight,
} from "./styles";

export function Header() {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const {
    userData: { name },
    logout,
  } = useUser();

  function logoutUser() {
    logout();
    push("/login");
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push("/")} isActive={pathname === "/"}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push("/produtos")}
          isActive={pathname.includes("produtos")}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => push("/carrinho")}>
          <img src={Cart} alt="logo-carrinho" />
        </PageLink>
        <div className="line"></div>
        <PageLink>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>

        <ContainerText>
          <p>Ola, {name}</p>
          <PageLink onClick={logoutUser}>Sair</PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
