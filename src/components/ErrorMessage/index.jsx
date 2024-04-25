import PropTypes from "prop-types";

import { ErroMessageStyles } from "./styles";

ErrorMessage.propTypes = {
  children: PropTypes.node,
};

export function ErrorMessage({ children }) {
  return <ErroMessageStyles>{children}</ErroMessageStyles>;
}
