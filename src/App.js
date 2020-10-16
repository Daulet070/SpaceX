// 'use stict'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Details from './components/Details/Details';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';

import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {
  fetchData = new FetchData();

  state = {
    rocket: 'Falcon1',
    rocketFeatures: null,
    rockets: [],
    company: null,
  };

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  };
  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState({ rocketFeatures });
      });
  };
  updateCompany() {
    this.fetchData.getCompany()
      .then(data => this.setState({ company: data }))
  };
  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket);
  };
  render() {
    return (
      <BrowserRouter>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Route exact path='/'>
          {this.state.company && <Home company={this.state.company} />}
        </Route>
        <Route exact path='/rocket'>
          <Main rocket={this.state.rocket} />
          {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />}
        </Route>
        <Route path='/calendar'>
          <Calendar />
        </Route>
        <Route path='/details'>
          <Details />
        </Route>
        {this.state.company && <Footer {...this.state.company} />}
      </BrowserRouter>
    );
  };
};

export default App;
