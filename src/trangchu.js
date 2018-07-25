import React, { Component } from 'react';

import NavLink from 'react-router-dom/NavLink';

export default class trangchu extends Component {
  render() {
    return (
        <div className="App" method="POST">
        <label className="tieude">HydroBuddy</label>
        <br/>
        <br/>
        <br/>
         <div className="form-group">
           <label className="duongchat">N(NO3-)   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">N(NH4+)   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">P   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">K   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Mg   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Ca   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">S   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Fe   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Zn   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">B   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Mn   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Cu   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Mo   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Na   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
         <select class="form-control" name="" id="">
         <option>Si</option>
         <option>SiO2</option>
       </select><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <div className="form-group">
           <label className="duongchat">Cl   </label><br/>
           <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
         </div>
         <br/>
         <NavLink to="/ketqua">
          <input type="submit" className="btn btn-secondary" value="Tính toán"/>
          </NavLink>
        </div>
    )
  }
}
