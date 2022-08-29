import React from 'react';
import {AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai';
import {HiOutlineSearch} from 'react-icons/hi';
import {FaShopware} from 'react-icons/fa'

export const Navbar = () => {
  return (
    <nav>
        <div className="app-container flex justify-between items-center p1">
            <a href="/" className="app-logo flex items-center">
                <FaShopware size='1.5rem' className="mr-1.5"/>
                <span className='text-yellow-500'>E-</span>Shop
            </a>

            <ul className=" flex list-none gap-10 items-center">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>

            <ul className=" flex list-none gap-5 items-center">
                <li>
                    <a href='/' className="flex items-center">
                        <HiOutlineSearch size='1.5rem' />
                    </a>
                </li>

                <li>
                    <a href='/' className="flex items-center">
                        <AiOutlineShoppingCart size='1.5rem' />
                    </a>
                </li>

                <li>
                    <a href='/' className="flex items-center">
                        <AiOutlineUser size='1.5rem' />
                    </a>
                </li>
              
            </ul>
        </div>    
    </nav>
  )
}
