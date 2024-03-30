import React from "react";
import LoginForm from "../components/auth/LoginForm";
import Footer from "./Footer";
import Header from "../components/common/Header";

const LoginPage = () => {
  return (
    <>
      <main>
        <section className="container">
          <Header />
          <LoginForm />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
