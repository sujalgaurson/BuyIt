import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
        <div className='flex-col flex sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                "BuyIt is your go-to e-commerce brand for high-quality products at the best prices. From fashion to electronics, home essentials to trendy accessories, we bring you the latest collections and top deals. Shop with confidence, enjoy fast delivery, and experience a seamless shopping journey—all at BuyIt!"
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMAPANY</p>
                <ul className='flex flex-col text-gray-600 gap-1'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col text-gray-600 gap-1'>
                    <li>8368751072</li>
                    <li>customer@buyit.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ buyit.com - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
