import { PropTypes } from "prop-types";

import { CartContextProvider } from "./CartContext";
import { UserContextProvider } from "./UserContext";

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default function AppProvider({ children }) {
  return (
    <UserContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </UserContextProvider>
  );
}
