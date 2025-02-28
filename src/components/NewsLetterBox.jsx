import React from 'react'

const NewsLetterBox = () => {
const onSubmitHandler = (event)=>{
    event.preventDefault();
}

  return (
    <div className='text-center'>
      <p className='text-2xl text-gray-800 font-medium '>Subscribe now and get 20% off</p>
      <p className='mt-3 text-gray-400'>
      "Subscribe now for exclusive updates, special offers, and the latest trends delivered straight to your inbox!"
      </p>
      <form onSubmit={onSubmitHandler} className='flex w-full sm:w-1/2 items-center gap-3 mx-auto my-6 border pl-3 '>
        <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
