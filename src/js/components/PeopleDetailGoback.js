import React from "react";
import { browserHistory } from "react-router";

class PeopleDetailGoback extends React.Component {
  render() {
    return (
      <button className="btn btn-info gobackButton" onClick={this.clicked.bind(this)}>Back</button>
    );
  }
  clicked() {
    console.log(browserHistory);
    browserHistory.goBack();
  }
}
module.exports = PeopleDetailGoback;