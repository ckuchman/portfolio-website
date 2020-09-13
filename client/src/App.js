import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/layout/Header.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';

import './App.css';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches our GET route from the Express server. 
  // (Note the route we are fetching matches the GET route from server.js)
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reducer: state.Reducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Future dispatch functions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);