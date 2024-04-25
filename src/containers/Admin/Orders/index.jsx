import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";

import api from "../../../services/api";
import formatDate from "../../../utils/formatDate";
import options from "./orders-options";
import Row from "./Row";
import { Container, Menu, MenuLink } from "./styles";
export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);
  const [rows, setRows] = useState([]);
  const newOptions = [{ id: 0, value: "Todos", label: "Todos" }, ...options];

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("orders");

      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));
    setRows(newRows);
  }, [filteredOrders]);

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = newOptions.findIndex(
        (status) => status.id === activeStatus,
      );
      const newFilteredOrders = orders.filter(
        (order) => order.status === newOptions[statusIndex].value,
      );
      setFilteredOrders(newFilteredOrders);
    }
  }, [activeStatus, newOptions, orders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }

    setActiveStatus(status.id);
  }

  return (
    <Container>
      <Menu>
        {newOptions &&
          newOptions.map((option) => (
            <MenuLink
              key={option.id}
              isActiveStatus={activeStatus === option.id}
              onClick={() => handleStatus(option)}
            >
              {option.label}
            </MenuLink>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                orders={orders}
                setOrders={setOrders}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
