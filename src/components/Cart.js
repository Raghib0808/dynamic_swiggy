import { useSelector } from "react-redux"
import Food from "./Food_items"
const Cart=()=>{
        const cartItems=useSelector((store)=>store.cart.items)

        
    return(
            <div className="work">
                 
                  <Food item={cartItems} inc={1}/>

            </div>
    )
}

export default Cart