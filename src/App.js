import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const numeric = require('numeric')
// var A=[[ 22, 10,  2,  3,  7],
//        [ 14,  7, 10,  0,  8],
//        [ -1, 13, -1,-11,  3],
//        [ -3, -2, 13, -2,  4],
//        [  9,  8,  1, -2,  4],
//        [  9,  1, -7,  5, -1],
//        [  2, -6,  6,  5,  1],
//        [  4,  5,  0, -2,  2]];

// var U=numeric.svd(A).U;

// for(var i=0;i<U.length;i++)
//   for(var j=0;j<U[i].length;j++)
//   {
//     console.log(numeric.svd(A).U==undefined);
//   }


const MachineEpsilon = 5E-16;   
function DenseSolverRFSMax()
{
  return 5;
}
function RMatrixSolveLS(A,NRows,NCols,B,Threshold,obj){
  var SV,U ,VT,RP,UTB ,SUTB ,Tmp ,TA ,TX ,Buf ,W ,I ,J ,NSV ,KernelIdx ,V ,VErr ,SVDFailed ,ZeroA ,RFS ,NRFS ,TerminateNextTime ,SmallErr ,i_;
  if ((NRows<=0) || (NCols<=0) || Threshold<0) 
  {
      obj.Info = -1;
      return;
  }

  if (Threshold==0) 
    {
        Threshold = 1000*MachineEpsilon;
    }         
    SVDFailed =  (numeric.svd(A).U==undefined);   
    ZeroA = (numeric.svd(A).U[0]==0);  

    if (SVDFailed || ZeroA) 
    {
        if (SVDFailed) 
        {
            obj.Info = -4;
        }
        else
        {
            obj.Info = 1;
        }
        obj.X=new Array(NCols);
        I=0;
        while (I<=NCols-1) 
        {
            obj.X[I] = 0;
            I=I+1;
        }
        obj.Rep.N = NCols;
        obj.Rep.K = NCols;
        obj.Rep.CX=new Array(NCols);
        for(var i=0;i<NCols;i++)
        {
          obj.Rep.CX[i]=new Array(NCols);
        }
     
        I=0;
        while (I<=NCols-1) 
        {
            J=0;
            while (J<=NCols-1)
            {
                if (I==J)
                {
                  obj.Rep.CX[I][J] = 1;
                }
                else
                {
                  obj.Rep.CX[I,J] = 0;
                }
                J=J+1;
              }
            I=I+1;
        }
        obj.Rep.R2 = 0;
        return;
    }
    //SV=numeric.svd(A).U
    NSV = Math.min(NCols, NRows);
    if (NSV==NCols) 
    {
        obj.Rep.R2 = numeric.svd(A).U[NSV-1]/numeric.svd(A).U[0];
    }
    else
    {
        obj.Rep.R2 = 0;
    }
    obj.Rep.N = NCols;
    obj.Info = 1;    

     // Iterative refinement of xc combined with solution:
    // 1. xc = 0
    // 2. calculate r = bc-A*xc using extra-precise dot product
    // 3. solve A*y = r
    // 4. update x:=x+r
    // 5. goto 2
    //
    // This cycle is executed until one of two things happens:
    // 1. maximum number of iterations reached
    // 2. last iteration decreased error to the lower limit      

    
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
