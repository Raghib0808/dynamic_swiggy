import Cards from "./Cards.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import onlineStatus from "../Utility/onlineStatus.js";
import ContactUs from  "./ContactUs.js"
import Better from "./Better.js";


const   Body=()=>{
     
     let [reslist,setrestlist]=useState([])
     let[list,setlist]=useState([])
    
     
  const [search,setsearch]=useState("")
 

  useEffect(()=>{
    fetchData()
   
  },[])
  // if(reslist.length!=0)
  // console.log(reslist[6].info.id);
 
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await(data).json()   
  //  console.log(json.data.cards);
   
  //  rag= json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
   setrestlist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
   setlist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
   
   
  }
  // console.log(reslist);
  

  const network=onlineStatus()
  if(network===false){
    return(
      <>
        <h1>OOOOOOOOOOOOO....Check you internet connection and try again</h1>
      </>
    )
  }

 if(reslist.length==0){
  return(
    <div className="io">
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
    </div>
  )
 }
    return(
        <div>
          <ContactUs />
        <div className="filter">
         
           <div className="search">
               <input type="text" placeholder="search" className="search-btn" value={search} onChange={(e)=>{setsearch(e.target.value); }}  />
               <button className="float" type="submit" onClick={()=>{
               
                
                let filtered=list.filter(
                  (res)=>res.info.name.toLowerCase().includes(search)  
                                     
                  
                  
                )
                
                 setrestlist(filtered);
                

               }}>Search</button>
           </div>

           {/* .filter button */}
             <button className="filter-btn" onClick={
             
              ()=>{
                const fil=reslist.filter(
                  (res)=>res.info.avgRating>4.2
                );
                setrestlist(fil)
                

             }}>Top Rated Restraunt</button>
         </div>
         <div className="All_card">
        {
            reslist.map(restraunt=>
         
          <Link to={"/restaurants/"+restraunt.info.id} className="sahi"> 
            <Cards key={restraunt.info.id} resdata={restraunt}/>
             </Link>  
         
          )
        }
    
    </div>



         </div>
         
    )
}
export default Body;