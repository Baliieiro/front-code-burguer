import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  async function putUserData(userInfo) {
    setUserData(userInfo);

    await localStorage.setItem(
      "codeburguer:userData",
      JSON.stringify(userInfo),
    );
  }

  async function logout() {
    await localStorage.removeItem("codeburguer:userData");
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem("codeburguer:userData");

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };
    loadUserData();
  }, []);

  const user = { userData, putUserData, logout };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
