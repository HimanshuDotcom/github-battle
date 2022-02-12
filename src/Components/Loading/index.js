import { useEffect, useState } from "react";


function Loading({msg}) {
  
    const [data,setData] = useState(msg);
    
    useEffect(() => {
     
         let interval = window.setInterval(() => {
             setData(data => {
                if(data === msg + ".")
                    return msg + "..";
                else if (data === msg + "..")
                    return msg + "...";
                else if(data === msg + "...")
                    return msg;
                else  
                    return msg + ".";
             })
        },200)
        return () => clearInterval(interval);
    },[])

    return (
        <div style={{'padding' : '50px',}}>
            <p style={{'fontSize' : '30px',}}>{data}</p>
        </div>
    )
}

export default Loading;