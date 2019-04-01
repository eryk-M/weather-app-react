import React, { Component } from "react";
import "./Menu.scss";

class Menu extends Component {
  state = {};
  handleBack = () => {
    // console.log(this.props);
    // this.history.goBack();
  };
  render() {
    return (
      <div className="menu">
        <button onClick={this.props.home}>
          <i className="fas fa-home" />
        </button>
        <button onClick={this.props.search}>
          <i className="fas fa-search" />
        </button>
        <button>
          <i className="fas fa-bell" />
        </button>
        <button onClick={this.handleBack}>
          <i className="fas fa-undo" />
        </button>
      </div>
    );
  }
}

export default Menu;
