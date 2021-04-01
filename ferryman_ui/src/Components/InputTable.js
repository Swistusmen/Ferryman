
const InputTable=(props)=>{
    return(
    <div className="table-component">
        <h3 className="table-title">{"Koszty Transportu"}</h3>
       <table>
       <tr>
                <th>{"  "}</th>
                <th>{"Odbiorca 1"}</th>
                <th>{"Odbiorca 2"}</th>
                <th>{"Odbiorca 3"}</th>
                <th>{"Odbiorca 4"}</th>
           </tr>
           <tr>
                <th>{"Dostawca 1"}</th>
               <th><input  type={Number} required="required"/></th>
               <th><input  type={Number} required="required"/></th>
               <th><input  type={Number} required="required"/></th>
               <th><input  type={Number} required="required"/></th>
           </tr>
           <tr>
                <th>{"Dostawca 2"}</th>
               <th><input  type={Number} required="required"/></th>
               <th><input  type={Number} required="required"/></th>
               <th><input  type={Number} required="required"/></th>
               <th><input  type={Number} required="required"/></th>
           </tr>
       </table>
    </div>
    )
}

export default InputTable