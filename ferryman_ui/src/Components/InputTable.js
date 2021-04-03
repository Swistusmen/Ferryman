import React from "react"

class InputTable extends React.Component{
constructor(props)
{
    super()
    this.state={
        v0: props.vars,
        v1: props.vars,
        v2: props.vars,
        v3: props.vars,
        v4: props.vars,
        v5: props.vars,
        v6: props.vars,
        v7: props.vars,
    }
}

updateValue(event){
    this.props.onCallback(event.target.value, event.target.id );
}

render(){
    return(
    <div className="table-component">
        
       <table>
       <tr>
                <th>{"Koszty Transportu"}</th>
                <th>{"Odbiorca 1"}</th>
                <th>{"Odbiorca 2"}</th>
                <th>{"Odbiorca 3"}</th>
                <th>{"Odbiorca 4"}</th>
           </tr>
           <tr>
                <th>{"Dostawca 1"}</th>
               <th><input  id="0" type={Number} required="required"
               onChange={this.updateValue.bind(this)}/></th>
               <th><input  id="1" type={Number} required="required"
               onChange={this.updateValue.bind(this)}/></th>
               <th><input  id="2" type={Number} required="required"
               onChange={this.updateValue.bind(this)}/></th>
               <th><input  id="3" type={Number} required="required"
               onChange={this.updateValue.bind(this)}/></th>
           </tr>
           <tr>
                <th>{"Dostawca 2"}</th>
               <th><input  id="4" type={Number} required="required"
               onChange={this.updateValue.bind(this)}/></th>
               <th><input  id="5" type={Number} required="required"
               onChange={this.updateValue.bind(this)}/></th>
               <th><input  id="6" type={Number} required="required"
               onChange={this.updateValue.bind(this)}/></th>
               <th><input  id="7" type={Number} required="required"
               onChange={this.updateValue.bind(this)}/></th>
           </tr>
       </table>
    </div>
    )
}
}

export default InputTable