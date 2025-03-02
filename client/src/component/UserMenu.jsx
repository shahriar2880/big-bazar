import React from 'react'
import { useSelector } from 'react-redux'
import Divider from './Divider'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    const user = useSelector((state)=> state.user)
    console.log(user)
  return (
    <div className='bg-white text-black p-4 rounded shadow-lg'>
      <div className='font-semibold text-xl'>My Account</div>
      <div className='text-sm'>{user.name || user.mobile}</div>
      <Divider/>


    <div className='text-sm grid gap-2'>
        <Link to={""} className='px-2'>My Order</Link>
        <Link to={""} className='px-2'>Save Address</Link>
        <button className='px-2 text-center account'>Log Out</button>
    </div>
    </div>
  )
}

export default UserMenu
