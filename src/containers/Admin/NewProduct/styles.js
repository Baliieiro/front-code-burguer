import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  h1 {
    color: #9758a6;
    font-family: "Jersey 25", sans-serif;
    font-size: 4rem;
    text-transform: uppercase;
  }
  form {
    padding: 30px;
    border-radius: 10px;
    background-color: #565656;
  }
  button {
    width: 100%;
  }
`;
export const Label = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 3px;
`;
export const LabelUpload = styled.label`
  border: 1px dashed #fff;
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 0.5rem;
  }
  input {
    opacity: 0;
    width: 1px;
  }
`;
export const Input = styled.input`
  font-size: 1rem;
  height: 45px;
  background: #fff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  width: 100%;
  min-width: 280px;
  padding-left: 12px;
`;
