import React, { Component } from 'react';
import Item from './Item'
import './App.css';

class MenuList extends Component {

  render() {
    const {dishesList} = this.props
    const starters = dishesList.map(item => item.Starters)[0]
    const mainCourse = dishesList.map(item => item.MainCourse)[0]
    const desserts = dishesList.map(item => item.Desserts)[0]
    console.log('menu',dishesList, starters);
    return (
      <ul>
        <Item items={starters} />
        <Item items={mainCourse} />
        <Item items={desserts} />
      </ul>
    );
  }
}

export default MenuList;
