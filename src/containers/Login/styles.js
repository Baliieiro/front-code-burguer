import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const ImageContainer = styled.img`
  flex: 1;
`;
export const ContainerItems = styled.div`
  flex: auto;
  height: 100%;
  background: #373737;
  padding: 2.5rem 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);

  img {
    height: 90px;
  }

  h1 {
    color: #fff;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;
export const Label = styled.label`
  color: #fff;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  border-radius: 5px;
  padding-left: 10px;
  background: #fff;
  padding: 8px 12px;
  width: 100%;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  width: 390px;
  border: ${(props) => (props.$error ? "2px solid #cc1717" : "none")};
`;
export const P = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1rem;
  a {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2px;
  margin-bottom: 2rem;
`;
