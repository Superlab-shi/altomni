import React from "react";
import { IndexLink, Link, browserHistory } from "react-router";


class SearchBar extends React.Component {
  state = {
    searchString: '',
  }
  componentWillMount() {
    this.setState({ searchString: this.props.searching || '' });
  }
  doSearch() {
    // Navigation
    browserHistory.push({ pathname: '/', search: '?searching=' + this.state.searchString });
  }
  render() {
    const { searchString } = this.state;
    // console.log('rendering SearchBar',searchString);
    const numberOfResult = Object.keys(this.props.sampleData).length;
    return (
      <div>
        <div className="input-group col-lg-8">
          <input type="text" onChange={event => this.setState({ searchString: event.target.value })} value={searchString} className="form-control" placeholder="Search for..." aria-label="Search for..." />
          <span className="input-group-btn">
            <button onClick={this.doSearch.bind(this)} className="btn btn-primary">Search</button>
          </span>
        </div>
        <div className="numberOfResult">
          <h4>{numberOfResult} people Found</h4>
        </div>
      </div>
    );
  }
}
module.exports = SearchBar;