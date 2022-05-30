import {useState} from "react";
import axios from "axios";
const InputShortener=()=>{
    const [webUrl,setWebUrl]=useState("");
    const [androidUrl,setAndroidUrl]=useState("");
    const [shortUrl,setShortUrl]=useState("");
    console.log(shortUrl);
   
    const handleClick=(e)=>{
        e.preventDefault();
        setWebUrl(webUrl);
        setWebUrl("");
  postData();
    }
    
    const postData =async function (){
        const URL="http://localhost:8000";
        const result =await axios.post("http://localhost:8000/short",
        {webUrl:webUrl,
        androidUrl:androidUrl});
        setShortUrl(`${URL}/${result.data}`);
    
        }

   
    return(
        
        <div className="inputContainer">
        <h1>URL <span>Shortener</span></h1>
        <div> 
        <form>
        <input className="box" type="text" placeholder="Paste Web full link"
        value={webUrl} onChange={(e)=>setWebUrl(e.target.value)} id="fullLink"></input>
        <input className="box" type="text" placeholder=" Paste Android full link" value={androidUrl}
        onChange={(e)=>setAndroidUrl(e.target.value)}></input>
        <input className="box" type="text" placeholder="Paste Ios full link"></input>
        
        <button onClick= {handleClick}>Shorten</button>
        </form>
        
         </div>
         <p> ShortURL: {shortUrl}</p> 
        
        </div>
    );
}

export default InputShortener;