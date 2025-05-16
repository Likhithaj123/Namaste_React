import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";



const Cart = () => {
   const cartItems = useSelector((store) => store.cart.items);
    
   const dispatch = useDispatch();
 
    const handleClearCart = () => {
        dispatch(clearCart());
    }   

    return (
     <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex flex-wrap justify-center w-6/12 m-auto">
            {cartItems.length === 0 ? (
                <h1 className="text-2xl font-bold">Your Cart is Empty. Add Items to the Cart🛒</h1>
            ) : (
                <h1 className="text-2xl font-bold">Your Cart has {cartItems.length} items</h1>
            )}

            <button className="p-2 bg-black shadow-lg text-white mx-16 rounded-lg cursor-pointer">Checkout</button>
            <button className="p-2 bg-black shadow-lg text-white mx-16 rounded-lg cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            <ItemList items= {cartItems}/>
        </div>
    </div>

    );
};

export default Cart;