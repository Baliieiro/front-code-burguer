import reactSelect from "react-select";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
`;
export const ProductImg = styled.img`
  width: 60px;
  border-radius: 6px;
`;
export const SelectOption = styled(reactSelect)`
  width: 260px;
  .css-13cymwt-control {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
`;
export const MenuLink = styled.a`
  color: #555;
  font-weight: ${(props) => (props.isActiveStatus ? "bold" : "400")};
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActiveStatus ? "2px solid #9758a6" : "none"};
  padding-bottom: 8px;
`;
