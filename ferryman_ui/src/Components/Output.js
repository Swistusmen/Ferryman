

const Output=(props)=>{
    return(
        <div>
            <table>
                <tr>
                    <th>{"Koszt całkowity: "}</th>
                    <th>{props.expense}</th>
                </tr>
                <tr>
                    <th>{"Przychód całkowity: "}</th>
                    <th>{props.income}</th>
                </tr>
                <tr>
                    <th>{"Zysk całkowity: "}</th>
                    <th>{props.profit}</th>
                </tr>
            </table>
        </div>
    )
}

export default Output