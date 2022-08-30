import React from 'react'
import { CartItems } from '../components/CartItems'
import { Form } from '../components/Form'
import { PaymentMethod } from '../components/PaymentMethod'

export const Cart = () => {
  return (
    <div>
      <div className='flex p-2 gap-4'>
        <Form/>
        <PaymentMethod/>
        <CartItems/>
      </div>
    </div>
  )
}
