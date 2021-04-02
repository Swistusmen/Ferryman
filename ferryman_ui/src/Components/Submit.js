const Submit=(props)=>{
    return(
      
        <button className="submit" onClick={props.onSubmit} style={{backgroundColor:props.style}}>{props.text}</button>
        
    )
}

export default Submit