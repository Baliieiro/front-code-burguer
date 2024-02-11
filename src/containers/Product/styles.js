import styled from "styled-components";

export const ContainerProduct = styled.section`
  min-height: 100vh;
  background-color: #efefef;
`;
export const Banner = styled.img`
  width: 100%;
`;
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 1rem 0 2rem;
`;
export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActive && "2px solid #9758a6"};
  color: ${(props) => (props.isActive ? "#9758a6" : "#9a9a9d")};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`;
export const ProductsContainer = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 2fr);
  gap: 3rem;
  padding: 1rem 3rem;
`;
