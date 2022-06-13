import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  // eslint-disable-next-line
  const { user, logOut } = UserAuth()
  // console.log('the user is ' + user.email)
  const navigate = useNavigate()
  // const [user , logOut] = UserAuth();
  // console.log(user)

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>      
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to='/'>
        <h1 className="text-red-600 uppercase text-4xl font-bold cursor-pointer">Netflix</h1>
      </Link>
      {user?.email ? (
      <div>
        <Link to='/account'>
          <button className="text-white pr-6 ">Account</button>
        </Link>
        <button onClick={handleLogOut} className="bg-red-600 text-white px-4 py-2  rounded-[5px] cursor-pointer ">Log Out</button>
      </div>
      ) : (
      <div>
        <Link to='/login'>
          <button className="text-white pr-4 ">Sign in</button>
        </Link>
        <Link to='/signup'>
          <button className="bg-red-600 text-white px-4 py-2  rounded-[5px] cursor-pointer ">Sign Up</button>
        </Link>
      </div>
      )
      }
    </div>
    </>
  );
};

export default Navbar