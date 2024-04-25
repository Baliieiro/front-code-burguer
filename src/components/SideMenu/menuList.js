import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import paths from "../../constants/paths";
const menuList = [
  {
    id: 1,
    label: "Pedidos",
    link: paths.Orders,
    icon: ShoppingBagOutlinedIcon,
  },
  {
    id: 2,
    label: "Listar Produtos",
    link: paths.Products,
    icon: ShoppingCartIcon,
  },
  {
    id: 3,
    label: "Novo Produto",
    link: paths.NewProducts,
    icon: AddShoppingCartIcon,
  },
  // {
  //   id: 4,
  //   label: "Pedidos",
  //   link: paths.,
  //   icon: ShoppingBagOutlinedIcon,
  // },
];
export default menuList;
