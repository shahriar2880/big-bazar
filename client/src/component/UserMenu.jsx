import React from 'react'
import { useSelector } from 'react-redux'
import Divider from './Divider'

const UserMenu = () => {
    const user = useSelector((state)=> state.user)
    console.log(user)
  return (
    <div className='bg-white p-4 rounded shadow-lg'>
      <div className='font-semibold'>My Account</div>
      <div className='text-sm'>{user.name || user.mobile}</div>
      <Divider/>

    </div>
  )
}

export default UserMenu
