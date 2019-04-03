import React, { Component } from "react";
import "./Notify.scss";

class Notify extends Component {
  state = {
    answer: false,
    input: false,
    message: "",
    friendMessage:
      "Psst! Bro, can you check weather in Olsztyn for me? I don't have windows in my home...",
    showData: []
  };
  displayData = [];
  handleAnswer = () => {
    this.setState({
      answer: !this.state.answer,
      input: !this.state.input
    });
    document.querySelector(".notify").classList.toggle("answer");
  };

  handleInput = e => {
    this.setState({
      message: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    this.handleFormSubmit();
  };
  handleFormSubmit = () => {
    let i = 0;

    if (this.displayData.length === 1) {
      alert("You cant 'send' more messages, this is here only for fun ;)");
    } else {
      this.displayData.push(
        <div key={i} className="notify__answer">
          <p className="notify__answer-message">{this.state.message}</p>
        </div>
      );
      this.setState({
        showData: this.displayData,
        message: ""
      });
    }
  };
  onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.handleFormSubmit();
    }
  };
  render() {
    const style = {
      transform: this.props.show ? "translateY(0)" : "translateY(100%)",
      width: this.props.searchWidth.search ? "96%" : "100%"
    };

    const input = {
      opacity: this.state.input ? "1" : "0",
      marginRight: this.props.searchWidth.search ? null : ".5rem"
    };
    return (
      <div className="notify" style={style}>
        <div className="notify__item">
          {this.state.answer ? (
            <div onClick={this.handleAnswer} className="notify__arrow">
              <i className="fas fa-chevron-circle-down" />
            </div>
          ) : null}
          <div className="notify__item--photo" />
          {this.state.answer ? (
            <p className="notify__name">Johnny English</p>
          ) : (
            <>
              <p className="notify__item--message">
                {this.state.friendMessage}
              </p>
              <button
                className="notify__btn-answer"
                onClick={this.handleAnswer}
              >
                Answer
              </button>
            </>
          )}
        </div>
        {this.state.answer ? (
          <div className="notify__item--question">
            <p>{this.state.friendMessage}</p>
          </div>
        ) : null}
        {this.state.answer ? this.state.showData : null}
        <form>
          <textarea
            type="text"
            className="notify__input"
            style={input}
            value={this.state.message}
            onChange={this.handleInput}
            onKeyDown={this.onEnterPress}
          />
          <button
            className="notify__send"
            style={input}
            onClick={this.handleClick}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Notify;
