import Header from "./Components/Header"
import Variable from "./Components/Variable"
import ResultTable from "./Components/ResultTable"
import InputTable from "./Components/InputTable"
import Output from "./Components/Output"
import Submit from "./Components/Submit"
import {useState } from 'react'


function App() {
  const [showOutput,setShowOutput]=useState(false)
  


    return ( 
      <div className = "App" >
        <Header title={"Zadanie przewoznika"}/>
        {!showOutput&&<Variable/>}
        {!showOutput&&<InputTable/>}
        {!showOutput&&<Submit onSubmit={()=>setShowOutput(!showOutput)} text={showOutput?"Reset":"Calculate"}
        style={showOutput?"grey":"green"}/>}
        {showOutput &&<ResultTable title="Tablica kosztow jednostkowych" o1="odbiorca" o2="odbiorca" o3="odbiorca" o4="odbiorca" d1="dostawca" d1="dostawca"
        a1="0" a2="0" a3="0" a4="0" b1="0" b2="0" b3="0" b4="0"/>}
        {showOutput &&<Output expense="0" income="0" profit="0"/>}
        {showOutput&&<Submit onSubmit={()=>setShowOutput(!showOutput)} text={showOutput?"Reset":"Calculate"}
        style={showOutput?"grey":"green"}/>}
      </div>
    );
}

export default App;