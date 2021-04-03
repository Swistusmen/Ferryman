import React from 'react';
import ReactDOM from 'react-dom';


class Variable extends React.Component{
    constructor(props){
        super();
        this.state={
            v1: props.vars,
            v2: props.vars,
            v3: props.vars,
            v4: props.vars,
            v5: props.vars,
            v6: props.vars,
            v7: props.vars,
            v8: props.vars,
            v9: props.vars,
            v10: props.vars,
            v11: props.vars,
            v0: props.vars,
            
            
        };
    }

    updateValue(event){
        this.props.onCallback(event.target.value, event.target.id );
    }

    

    render(){return(
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
                    <th><input  id="0" type={Number} required="required" 
                    value={this.state.v0} onChange={this.updateValue.bind(this)}
                    /></th>
                    <th><input  id="1" type={Number} required="required" 
                    value={this.state.v1} onChange={this.updateValue.bind(this)}
                    /></th>
                    <th><input  id="2" type={Number} required="required"
                    value={this.state.v2} onChange={this.updateValue.bind(this)}/>
                    </th>
                    <th><input  id="3" type={Number} required="required"
                    value={this.state.v3} onChange={this.updateValue.bind(this)}/>
                    </th>
                    <th><input  id="4" type={Number} required="required"
                    value={this.state.v4} onChange={this.updateValue.bind(this)}/>
                    </th>
                    <th><input  id="5" type={Number} required="required"
                    value={this.state.v5} onChange={this.updateValue.bind(this)}/>
                    </th>
                </tr>
                <tr>
                    <th>{"Koszt/ Cena"}</th>
                    <th><input  id="6" type={Number} required="required"
                    value={this.state.v6} onChange={this.updateValue.bind(this)}/>
                    </th>
                    <th><input  id="7" type={Number} required="required"
                    value={this.state.v7} onChange={this.updateValue.bind(this)}/>
                    </th>
                    <th><input  id="8" type={Number} required="required"
                    value={this.state.v8} onChange={this.updateValue.bind(this)}/>
                    </th>
                    <th><input  id="9" type={Number} required="required"
                    value={this.state.v9} onChange={this.updateValue.bind(this)}/>
                    </th>
                    <th><input  id="10" type={Number} required="required"
                    value={this.state.v10} onChange={this.updateValue.bind(this)}/>
                    </th>
                    <th><input  id="11" type={Number} required="required"
                    value={this.state.v11} onChange={this.updateValue.bind(this)}/>
                    </th>
                </tr>
            </table>
        </div>
    )
}
}

export default Variable;