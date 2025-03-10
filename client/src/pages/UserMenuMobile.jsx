import React from 'react'
import UserMenu from '../component/UserMenu'
import { IoClose } from 'react-icons/io5'

const UserMenuMobile = () => {
  return (
    <section className='bg-white h-full w-full py-2'>
        <button onClick={()=> window.history.back()} className='text-neutral-800 block w-fit ml-auto'>
            <IoClose size={35} className='hover:text-red-500'/>
        </button>
        <div className='container mx-auto p-3 pb-8'>
            <UserMenu/>
        </div>
    </section>
  )
}

export default UserMenuMobile
