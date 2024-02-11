import styled from "styled-components";

const Button = styled.button`
  background-color: #9758a6;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  border-radius: ${(props) => (props.borderRadius ? "8px" : "20px")};
  padding: 0.75rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
export default Button;
