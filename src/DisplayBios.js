import { Component } from "react";
import Developer from './Developer';
import DeveloperBio from "./DeveloperBio";

class DisplayBios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: [
        new Developer(1, "Mini", "Bhati", "Javascript", 2013),
        new Developer(2, "Vini", "Bhati", "Python", 2018),
      ]
    };
  }

  render() {
    return(
      this.state.developers.map(dev =>
        <DeveloperBio developers={dev} key={dev.id}/>)
    )
  }

}

export default DisplayBios;