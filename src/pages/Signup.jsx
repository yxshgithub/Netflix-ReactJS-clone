import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Loader from '../pages/Loading'

const Signup = () => {
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')

  // eslint-disable-next-line
  const {user , signUp} = UserAuth()

  const navigate = useNavigate()

  // eslint-disable-next-line
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await signUp(email,password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    <div className="w-full h-screen ">
      <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/c18df626-e6fc-4dbb-818a-55d299b11842/IN-en-20220606-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt="netflix signup background" />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[400px] h-[500px] mx-auto  bg-black/70 text-white ">
          <div className="max-w-[310px] mx-auto py-16">
            <h1 className='text-3xl font-bold'>Sign up</h1>
            <form onSubmit={handleSubmit} className = " w-full flex flex-col py-4 ">
              <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' className ='p-4 my-2 bg-gray-700 rounded' type="email" name="Email ID " autoComplete='email' />
              
              <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' className ='p-4 my-2 bg-gray-700 rounded' type="password" name="Password" autoComplete='current-password' />
              <button onClick={Loader} className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up!</button>
            </form>
            <div className='flex justify-between item-center text-sm text-gray-700'>
            <p><input type="checkbox" className = "mr-2"   id="" />Remeber me</p>
            <p>Need Help?</p>
            </div>
            <p className='py-6'> <span className='text-grey-500'>Already Subscribed to neflix? </span> <Link to='/login'>Sign-in</Link>  </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup