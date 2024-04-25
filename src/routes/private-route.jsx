import { PropTypes } from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { Header } from "../components";

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool,
};

export default function PrivateRoute({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem("codeburguer:userData");

  if (!user) {
    return <Redirect to="/login" />;
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Route component={component} {...rest} />
    </>
  );
}
