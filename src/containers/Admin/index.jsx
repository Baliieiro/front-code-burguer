import { PropTypes } from "prop-types";

import { SideMenu } from "../../components";
import paths from "../../constants/paths";
import EditProduct from "./EditProduct";
import ListProduct from "./ListProduct";
import NewProduct from "./NewProduct";
import Orders from "./Orders";
import { Container } from "./styles";

Admin.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string }),
};

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenu />
      {path === paths.Orders && <Orders />}
      {path === paths.Products && <ListProduct />}
      {path === paths.NewProducts && <NewProduct />}
      {path === paths.EditProducts && <EditProduct />}
    </Container>
  );
}
