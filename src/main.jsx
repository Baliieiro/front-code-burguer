import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import AppProvider from "./Context";
import Routes from "./routes/routes";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
);
