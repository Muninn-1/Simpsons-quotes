import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Lamp from "./Lamp";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
        working: false
        };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  render() {
    const work = this.state.working ? 'working' : 'pause';
    return (
      <div className="App">
        <header className="App-header">
          <div className="Work">
            <img src={logo} className={work} alt="logo" />
            <h1 className="App-title">Simpsons Quotes</h1>
            <button 
              onClick = {this.handleClick} className={work}>
              {work.toUpperCase()}
            </button>
          </div>
        </header>
        
        <Lamp/>
        <Quotes/>

      </div>
    );
  }
}

export default App;
