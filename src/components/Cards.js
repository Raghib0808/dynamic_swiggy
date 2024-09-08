const Cards = (props) => {
    
    const {resdata}=props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resdata?.info;      
   return (
       <div className="card">
           <div className="card_img ,bas">
               <img className="rag skeleton" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Hyderabadi Dum Biryani" />
           </div>
           <div className="content"> 
           <div className="content">
               <p>
                   {name}
               </p>
           
               <p>
                    {cuisines.join(", ")}
               </p>
           <p>
               Rating: {avgRating}
           </p>
           </div>
           <div className="button" >
               <button>Buy </button>
           </div>
           </div>
       </div>
   );
}

export default Cards;