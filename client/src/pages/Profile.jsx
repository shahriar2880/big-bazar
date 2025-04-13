import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.user)
  return (
    <div>
      profile
    </div>
  )
}

export default Profile
