import React from "react";
import PeopleData from "../store/stubdata";
var InfoSection = require('../components/InfoSection.js');
import PeopleDetailGoback from "./../components/PeopleDetailGoback";

export default class PeopleDetail extends React.Component {
  render() {
    const {id} = this.props.params;
    if (id === null || !PeopleData[id]) {
      return null;
    }
    var personalData = PeopleData[id];
    var sections = {'Experience': 'experience', 'Education': 'education', 'Skills': 'skills'};
    var renderedSections = Object.keys(sections)
      .map((key) => <InfoSection key={key} title={key} description={key + ': ' + personalData[sections[key]]}/>);
    const photo_path = '../photos/' + personalData.photo;
    return (
      <div className = "container">
        <PeopleDetailGoback />
        <div className="col-6 text-center">
          <img src={photo_path} className="img-fluid peopleDetail-image" alt="Responsive image" /> 
          <h2>{personalData.firstName} {personalData.lastName}</h2>
          <h5>{personalData.title} at {personalData.currentCompany}</h5>
          <h5>{personalData.graduatedSchool}</h5>
          <h5>{personalData.currentLocation}</h5>
        </div>
        <div className="col-6 renderedSections">{renderedSections}</div>
      </div>
    );
  }
}
