import { Component } from 'react';
import '../styles/App.css';
import DisplayBios from './DisplayBios';
import Developer from '../models/Developer';

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
      <div className="App">
        <DisplayBios developers={this.state.developers}/>
      </div>
    );
  }
}

export default App;
