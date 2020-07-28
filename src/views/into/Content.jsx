import React from "react";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import "./Content.css";

export default (props) => {
  return (
    <div className="mainContent">
      <h2>Filmes, series e muito mais. Sem limites.</h2>
      <h5>Assita onde quiser. Cancele quando quiser.</h5>
      <div className="searchBox">
        <Input
          type="Text"
          className="searchInput"
          placeHolder="O que você quer assistir?"
        />
        <Button className="searchButton">
          VAMOS LÁ
          <span className="searchButtonAngle"><i className="fa fa-angle-right"></i></span>
        </Button>
      </div>
    </div>
  );
};
