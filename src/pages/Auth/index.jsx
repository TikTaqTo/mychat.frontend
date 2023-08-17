import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginForm, RegisterForm } from "../../modules";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Routes>
        <Route path="/" Component={LoginForm} />
        <Route path="/signup" Component={RegisterForm} />
      </Routes>
    </div>
  </section>
);

export default Auth;
