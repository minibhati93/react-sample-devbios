import { Component } from 'react';
import '../styles/App.css';
import DisplayBios from './DisplayBios';
import Developer from '../models/Developer';
import AddDevelopers from './AddDeveloper';
import {
  BrowserRouter as Router,
  Switch, Route
}
from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: [
        new Developer(1, "Mini", "Bhati", "Javascript", 2013),
        new Developer(2, "Vini", "Bhati", "Python", 2018),
      ]
    };
  }

  addDevelopers = (dev) => {
    dev.id = this.state.developers.length + 1;
    const newDevs = [...this.state.developers, dev];
    this.setState({
      developers: newDevs
    });
  }

  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/bios">
            <DisplayBios developers={this.state.developers}/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/create-bio">
            <AddDevelopers addDevelopers={this.addDevelopers}/>
          </Route>          
        </Switch>
      </Router>
    );
  }
}

export default App;
