import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1rem 0;
  align-items: center;

  img {
    width: 135px;
    height: 135px;
    border-radius: 1rem;
  }
`;

export const Quantity = styled.div`
  font-weight: 700;
  display: flex;
  gap: 1rem;
  padding-left: 1rem;
  p {
    display: flex;
    align-items: center;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;
