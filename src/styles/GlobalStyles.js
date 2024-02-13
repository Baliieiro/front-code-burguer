import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
  a{
    color: #fff
  }
`;
