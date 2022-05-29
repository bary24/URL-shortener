import "./app.css";
import InputShortener from "./inputShortener";
import BackgroundAnimate from "./AnimatedBackground";
import LinkResult from "./LinkResult";
function App(){

return(
<div className="container">
<BackgroundAnimate/>
<InputShortener />
<LinkResult/>
</div>

);

}

export default App;