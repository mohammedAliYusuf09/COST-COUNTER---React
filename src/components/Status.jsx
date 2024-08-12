import React from 'react'

export const Status = ({totalQuantity, totalPriceofAll}) => {

    
    return (
        <div className='bg-yellow-600 h-40 flex flex-col items-center justify-center'>
           <p className='text-xl font-sans'>Total item {totalQuantity} , Total Price {totalPriceofAll}.</p>
        </div>
    )
}
