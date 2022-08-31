import React from 'react'
import { CartItems } from '../components/CartItems'
import { Form } from '../components/Form'
import { PaymentMethod } from '../components/PaymentMethod';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RiTruckLine,RiArrowLeftLine} from 'react-icons/ri'

export const Cart = ({userData,setUserData}) => {
  return (
    <section>
      <div className='flex justify-between px-6 pb-8 pt-10'>
        <p className='text-lg'>Shipping and Payment</p>
        <div className='flex gap-4 items-center'>
          <span className='border-2 border-green-300 rounded-full p-1.5'>
            <AiOutlineShoppingCart size={'1.2rem'} className='m-auto'/> 
          </span> 
           <div className='text-gray-800  w-[80px] h-[2px] bg-gray-200'></div> 
          <span className='border-2 border-green-300 bg-green-300 text-white rounded-full p-1.5'>
            <RiTruckLine size={'1.2rem'}/> </span>
        </div>
      </div>
      <div className='flex p-2 gap-4'>
        <Form userData={userData} setUserData={setUserData}/>
        <PaymentMethod/>
        <CartItems/>
      </div>
      <div className='flex justify-between px-6 pb-8 pt-10'>
        <button className='flex gap-4 items-center text-gray-700'>
          <RiArrowLeftLine size={'1.2rem'} /><span> Back</span>
        </button>
        <div className='flex gap-4 m-4 p-2'>
          <button className='py-2 px-6 rounded-full border border-gray-600'>Continue Shopping</button>
          <button className='py-2 px-6 rounded-full bg-green-300 text-white'>Proceed To Payment</button>           
        </div>
      </div>
    </section>
  )
}
