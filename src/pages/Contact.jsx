import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'> Our  Store</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suit 350, Washington, </p>
          <p className='text-gray-500'>Tel: 9810773002 <br /> Email: ghanta@gmail.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Careers at Buyit</p>
          <p className='text-gray-500'>Learn more about our team and job openings.</p>
          <button className='px-8 py-4 text-sm border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-400 '>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default Contact
