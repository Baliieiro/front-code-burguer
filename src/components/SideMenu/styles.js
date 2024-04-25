import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #3c3c3c;
  min-width: 300px;
  hr {
    margin: 70px 15px 50px;
  }
`;
export const ItemContainer = styled.div`
  height: 60px;
  background-color: ${(props) => (props.$active ? "#565656" : "none")};
  border-radius: 2px;
  margin: 8px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  .icon {
    color: #fff;
  }
`;
export const ItemList = styled(Link)`
  font-size: 16px;
  margin-left: 8px;
`;
