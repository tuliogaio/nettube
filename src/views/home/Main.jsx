import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCategories } from "../../store/actions/categories";
import { getPosterMovie } from "../../store/actions/films";

import Box from "../../components/home/Box";
import Categories from "../../components/home/Categories";

import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props.getCategories();
    this.props.getPosterMovie();
  }

  render() {
    const categories = this.props.categories;
    const posterMovie = this.props.posterMovie;
    return (
      <div className="main">
        <Box posterMovie={posterMovie} />
        {categories.map((element, key) => (
          <Categories key={key} categoryId={element.id} title={element.title} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posterMovie: state.films.posterMovie,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getCategories, getPosterMovie }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main);
