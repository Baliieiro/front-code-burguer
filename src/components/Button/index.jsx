import PropTypes from "prop-types";

import Button from "./styles";

ButtonDefault.propTypes = {
  children: PropTypes.node,
};

export function ButtonDefault({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
