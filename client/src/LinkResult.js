import {useEffect,useState} from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult=()=>{
const[shortenLink,setShortenLink]=useState("Hello world");
const[copied,setCopied]=useState(false);
useEffect(()=>{
const timer=setTimeout(()=>{
setCopied(false);
},200)

return()=>clearTimeout(timer);
})




return(
<div className="result">
<p>{shortenLink}</p>
<CopyToClipboard text={shortenLink}
onCopy={()=>setCopied(true)}
>
    <button className={copied?"copied":""}> Copy to Clipboard</button>
</CopyToClipboard>


</div>

)
}





export default LinkResult;