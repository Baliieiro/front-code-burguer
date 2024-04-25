import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useLocation } from "react-router-dom";

import useUser from "../../hooks/useUser";
import menuList from "./menuList";
import { Container, ItemContainer, ItemList } from "./styles";

export function SideMenu() {
  const { logout } = useUser();
  const { pathname } = useLocation();

  return (
    <Container>
      <hr />
      {menuList.map((item) => (
        <ItemContainer key={item.id} $active={pathname === item.link}>
          <item.icon className="icon" />
          <ItemList to={item.link}>{item.label}</ItemList>
        </ItemContainer>
      ))}
      <hr />

      <ItemContainer style={{ position: "fixed", bottom: "1rem" }}>
        <LogoutOutlinedIcon style={{ color: "#fff" }} />
        <ItemList to="/login" onClick={logout}>
          Sair
        </ItemList>
      </ItemContainer>
    </Container>
  );
}
