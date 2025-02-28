import React from 'react'
import { useState } from 'react'


const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const onSubmitHandler = (event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 items-center w-[90%] sm:max-w-96 m-auto mt-14 text-gray-700' >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name ' required /> }
      
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email ' required />
      <input type="password " className='w-full px-3 py-2 border border-gray-800' placeholder='Password ' required />
      <div className='w-full justify-between flex text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white px-8 font-light py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
