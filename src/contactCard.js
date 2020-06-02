import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <div>Mobile: {this.props.mobile}</div>
          <div>Work: {this.props.work}</div>
          <div>Email: {this.props.email}</div>
        </ul>
      </div>
    );
  }
}
ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  word: PropTypes.string,
  email: PropTypes.string.isRequired,
};
export default ContactCard;
