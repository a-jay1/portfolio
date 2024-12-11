import React from 'react';
import data from '../../data/info.json';
import Image from 'next/image';
import profileImg from '../../../public/assets/profile-1.png';
import Button from '../ui/Button';

const ProfileComponent = ({theme}) => {

  const { profile } = data;

  return (
    <div className='flex flex-col justify-center items-center'>
      <Image alt='profile' className='bg-slate-950 rounded-full' src={`${process.env.NEXT_PUBLIC_ASSETS_URL}profile.png`} width={180} height={180} />
      <p className={`font-normal mt-4 text-txt-dark text-base`}>{profile.hey}</p>
      <h1 className={`font-bold text-txt-dark text-xl`}>{profile.name}</h1>
      <h2 className={`font-medium text-base leading-[52px] text-txt-dark`}>{profile.role}</h2>
      <p className={`font-light text-center text-xs leading-4 text-txt-dark`}>{profile.description}</p>
      <div className='flex gap-6 justify-around m-6'>
        <Button classname='bg-[#24272C] btn py-1' txt={profile.btn1.value} link={profile.btn1.link}/>
        <Button classname='bg-[#24272C] btn py-1' txt={profile.btn2.value} link={profile.btn1.link}/>
      </div>
    </div>
  )
}

export default ProfileComponent