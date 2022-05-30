import {useState} from "react";
import "./app.css";
import InputShortener from "./inputShortener";
import BackgroundAnimate from "./AnimatedBackground";
import LinkResult from "./LinkResult";
function App(){
  

return(
<div className="container">
<BackgroundAnimate/>
<InputShortener />


</div>

);

}

export default App;