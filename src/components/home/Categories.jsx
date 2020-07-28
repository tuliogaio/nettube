import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getFilms } from "../../store/actions/films";

import Films from "./Films";

import "./Categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.props.getFilms();
  }
  render() {
    const films = this.props.films;
    return (
      <div className="categories">
        <div className="categoriesTitle">{this.props.title}</div>
        <div className="categoriesList">
          {films
            .filter((element) => element.categoryId === this.props.categoryId)
            .map((element, key) => (
              <Films
                key={key}
                title={element.title}
                top10={element.top10}
                newEpisodes={element.newEpisodes}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ films: state.films.films });
const mapDispacthToProps = (dispacth) =>
  bindActionCreators({ getFilms }, dispacth);
export default connect(mapStateToProps, mapDispacthToProps)(Categories);
