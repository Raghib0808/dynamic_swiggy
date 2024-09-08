import { useState } from "react";
import Food from "./Food_items";
const Category = ({ data, showIndex,setShowIndex,palkia}) => {
    console.log(data);
  const handleclick=()=>{
    if(showIndex==false)
    setShowIndex(true);
    else setShowIndex(false)

  }
    return (
      <div className="food" >
        <div className="Title" onClick={handleclick}>
          <h2>{data.title}</h2> {/* Uncomment and use data.title correctly */}
          <span>⬇️</span>
        </div>
        {showIndex && < Food item={data.itemCards} palkia={palkia} />}
      </div>
    );
  };
  
  export default Category;
  