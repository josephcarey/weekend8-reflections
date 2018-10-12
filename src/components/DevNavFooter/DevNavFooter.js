import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class DevNavFooter extends Component {
  render() {
    return (
      <footer>
        <h2>DevNavFooter</h2>
        {this.props.links.map((link, index) => {
          return (
            <div key={index}>
              <NavLink to={link}>{link}</NavLink>
            </div>
          );
        })}
      </footer>
    );
  }
}

export default DevNavFooter;
