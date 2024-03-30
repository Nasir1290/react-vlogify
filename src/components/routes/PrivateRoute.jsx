import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../common/Header";

const PrivateRoute = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.user ? (
        <main>
          <section className="container">
            <Header />
            <Outlet />
          </section>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoute;
