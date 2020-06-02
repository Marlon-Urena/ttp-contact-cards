import React, { Component } from "react";
import PropTypes from "prop-types";
import "./bootstrap.min.css";

class ContactCard extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{this.props.name}</h1>
            <ul>
              <li>Mobile: {this.props.mobile}</li>
              <li>Work: {this.props.work}</li>
              <li>Email: {this.props.email}</li>
            </ul>
          </div>
        </div>
      </div>
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
