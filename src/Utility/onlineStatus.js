import { useEffect, useState } from "react"

const onlineStatus=()=>{
    const [status,setstatus]=useState(true)
    // check if online
    useEffect(()=>{
        window.addEventListener("online",(e)=>{
                setstatus(true)
        })
        window.addEventListener('offline',()=>{
            setstatus(false)
        })
    })

    return status  //returns a boolean
}

export default onlineStatus