import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component
{
  constructor (props){
    super(props)
    this.state={
      data : "",
      prices: ""
    }
  }

  info(){
    fetch('http://localhost:8000/getData')
        .then(response => response.json())
        .then(json => this.setState({data:json}))
        .catch(error => console.error(error));
  }
  
  products(){
    fetch('http://localhost:8000/getPrices')
        .then(response => response.json())
        .then(json => this.setState({prices:json}))
        .catch(error => console.error(error));
  }
  fetchData=()=>
  {
     this.info();
     this.products();
  }
  render()
  {
     return (
      <div>
        <button onClick={this.fetchData}>fetch </button>
        <p>{this.state.data.name}</p>
        <p>{this.state.data.age}</p>
        <p>{this.state.data.field}</p>

        <div><p>{this.state.prices.price1}</p>
        <p>{this.state.prices.price2}</p>
        <p>{this.state.prices.price3}</p></div>
      </div>
     )
  }
 
}




// function App() {
//   {info()}
//   {products()}
//   return (
//     <div className="App">
//     <p>my name is {res.name}</p>
//     <p>my age is {res.age}</p>
//     <p>my field is {res.field}</p>
//     <div>
//       <p>f{res.price1}</p>
//       <p>{res.price2}</p>
//       <p>{res.price3}</p>
//     </div>

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
