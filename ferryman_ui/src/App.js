import Header from "./Components/Header"
import Variable from "./Components/Variable"
import ResultTable from "./Components/ResultTable"
import InputTable from "./Components/InputTable"


function App() {

    return ( 
      <div className = "App" >
        <Header title={"Zadanie przewoznika"}/>
        <Variable/>
        <InputTable/>
        <ResultTable title="Tablica kosztow jednostkowych" o1="odbiorca" o2="odbiorca" o3="odbiorca" o4="odbiorca" d1="dostawca" d1="dostawca"
        a1="0" a2="0" a3="0" a4="0" b1="0" b2="0" b3="0" b4="0"/>
      </div>
    );
}

export default App;