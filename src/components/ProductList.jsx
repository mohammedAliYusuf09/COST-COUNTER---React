import React, { useState } from 'react'
import { Item } from './Item'

export const ProductList = ({ products, deleteItem, chackedItem , setEmpty}) => {
    const [sort, setSort] = useState("input"); // name , low price, heigh price, product status

    let sortList;
    switch (sort) {
        case "input":
            sortList = products;
            break;
        case "low price":
            sortList = products.slice().sort((a, b) => a.price - b.price)
            break;
        case "heigh price":
            sortList = products.slice().sort((a, b) => b.price - a.price)
            break;
        case "product status":
            sortList = products.slice().sort((a, b) => a.productStage - b.productStage)
            break;
    }

    return (
        <div className='bg-slate-900 min-w-80 min-h-96 py-8 relative'>
            {sortList.length <= 0 ?
                <div className='text-3xl text-white flex justify-center items-center'>No item added</div> :
                <div>
                    <div className='flex flex-wrap gap-4 justify-center mx-10 mb-10'>
                        {sortList.map(item => <Item key={Math.random() + item.id} item={item} deleteItem={deleteItem} chackedItem={chackedItem} />)}
                    </div>
                    <div className='flex justify-between items-center'>
                    <button className='ml-10 bg-red-600 text-white px-6 rounded-md h-10 hover:bg-red-500' onClick={setEmpty}>Reset</button>
                        <div className='mr-10'>   
                            <select id="productSelect" onChange={(e) => setSort(e.target.value)}>
                                <option value="input">Sotr By Input</option>
                                <option value="low price">Sotr By Low Price</option>
                                <option value="heigh price">Sotr By Heigh Price</option>
                                <option value="product status">Sort By product Status</option>
                            </select>
                        </div>
                       
                    </div>
                    
                </div>

            }

        </div>
    )
}
