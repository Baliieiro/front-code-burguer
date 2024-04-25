import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import paths from "../../../constants/paths.js";
import api from "../../../services/api";
import formatCurrency from "../../../utils/formatCurrency";
import { Container } from "./styles.js";
export default function ListProduct() {
  const [products, setProducts] = useState();
  const { push } = useHistory();

  function editProduct(product) {
    push(paths.EditProducts, { product });
  }
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products");

      setProducts(data);
    }
    loadOrders();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell></TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products?.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">
                    {product.offer ? (
                      <CheckCircleIcon style={{ color: "green" }} />
                    ) : (
                      <CancelIcon style={{ color: "red" }} />
                    )}
                  </TableCell>
                  <TableCell>
                    <img src={product.url} alt={`foto-do-${product.name}`} />
                  </TableCell>
                  <TableCell>
                    <EditIcon onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
