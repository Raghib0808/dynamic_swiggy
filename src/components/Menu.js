import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./category.js";
import Res_card from "./Res_card.js";
const Menu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [item, setItem] = useState(null);
    const { Id } = useParams();
    const[val,setval]=useState(null)


    // usestates for the menu items
    const [showIndex,setShowIndex]=useState(null)
    // props drilling;
    const palkia="palkia"


    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${Id}&catalog_qa=undefined&submitAction=ENTER`);
                const json = await response.json();
                
                const menuItem = json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
                setResInfo(json.data);
                setItem(menuItem);
                // console.log(json.data);
                
                const ch=json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                const show=ch
                console.log(show[0].card.card.title);
                
                setval(ch)
                // console.log(ch);
                
                
                
                console.log(json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
                
                // Handle the item categories after setting the item
                if (menuItem?.categories?.[0] === undefined) {
                    console.log('Category not found');
                } else {
                    setItem(menuItem.categories[0]);
                }

            } catch (error) {
                console.error("Failed to fetch menu data:", error);
            }
        };

        fetchMenu();
    }, [Id]);

    // Conditional rendering to handle loading states and unavailable data
    if (!resInfo) return <h1>Loading...</h1>;
    if (!item) return <h1>Menu not available...</h1>;


    const { name, cuisines, costForTwoMessage,avgRating } = resInfo?.cards?.[2]?.card?.card?.info;
    console.log(resInfo?.cards?.[2]?.card?.card?.info);
    
    return (
        
        <div className="menu">
                <Res_card prop={resInfo?.cards?.[2]?.card?.card?.info}/>
            <h1>{name}</h1>
            <h2>{cuisines?.join(", ")}  - {costForTwoMessage}</h2>
           
               <div className="car"> 

               {
               
                    val.map((cat,index)=>(<Category  data={cat?.card?.card}
                         showIndex={index==showIndex?true:false}
                         setShowIndex={(showIndex)=> showIndex==true?setShowIndex(index):setShowIndex(-1)}
                        palkia={palkia}
                    />))
               }
               </div>

        </div>
    );
};

export default Menu;
