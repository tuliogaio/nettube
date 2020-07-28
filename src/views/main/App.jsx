import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/common/Header";
import Into from "../into/Content";

import "./App.css";

export default (props) => {
  return (
    <div className="app">
      <Header>
        <div className="headerLogo">NETFLIX</div>
        <div className="headerSignin">
          <Link className="signinButton" to="/home">
            ENTRAR
          </Link>
        </div>
      </Header>
      <Into />
    </div>
  );
};
