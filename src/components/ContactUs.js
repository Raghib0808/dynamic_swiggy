import { useEffect, useState } from "react";
import Easy from "./Easy.js";

const ContactUs = () => {
    const [round, Setround] = useState([]);
    const [f, setf] = useState(0);
    const [si,setsi]=useState(window.innerWidth);
    const itemWidth = Math.floor(si/164); // Assuming each item is 100px wide (you might need to adjust this)
    
    useEffect(() => {
        setsi(window.innerWidth)
        fetchData();
        console.log("called");
        
    }, [window.innerWidth]);
    
    
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        Setround(json.data.cards[0].card.card.imageGridCards.info);
    };
    
    const left = () => {
        if(f==0)return false
        setf(f-164);
    };
    
    const right = () => {
        if((round.length-itemWidth)*164<=f)return false
        setf(f+164);
    };
    console.log(f);
    console.log((round.length-itemWidth)*170);
    
    
    return (
        <div className="easy_whole">
            <div className="easyf">
                <h1>What's on your mind?</h1>
                <div className="toggle">
                    <button onClick={left}>⬅️</button>
                    <button onClick={right}>➡️</button>
                </div>
            </div>
            <div className="akg">
                {round.map((restraunt, index) => (
                    <Easy key={index} props={restraunt} x={f} />
                ))}
            </div>
        </div>
    );
};

export default ContactUs;
