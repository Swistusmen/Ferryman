import Header from "./Components/Header"
import Variable from "./Components/Variable"
import ResultTable from "./Components/ResultTable"
import InputTable from "./Components/InputTable"
import Output from "./Components/Output"
import Submit from "./Components/Submit"
import React, {useState, Component } from 'react'



class App extends React.Component {
  constructor(){
    super();
    this.state={
      myVar: 0,
      showOutput: false,
      variables:[0,0,0,0,0,0,0,0,0,0,0,0,],
      inputs:[0,0,0,0,0,0,0,0],
      out:[0,0,0,0,0,0,0,0],
      money:[0,0,0]
    }
  };
  
  setShowOutput=()=>{
    console.log(this.state.showOutput)
    this.setState(({showOutput})=>({showOutput: !showOutput}) )
    console.log(this.state.showOutput)
  }
  
  getShowOutput=()=>{return this.state.showOutput}

  changeVariables=(v,b)=>{
      this.state.variables[b]= parseInt(v,10);
      console.log(this.state.variables)
    }

  changeInputs=(v,b)=>{
    this.state.inputs[b]=parseInt(v,10);
    console.log(this.state.inputs);
  }

render(){
    return ( 
      <div className = "App" >
        <Header title={"Zadanie przewoznika"}/>
        {!this.state.showOutput&&<Variable onCallback={this.changeVariables} vars={this.variables}/>}
        {!this.state.showOutput&&<InputTable onCallback={this.changeInputs} vars={this.inputs}/>}
        {!this.state.showOutput&&<Submit onSubmit={()=>this.setShowOutput()} text={this.state.showOutput?"Reset":"Calculate"}
        style={this.state.showOutput?"grey":"green"}/>}
        
        {this.state.showOutput &&<ResultTable title="Tablica kosztow jednostkowych" o1="odbiorca" o2="odbiorca" o3="odbiorca" o4="odbiorca" d1="dostawca" d1="dostawca"
        a1={this.state.out[0]} a2={this.state.out[1]} a3={this.state.out[2]} a4={this.state.out[3]} b1={this.state.out[4]} b2={this.state.out[5]} b3={this.state.out[6]} b4={this.state.out[7]}/>}
        {this.state.showOutput &&<Output expense={this.state.money[0]} income={this.state.money[1]} profit={this.state.money[2]}/>}
        {this.state.showOutput &&<Submit onSubmit={()=>this.setShowOutput()} text={this.state.showOutput?"Reset":"Calculate"}
        style={this.state.showOutput?"grey":"green"}/>}
        
        
      </div>
    );
}
}

export default App;