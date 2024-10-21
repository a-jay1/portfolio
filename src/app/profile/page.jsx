import Navbar from '@/components/Navbar'
import ProfileComponent from '@/components/Profile';
import React from 'react'

const Profile = () => {
  return (
    <div className='m-2 bg-white'>
      <Navbar />
      <ProfileComponent />
    </div>
  )
}

export default Profile;