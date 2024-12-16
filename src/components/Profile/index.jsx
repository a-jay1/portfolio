import React from 'react';
import data from '../../data/info.json';
import Image from 'next/image';
import Button from '../ui/Button';

const ProfileComponent = ({theme}) => {

  const { profile } = data;

  const link = 'https://imgs.search.brave.com/QE8EbSsJLWdRusHckKNcIBacSROBTfof0kYyOEw3c-k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC83My82OS9h/bm9ueW1vdXMtbWFs/ZS1wcm9maWxlLXBp/Y3R1cmUtZW1vdGlv/bi1hdmF0YXItdmVj/dG9yLTE1ODg3MzY5/LmpwZw';

  return (
    <div className='flex profile flex-col justify-center items-center'>
      <Image alt='profile' className='bg-slate-950 rounded-full' src={link} width={180} height={180} />
      <p className={`font-normal mt-4 text-txt-dark text-base`}>{profile.hey}</p>
      <h1 className={`font-bold text-txt-dark text-xl`}>{profile.name}</h1>
      <h2 className={`font-medium text-base leading-[52px] text-txt-dark`} dangerouslySetInnerHTML={{__html:profile.role}}></h2>
      <p className={`font-light text-center text-xs leading-4 text-txt-dark`}>{profile.description}</p>
      <div className='flex gap-6 justify-around m-6'>
        <Button classname='bg-[#24272C] btn py-1' txt={profile.btn1.value} link={profile.btn1.link}/>
        <Button classname='bg-[#24272C] btn py-1' txt={profile.btn2.value} link={profile.btn1.link}/>
      </div>
    </div>
  )
}

export default ProfileComponent