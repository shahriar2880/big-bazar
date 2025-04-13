import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.user)
  console.log("user from store", user)
  return (
    <div>
      {/**----profile upload and display image---*/}
      <div className='w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm'>
            {
                user.avatar ? (
                    <img 
                      alt={user.name}
                      src={user.avatar}
                      className='w-full h-full'
                    />
                ) : (
                    <FaRegUserCircle size={65}/>
                )
            }
        </div>
    </div>
  )
}

export default Profile
