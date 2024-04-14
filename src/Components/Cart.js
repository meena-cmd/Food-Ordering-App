import React from "react"
import ItemList from "./ItemList"
import {useDispatch, useSelector} from "react-redux"
import { clearCart } from "../utils/cartSlice"
const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearItem=()=>{
        dispatch(clearCart())
    }
     return (
        <div className="text-center m-4 p-4 font-bold text-xl">
            <h1>Cart</h1>
            <button className="rounded-md bg-blue-200 font-normal my-5" onClick={handleClearItem}><h2>clear</h2></button>
          <div className="font-medium">{cartItems.length === 0 && (<h1>Cart is Empty! Add items to the Cart</h1>)}</div>
            <div className="w-6/12 m-auto"><ItemList items={cartItems}/></div>
        </div>
     )
}
export default Cart