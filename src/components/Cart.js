import { useDispatch, useSelector } from "react-redux"
import Food from "./Food_items"
import { clearCart } from "../Utility/cartSlice"

const Cart=()=>{
        const cartItems=useSelector((store)=>store.cart.items)
        const dispatch=useDispatch()
        const clear=()=>{
                dispatch(clearCart())
        }
        
    return(
           
            <div className="work">
                <button onClick={clear}>Clear Cart</button>
                  <Food  item={cartItems} inc={1}/>

            </div>
            
    )
}

export default Cart     