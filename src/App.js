import React, { Component } from 'react';
import logo from './logo.svg';
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

    var A=[[1,2,3],[1,1,1],[4,2,3],[3,2,2],[3,4,2]];
    var B=[4,3,1,4,5];
    var x=new Array(3);
    x=RMatrixSolveLS(A,5,3,B);
    for(var i=0;i<3;i++)
    {
        console.log(x[i]);
    }
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
