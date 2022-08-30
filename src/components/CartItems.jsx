import React from 'react'
import {RiTruckLine} from 'react-icons/ri'

export const CartItems = () => {
  return (
    <section className='grow m-4 py-2 px-4'>
        <div className='flex flex-col gap-y-4'>
            <p className='text-sm text-left m-4'>Your cart</p>
            <div className='flex justify-between text-gray-800'>
                <div className='flex gap-2'>
                    <img src='https://m.media-amazon.com/images/I/71NETfwX2fL._UL1500_.jpg' 
                    alt='white-tshirt' className='border rounded-full object-contain h-12 w-12 m-auto'/>
                    <div className='text-left'>
                        <p className='text-base'>T-shirt</p>
                        <p className='text-sm'>Summer Vibes</p>
                        <p className='text-gray-300 text-xs'>#261311</p>
                    </div>
                    
                </div>
                <p className='text-sm self-center'>$89.99</p>
            </div>
            {/* 2nd item */}
            <div className='flex justify-between text-gray-800'>
                <div className='flex gap-2'>
                    <img src='https://m.media-amazon.com/images/I/71hTxMBuZ6L._UY879_.jpg' 
                    alt='white-tshirt' className='border rounded-full object-contain h-12 w-12 m-auto'/>
                    <div className='text-left'>
                        <p className='text-base'>T-shirt</p>
                        <p className='text-sm'>Summer Vibes</p>
                        <p className='text-gray-300 text-xs'>#261311</p>
                    </div>
                    
                </div>
                <p className='text-sm self-center'>$69.99</p>
            </div>
            <div className='bg-gray-100 py-2 px-6 border rounded-full m-auto'>
                <span className='text-gray-500 mr-6'>Total cost</span> 
                <span className='text-gray-800'>$159,98</span>
            </div>

            <p className='flex items-center text-gray-600 text-left m-4 justify-center text-sm'>
                <RiTruckLine size={'1.2rem'} className='' />
               <span className='px-6'> You are <span className='text-gray-800'> $30,02 </span> away <br/> from free shipping!</span>
            </p>
        </div>
    </section>
  )
}
