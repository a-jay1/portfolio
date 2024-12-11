"use client";

import About from '@/components/about';
import Navbar from '@/components/Navbar'
import ProfileComponent from '@/components/Profile';
import ProjectTab from '@/components/ProjectTab';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {

  const theme = useSelector((state) => state.theme.value);

  return (
    <div className='bg-#000'>
      <div className='mt-5 mx-2 bg-[#192A46] rounded-3xl'>
        <Navbar theme={theme}/>
        <ProfileComponent theme={theme}/>
        <About theme={theme}/>
        <ProjectTab />
      </div>
    </div>
  )
}

export default Profile;