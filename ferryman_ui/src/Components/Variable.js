
const Variable=(props)=>{
    return(
        <div>
            <table className="table-component">
                <tr>
                    <th>{""}</th>
                    <th>{"Dostawca 1"}</th>
                    <th>{"Dostawca 2"}</th>
                    <th>{"Odbiorca 1"}</th>
                    <th>{"Odbiorca 2"}</th>
                    <th>{"Odbiorca 3"}</th>
                    <th>{"Odbiorca 4"}</th>
                </tr>
                <tr>
                    <th>{"Popyt/Podaz"}</th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                </tr>
                <tr>
                    <th>{"Koszt/ Cena"}</th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                    <th><input  type={Number} required="required"/></th>
                </tr>
            </table>
        </div>
    )
}

export default Variable;