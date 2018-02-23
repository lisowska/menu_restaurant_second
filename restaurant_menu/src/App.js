import React, { Component } from 'react';
import axios from 'axios'
import MenuList from './MenuList'
import './App.css';

class App extends Component {
constructor(props) {
    super(props);
    this.state= {
      dishesList: [],
      order :{
        items:[],
        totalPrice:0
      }
    };
}

componentDidMount() {
  axios.get('http://localhost:3001/dishes')
    .then(response => this.setState({dishesList: response.data}))
}

  render() {
    console.log(this.state.dishesList);
    return (
      <div className="App">
        <MenuList dishesList={this.state.dishesList}/>
        <div className="totalPrice">
          {this.state.order.totalPrice}
        </div>
      </div>
    );
  }
}

export default App;
