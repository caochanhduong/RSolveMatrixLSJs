import React, { Component } from 'react';
import trangchu from './trangchu.js';
import ketqua from './ketqua.js';
import {Route} from 'react-router-dom';
export default class DieuHuongURL extends Component {
  render() {
    return (
      
      <div>
     
      <Route exact path="/" component={trangchu} ></Route>
      <Route exact path="/ketqua" component={ketqua} ></Route>
  </div>
      
    )
  }
}
