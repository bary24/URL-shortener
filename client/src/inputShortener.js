import React from "react";

const InputShortener=()=>{
    return(
        <div className="inputContainer">
        <h1>URL <span>Shortener</span></h1>
        <div> 
        <form>
        <input className="box" type="text" placeholder="Paste Web full link"></input>
        <input className="box" type="text" placeholder=" Paste Android full link"></input>
        <input className="box" type="text" placeholder="Paste Ios full link"></input>
        <button>Shorten</button>
        </form>
        
         </div>
        
        
        </div>
    );
}

export default InputShortener;