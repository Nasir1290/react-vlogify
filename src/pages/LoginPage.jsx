import React from "react";
import Field from "../common/Field";
import LoginForm from "../components/auth/LoginForm";
import Footer from "./Footer";
import Header from "./Header";

const LoginPage = () => {
  return (
    <>
    <Header/>
      <main>
        <section className="container">
          <LoginForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
