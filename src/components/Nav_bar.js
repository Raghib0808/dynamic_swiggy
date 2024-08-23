import { Link } from "react-router-dom";
import onlineStatus from "../Utility/onlineStatus";
import onlineStatus from "../Utility/onlineStatus";
import { useContext } from "react";
import UserContext from "../Utility/UserContext";
import { useSelector } from "react-redux";

const Nav_bar=()=>{
    // console.log("gadbad");
     const net=onlineStatus();
    //  const Grocery
     const {loggedInUser}=useContext(UserContext);
     console.log(loggedInUser);


// subscribing to the store******
     const cartItems=useSelector((store)=>store.cart.items)
     console.log(cartItems);
     
     
    return(




      <div className="whole">
            <div className="photo">
               <img src="data:image/png;base64,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" alt=""/>
            </div>
             <ul className="list">
              
               <li className="li">
                        <Link  className="ii" to={"/"}>Online Status:{net?"🟢":"🔴"}</Link>
                        </li>
                      <li className="li">
                        <Link  className="ii" to={"/"}>Home</Link>
                        </li>
                      <li className="li">
                        <Link to="/food" className="ii">Food</Link>
                      </li>
                      <li className="li">
                       <Link className="ii" to="/about">About Us</Link>
                        </li>
                      <li className="li">
                        <Link to="/contact" className="ii">Contact Us</Link> 
                        </li>
                        <li className="li">
                          <Link to="/profile" className="ii">Profile</Link>
                        </li>
                        <li className="li">
                          <Link to="/grocery" className="ii">Grocery</Link>
                        </li>
                        <li className="li">
                          <Link to="/cart" className="ii">Cart ({cartItems.length})</Link>
                        </li>
            </ul>
            <div className="space"></div>
      </div>
    )
  }

  export default Nav_bar