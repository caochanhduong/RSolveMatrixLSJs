import React, { Component } from 'react';
import './App.css';
import * as math from 'mathjs'
const numeric = require('numeric')


function RMatrixSolveLS(A,NRows,NCols,B,obj){
    var U=numeric.svd(A).U;
    var V=numeric.svd(A).V;
    var S=numeric.svd(A).S;
  
    //tạo ma trận Z là nghịch đảo của S
    var Z=new Array(S.length);
    for(var k=0;k<S.length;k++)
    {
        Z[k]=new Array(S.length);
    }
    for(var i=0;i<S.length;i++)
        for(var j=0;j<S.length;j++)
        {
            if(i===j)
            {
                Z[i][j]=1.0/S[i];
            }
            else
                Z[i][j]=0;
        }
    var UT=math.transpose(U);
    var VT=math.transpose(V);
    var result;
    if(NRows>=NCols)
    {
        result=math.multiply(V,Z);
        result=math.multiply(result,UT);
        result=math.multiply(result,B);
    }
    else
    {
        result=math.multiply(U,Z);
        result=math.multiply(result,VT);
        result=math.multiply(result,B);
    }

    return result;

}

    var A = [[ 0,2,3],
    [ 1,1,3],
  [2,4,2],
[1,1,1]];
    var B =  [ 4,5,31,13];
    var x=new Array(3);
    x=RMatrixSolveLS(A,4,3,B);
    for(var i=0;i<3;i++)
    {
        console.log(x[i]);
    }
  
class App extends Component {
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
        <input type="submit" className="btn btn-secondary" value="Tính toán"/>
      </div>
    );
  }
}

export default App;
