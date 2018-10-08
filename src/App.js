import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import  GenerateQuote  from  './GenerateQuote';
import  DisplayQuote  from  './DisplayQuote';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';
import Lamp from "./Lamp";
import Quotes from "./Quotes";


const sampleQuote = {
  quote: `Shoplifting is a victimless crime, like punching someone in the dark.`,
  character: `Nelson Muntz`,
  image : `https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185`,
  characterDirection : `Left`
};

const  sampleEmployee = {
    gender:  'male',
    name: {
        title:  'mr',
        first:  'mathys',
        last:  'aubert'
    },
    location: {
        street:  '9467 rue gasparin',
        city:  'perpignan',
        postcode:  '90208'
    },
    email:  'mathys.aubert@example.com',
    picture: {
        medium:  `https://randomuser.me/api/portraits/med/men/66.jpg`
    }
};



class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
        working: false,
        quote: sampleQuote,
        employee: sampleEmployee
        };
  }

  getQuote() {
    fetch `https://thesimpsonsquoteapi.glitch.me/quotes?count=5`
      .then(response  =>  response.json())
      .then(data  => {this.setState({quote: data[0]})
      .then(data  => console.log(this.state.quote))
    });
  }
  
  getEmployee() {
    // Récupération de l'employé via fetch
    fetch`https://randomuser.me/api?nat=fr`
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee:  data.results[0],
        });
    });
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
        
        <GenerateQuote  selectQuote={() =>  this.getQuote()}  />
        <DisplayQuote  quote={this.state.quote}  />

        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
        <DisplayEmployee  employee={this.state.employee}  />

        <Lamp/>
        <Quotes/>

      </div>
    );
  }
}

export default App;
