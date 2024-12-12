"use client";

import About from '@/components/about';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
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
        <div className='px-7'>
          <ProfileComponent theme={theme}/>
          <About theme={theme}/>
          <ProjectTab />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Profile;