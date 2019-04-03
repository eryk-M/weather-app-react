import React, { Component } from "react";
import "./Menu.scss";
import Notify from "../Notify/Notify";
class Menu extends Component {
  state = {
    notify: false,
    messages: 1
  };
  handleNotify = () => {
    this.setState({
      notify: !this.state.notify,
      messages: 0
    });
  };
  render() {
    return (
      <>
        <div className="menu">
          <button className="menu__btn" onClick={this.props.home}>
            <i className="fas fa-home" />
          </button>
          <button className="menu__btn" onClick={this.props.search}>
            <i className="fas fa-search" />
          </button>
          <button className="menu__btn" onClick={this.handleNotify}>
            <i
              className="fas fa-bell"
              style={this.state.messages ? null : { animation: "none" }}
            />
          </button>
          {this.state.messages ? (
            <div className="menu__notification">
              <span>{this.state.messages}</span>
            </div>
          ) : null}
        </div>
        <Notify show={this.state.notify} searchWidth={this.props.width} />
      </>
    );
  }
}

export default Menu;
