import React, { useRef } from 'react'

export const Formelements = ({addItem}) => {
    const nameElemeng = useRef(null);
    const quantityElement = useRef(null)
    const priceElement = useRef(null)
    const handelOnSubmit = (event) => {
        event.preventDefault();
        const name = nameElemeng.current.value;
        const quantity = Number(quantityElement.current.value) ;
        const price =Number(priceElement.current.value);
        // console.log(typeof quantity);
        // console.log(typeof price);
        
        
        // console.log(name, quantity, price);
        addItem(name, quantity, price);
        nameElemeng.current.value = "";
        quantityElement.current.value = "";
        priceElement.current.value = "";
    }


    return (
        <div>
            <form className='bg-slate-900 w-full h-auto py-4 flex flex-wrap items-center justify-center gap-4' onSubmit={handelOnSubmit}>
                <input ref={nameElemeng} className='h-10 rounded-lg px-4 border-2 border-slate-500 outline-none' type="text" name="name" id="name" placeholder='Name' />
                <input ref={quantityElement} className='h-10 rounded-lg px-4 border-2 border-slate-500 outline-none' type="number" name="quantity" id="quantity" placeholder='Pieces' />
                <input ref={priceElement} className='h-10 rounded-lg px-4 border-2 border-slate-500 outline-none' type="number" name="price" id="price" placeholder='Price' />
                <button className='bg-yellow-600 text-white px-6 rounded-md h-10 hover:bg-yellow-500' type="submit">Add</button>
            </form>
        </div>
    )
}
