import { Component } from "react";
import Developer from "../models/Developer";

class AddDevelopers extends Component{

  constructor(props) {
    super(props);
    this.state = {
        firstName:'',
        lastName:'',
        favoriteLanguage:'',
        yearStarted:''
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newDev = new Developer(
      null, this.state.firstName, this.state.lastName, 
      this.state.favoriteLanguage, this.state.yearStarted, 
    );
    this.props.addDevelopers(newDev);
    document.getElementById("devForm").reset();
  }
  
  render() {
    return (
      <div className="container">
          <h1>Add Developer Bio</h1>
          <div className="row">
              <div className="col-mid-6">
                  <form id="devForm"  onSubmit={this.handleSubmit}>
                      <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" name="firstName"  className="form-control" onChange={this.handleChange}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" name="lastName" className="form-control" onChange={this.handleChange}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="favoriteLanguage">Favorite Language</label>
                          <input type="text" name="favoriteLanguage"  className="form-control" onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="yearStarted">Year Started</label>
                          <input type="text" name="yearStarted"  className="form-control" onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                          <button type="submit" className="btn btn-success" >Submit</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
  }
}

export default AddDevelopers;