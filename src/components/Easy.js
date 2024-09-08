const Easy=({props,x})=>{
    const imgid=props.imageId
    
    return(
        
            <div className="easy_img" style={{ transform: `translateX(${-x}px)` ,transitionDuration:`330ms`}}>

                           <img className="rag skeleton" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imgid} alt="Hyderabadi Dum Biryani" />


        </div>
    )
}

export default Easy