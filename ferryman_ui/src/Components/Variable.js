import React from 'react';
import ReactDOM from 'react-dom';


class Variable extends React.Component{
    constructor(props){
        super();
        this.state={
            v11: props.toFill,
        };
    }
    myCallback=()=>{
        this.setState({v11: this.state.v11});
    }

    updateValue(event){
        this.setState({v11: event.target.value});
        this.props.onCallback(event.target.value);
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
                    <th><input  id="p1" type={Number} required="required" 
                    value={this.state.v11} onChange={this.updateValue.bind(this)}
                    /></th>
                    <th><input  id="p2" type={Number} required="required"/></th>
                    <th><input  id="p3" type={Number} required="required"/></th>
                    <th><input  id="p4" type={Number} required="required"/></th>
                    <th><input  id="p5" type={Number} required="required"/></th>
                    <th><input  id="p6" type={Number} required="required"/></th>
                </tr>
                <tr>
                    <th>{"Koszt/ Cena"}</th>
                    <th><input  id="p7" type={Number} required="required"/></th>
                    <th><input  id="p8" type={Number} required="required"/></th>
                    <th><input  id="p9" type={Number} required="required"/></th>
                    <th><input  id="p10" type={Number} required="required"/></th>
                    <th><input  id="p11" type={Number} required="required"/></th>
                    <th><input  id="p12" type={Number} required="required"/></th>
                </tr>
            </table>
        </div>
    )
}
}

export default Variable;