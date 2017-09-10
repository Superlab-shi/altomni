import React from "react";

class InfoSection extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <div>{description}</div>
      </div>
    );
  }
}
module.exports = InfoSection;