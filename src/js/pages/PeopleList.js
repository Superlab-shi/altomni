import React from "react";
import SearchBar from "../components/SearchBar";
import ListItems from "../components/ListItems";
import sampleData from "../store/stubdata";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "body",
      title: "Code Test",
      allData: {},
    }
  }

  componentWillMount() {
    let sampleDataMap = {};
    for (let i = 0; i < sampleData.length; i++) {
        sampleDataMap[i] = sampleData[i];
    }
    this.setState({allData: sampleDataMap});
  }

  filterData(query){
    const sanitized = query.toLowerCase();
    return Object.keys(this.state.allData).filter((id)=>{
        const ele = this.state.allData[id];
        return (ele.firstName.toLowerCase().indexOf(sanitized) > -1)
          || (ele.lastName.toLowerCase().indexOf(sanitized) > -1)
          || (ele.title.toLowerCase().indexOf(sanitized) > -1);
    }).reduce((obj, key) => {
      obj[key] = this.state.allData[key];
      return obj;
    }, {});
    
  }

  render() {
    const { location } = this.props;
    const searchString = location.query.searching || '';
    const data = this.filterData(searchString);

    return (
      <div className="container-fluid bg-light col-lg-12 col-md-auto">
        <SearchBar sampleData={data} searching={searchString} />
        <ListItems sampleData={data} searchString={searchString}/>        
      </div>
    );
  }
}
