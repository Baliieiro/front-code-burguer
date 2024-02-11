import { PropTypes } from "prop-types";

import { Header } from "../components";
import { CartContextProvider } from "./CartContext";
import { UserContextProvider } from "./UserContext";

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default function AppProvider({ children }) {
  return (
    <UserContextProvider>
      <Header />
      <CartContextProvider>{children}</CartContextProvider>
    </UserContextProvider>
  );
}
