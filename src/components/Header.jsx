import React from 'react'

export const Header = ({items}) => {
    return (
        <div className='h-24 bg-slate-900 text-white w-full flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold'>COST COUNTER</h1>
            <p className='font-mono text-lg'>{items} items</p>
        </div>
    )
}
