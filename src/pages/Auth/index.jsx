import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginForm, RegisterForm } from "../../modules";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Routes>
        <Route exact path="/" Component={LoginForm} />
        <Route exact path="/signin" Component={LoginForm} />
        <Route exact path="/signup" Component={RegisterForm} />
      </Routes>
    </div>
  </section>
);

export default Auth;
