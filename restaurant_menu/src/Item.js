import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class MenuList extends Component {

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

  onHandleAddToBasket = (item) => {
    console.log(item);
    var that=this.state;
     this.setState({order:{
       items:that.order.items.push(item),
       totalPrice:that.order.totalPrice + parseFloat(item.price)
     }})

    //axios.post('http://localhost:3001/dishes/addItem', {data: {item:item, order:this.state.order} })
    // .then(res => this.setState({order:res}))
  }

  render() {
    const {items} = this.props
    console.log('items',items);
    return (
      <ul>
        {
          items && items.map(item => (
              <li>
                {item.name} - {item.price}
                <button onClick={() => this.onHandleAddToBasket(item)}>Add</button>
              </li>
          ))
        }
      </ul>
    );
  }
}

export default MenuList;
