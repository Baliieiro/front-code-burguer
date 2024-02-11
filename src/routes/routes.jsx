import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Cart, Home, Login, Product, Register } from "../containers";
import PrivateRoute from "./private-route";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Product} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
      </Switch>
    </Router>
  );
}
