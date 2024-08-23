import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utility/cartSlice";

const Food = ({ item, inc }) => {
    const [ad, setAd] = useState([]);

    const dispatch = useDispatch();

    // Update the `ad` array when the `item` or `inc` props change
    useEffect(() => {
        setAd(Array(item.length).fill("ADD"));
    }, [item, inc]);

    const handleClick = (index, item) => {
        const newAd = [...ad];
        if (newAd[index] === "ADD") {
            newAd[index] = "ADDED";
            handleAddItem(item);
        } else {
            newAd[index] = "ADD";
        }

        // Update the state
        setAd(newAd);
    };

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    if(item.length==0)return(<h1>looks the cart is empty</h1> )

    return (
        <div className="gap">
            {item.map((cat, index) => (
                <div key={index} className="right">
                    <div className="cat">
                        <p>{cat.card.info.name}</p>
                        <p>₹{cat.card.info.price / 100}</p>
                        <span>{cat.card.info.description}</span>
                    </div>

                    <div className="cat-img">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cat.card.info.imageId}`}
                            alt="Food Image Not available"
                        />
                        <button onClick={() => handleClick(index, cat)} className="added">
                            {ad[index]}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Food;
