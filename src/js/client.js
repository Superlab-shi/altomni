import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import PeopleDetail from "./pages/PeopleDetail";
import PeopleList from "./pages/PeopleList";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={PeopleList}/>
    <Route path="/people_detail/:id" component={PeopleDetail} />    
  </Router>,
app);
