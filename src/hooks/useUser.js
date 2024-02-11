import { useContext } from "react";

import { UserContext } from "../Context/UserContext";

export default function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with UserContext");
  }
  return context;
}
