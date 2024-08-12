import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";


export const Item = ({item, deleteItem, chackedItem}) => {
    const handelDelete = ()=> {
        deleteItem(item.id);
    }
    const handelChackUnchack = () => {
        chackedItem(item.id);
    }
    return (
        <div className={` ${item.productStage ? "bg-yellow-700" : "bg-yellow-500"} w-52 h-36 text-white p-4 font-light relative flex flex-col justify-center items-center cursor-pointer hover:scale-x-105 hover:scale-y-105`} onClick={handelChackUnchack}>
            <p className={`${item.productStage ? "line-through" : "no-underline"}`}>Product : {item.product}</p>
            <p className={`${item.productStage ? "line-through" : "no-underline"}`}>Price : {item.price}</p>
            <p className={`${item.productStage ? "line-through" : "no-underline"}`}>Quantity : {item.quantity}</p>
            <p className={`${item.productStage ? "line-through" : "no-underline"}`}>Total : {item.totalPrice}</p>
            <p className='absolute top-0 right-0 cursor-pointer text-xl hover:text-slate-600' onClick={handelDelete}><FaDeleteLeft /></p>
        </div>
    )
}
