import React, { PureComponent } from "react";

export default class Navbar extends PureComponent {
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
