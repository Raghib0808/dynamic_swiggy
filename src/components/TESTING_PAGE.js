import { useEffect, useState } from "react"

const Testing=()=>{

    let [count,setcount]=useState(0);
    console.log(count);
    console.log('hell');
    
//   useEffect(()=>{
//     console.log('called');
    
//   },[count])
 

    return(
        <div>
                <button
                 onClick={()=>setcount(count+1)
                    
                }
                >Increase</button>
        </div>
    )
}

export default Testing