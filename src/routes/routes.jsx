import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import paths from "../constants/paths";
import { Admin, Cart, Home, Login, Product, Register } from "../containers";
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

        <PrivateRoute component={Admin} path={paths.Orders} isAdmin />
        <PrivateRoute component={Admin} path={paths.Products} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditProducts} isAdmin />
      </Switch>
    </Router>
  );
}
