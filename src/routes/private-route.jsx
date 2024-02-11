import { PropTypes } from "prop-types";
import { Route, Redirect } from "react-router-dom";

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};

export default function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem("codeburguer:userData");

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route component={component} {...rest} />;
}
