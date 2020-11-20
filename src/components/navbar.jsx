import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <h1 className="navbar-text">
          <i className="fas fa-shopping-basket"></i>
          Shopping List
          <span className="count">{this.props.totalCount}</span>
        </h1>
      </header>
    );
  }
}
