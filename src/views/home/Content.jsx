import React, { Component } from "react";
import { Link } from "react-router-dom";
import Routes from "./routes";
import Header from "../../components/common/Header";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    this.setState({ ...this.state, modal: !this.state.modal });
  }

  closeModal() {
    this.setState({ ...this.state, modal: false });
  }

  render() {
    return (
      <div className="into">
        <Header>
          <div className="headerLogo">NETFLIX</div>
          <div className="headerLinks">
            <Link to="home" className="categoriesButton">
              Início
            </Link>
            <Link to="" className="categoriesButton">
              Séries
            </Link>
            <Link to="" className="categoriesButton">
              Filmes
            </Link>
            <Link to="" className="categoriesButton">
              Mais Recentes
            </Link>
            <Link to="" className="categoriesButton">
              Minha Lista
            </Link>
          </div>
          <div className="headerOptionsLogged">
            <Button className="optionsLoggedButton">
              <i className="fa fa-search"></i>
            </Button>
            <Button className="optionsLoggedButton">
              <i className="fa fa-child"></i>
            </Button>
            <Button className="optionsLoggedButton">
              <i className="fa fa-bell"></i>
            </Button>
            <Button className="optionsLoggedButton">
              <i className="fa fa-user-circle"></i>
              <i
                onClick={this.showModal}
                className="fa fa-angle-down searchButtonAngle"
              ></i>
            </Button>
            {this.state.modal && (
              <div className="headerModal">
                <Modal />
              </div>
            )}
          </div>
        </Header>
        <Routes />
      </div>
    );
  }
}
