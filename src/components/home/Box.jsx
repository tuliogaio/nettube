import React from "react";

import "./Box.css";
import Button from '../common/Button'

export default ({ posterMovie }) => {
  return (
    <div>
      <div className="box">
        <div className="boxData">
          <div className="boxTitle">{ posterMovie.title }</div>
          <div className="boxDescription">
          { posterMovie.description }
          </div>
          <div className="boxButtons">
            <div className="boxButtonsActions">
              <Button className="boxButtonsActionsPlay">
                <i className="fa fa-play boxButtonsIco"></i>
                Assistir
              </Button>
              <Button className="boxButtonsActionsInfo">
                <i className="fa fa-exclamation-circle boxButtonsIco"></i>
                Mais Informações
              </Button>
            </div>
            <div className="boxAgeRange">
              <span className="boxAgeRangeYear">{ posterMovie.movieRating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
