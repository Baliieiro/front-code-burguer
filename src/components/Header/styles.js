import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .line {
    border: 0.5px solid #bababa;
    height: 40px;
  }
`;
export const ContainerLeft = styled.div`
  display: flex;
  gap: 40px;
  font-size: 1rem;
  line-height: 1.125rem;
`;
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;
export const PageLink = styled.a`
  color: ${(props) => (props.isActive ? "#9758a6" : "#555")};
  font-weight: ${(props) => (props.isActive ? "bold" : "400")};
  cursor: pointer;
`;
export const ContainerText = styled.div`
  p {
    font-size: 14px;
    color: #555;
    font-weight: 300;
  }
  a {
    color: #9758a6;
    font-weight: 700;
  }
`;
