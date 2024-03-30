import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || {}
  );

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
