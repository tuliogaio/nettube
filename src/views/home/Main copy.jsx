import React, { Component } from "react";
import Box from "../../components/home/Box";
import Categories from "../../components/home/Categories";

import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {id: 1, title: "Populares na Netflix"},
        {id: 2, title: "Em Alta"}
      ],
    };
  }
  render() {
    return (
      <div className="main">
        <Box />
        {this.state.categories.map((element, key) => 
          <Categories key={key} categoryId={element.id} title={element.title} />
        )}
        
      </div>
    );
  }
}
