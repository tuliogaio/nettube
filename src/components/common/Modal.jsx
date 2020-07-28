import React from "react";
import { Link } from "react-router-dom"
import "./Modal.css";

export default (props) => {
  return (
    <div>
      <div className="modalItems">Conta</div>
      <div className="modalItems">Centro de Ajuda</div>
      <div className="modalItems"><Link to="/">Sair do Netflix</Link></div>
    </div>
  );
};
