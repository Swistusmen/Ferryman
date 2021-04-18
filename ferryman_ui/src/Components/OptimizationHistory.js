import ResultTable from "./ResultTable"

const OptimizationHistory=(props)=>{
    var iterator=0
    return(
        <>
            {props.tables.map((opt)=>(
            <ResultTable title="Tablica kosztow jednostkowych" o1="odbiorca" o2="odbiorca" o3="odbiorca"
             o4="odbiorca" d1="dostawca" d1="dostawca"
            a1={opt[0]} a2={opt[1]} a3={opt[2]} a4={opt[3]}
             b1={opt[4]} b2={opt[5]} b3={opt[6]} b4={opt[7]}/>
        ))
        }
        </>
    )
}

export default OptimizationHistory;