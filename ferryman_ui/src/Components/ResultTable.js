

const ResultTable=(props)=>{
    return(
        <div className="table-component">
        <table>
            
            <tr>
                <th>{""}</th>
                <th>{props.o1}</th>
                <th>{props.o2}</th>
                <th>{props.o3}</th>
                <th>{props.o4}</th>
            </tr>
            <tr>
                <th>{props.d1}</th>
                <th>{props.a1}</th>
                <th>{props.a2}</th>
                <th>{props.a3}</th>
                <th>{props.a4}</th>
            </tr>
            <tr>
                <th>{props.d1}</th>
                <th>{props.b1}</th>
                <th>{props.b2}</th>
                <th>{props.b3}</th>
                <th>{props.b4}</th>
            </tr>
        </table>
        </div>
    )
}

export default ResultTable