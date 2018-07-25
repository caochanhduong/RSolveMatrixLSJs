import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class ketqua extends Component {
  render() {
    return (
        <div>
        <div className="App" method="POST">
        <label className="tieude">HydroBuddy</label>
        </div>
        <br/>
        <br/>
        <div className="ketqua">
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Tên phân</th>
            <th>Khối lượng</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HNO3</td>
            <td>20.5 gram</td>
            
          </tr>
          <tr>
            <td>H2SO4</td>
            <td>10 gram</td>
            
          </tr>
          <tr>
            <td>CaCO3</td>
            <td>20gram</td>
            
          </tr>
        </tbody>
      </table>
      <NavLink to="/">
      <button>TRỞ VỀ</button>
      </NavLink>
      </div>
        
        </div>
       
        
    )
  }
}
