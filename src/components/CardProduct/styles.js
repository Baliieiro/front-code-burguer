import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 390px;
  height: 200px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 30px 60px 0px #3939391a;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
`;
export const Image = styled.img`
  width: 185px;
  border-radius: 12px;
  margin-right: 10px;
`;
export const ProductName = styled.p`
  font-weight: bold;
  color: #000;
  line-height: 18.75px;
  font-size: 1.25rem;
  height: 38px;
`;
export const ProductPrice = styled.p`
  margin-top: 20px;
`;
