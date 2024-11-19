import React from 'react';
import data from '../../data/info.json';
import Image from 'next/image';
import profileImg from '../../../public/assets/profile-1.png';
import Button from '../ui';

const ProfileComponent = () => {

    const { profile } = data;
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <Image alt='profile' className='bg-slate-950 rounded-full' src={profileImg} width={180} height={180} />
        <p className='font-normal mt-4 text-base'>{profile.hey}</p>
        <h1 className='font-bold text-xl'>{profile.name}</h1>
        <h2 className='font-medium text-base leading-[52px]'>{profile.role}</h2>
        <p className='font-light text-xs leading-4'>{profile.description}</p>
        <div className='flex justify-around'>
            <Button btnText={profile.btn1}/>
            <Button btnText={profile.btn2}/>
        </div>
    </div>
  ) 
}

export default ProfileComponent