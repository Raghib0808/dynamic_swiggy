import { useEffect } from "react";
const Res_card=({prop})=>{

    useEffect(() => {
         fetchData();
        console.log("called");
        
    }, []);
    
    console.log(prop.avgRating);
    
    
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
    };

    return(
            <div className="Res_card">
                    <p>⭐ {prop.avgRating} ({prop.totalRatingsString})   {prop.costForTwoMessage}</p>
                    <p>Rs. {parseInt(prop.feeDetails.amount)/100}</p>
                    <div className="ek">

                    <div className="line">
                        <div className="gola"></div>
                        <div className="arbok"></div>
                        <div className="gola"></div>
                    </div>

                    <div className="outlet">
                            <span>Outlet: {prop.locality}</span>
                            <span>Delivery Time: {prop.sla.maxDeliveryTime}min</span>
                    </div>
                    </div>
            </div>
    )
}

export default Res_card;