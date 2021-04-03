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
      showOutput: false
    }
    
  };
  setShowOutput=()=>{this.state.showOutput= !this.state.showOutput}

  parentCallback=(v11)=>{
      this.state.myVar= v11;
      console.log(this.state.myVar);
    }

render(){
    return ( 
      <div className = "App" >
        <Header title={"Zadanie przewoznika"}/>
        {!this.state.showOutput&&<Variable toFill={this.state.myVar} onCallback={this.parentCallback}/>}
        {!this.state.showOutput&&<InputTable/>}
        {!this.state.showOutput&&<Submit onSubmit={()=>this.setShowOutput(!this.state.showOutput)} text={this.state.showOutput?"Reset":"Calculate"}
        style={this.state.showOutput?"grey":"green"}/>}
        {this.state.showOutput &&<ResultTable title="Tablica kosztow jednostkowych" o1="odbiorca" o2="odbiorca" o3="odbiorca" o4="odbiorca" d1="dostawca" d1="dostawca"
        a1="0" a2="0" a3="0" a4="0" b1="0" b2="0" b3="0" b4="0"/>}
        {this.showOutput &&<Output expense="0" income="0" profit="0"/>}
        {this.showOutput&&<Submit onSubmit={()=>this.setShowOutput(!this.state.showOutput)} text={this.state.showOutput?"Reset":"Calculate"}
        style={this.state.showOutput?"grey":"green"}/>}
        <button onClick={()=>{alert(this.state.myVar)}}/>
          <h1>{this.state.myVar} </h1>
      </div>
    );
}
}

export default App;