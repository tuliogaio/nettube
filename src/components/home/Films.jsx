import React, { Component } from "react";

import "./Films.css";

export default class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="films">
        <div className="filmsTop10">
          {this.props.top10 && (
            <React.Fragment>
              <i className="fa fa-bookmark filmsTop10Bookmark"></i>
              <div className="filmsTop10BookmarkText">
                TOP
                <br />
                10
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="filmsTitle">{this.props.title}</div>
        <div className="filmsNewEpisodes">
          {this.props.newEpisodes && (
            <div className="filmsNewEpisodesBar">NOVOS EPISÓDIOS</div>
          )}
        </div>
      </div>
    );
  }
}
