'use client';

import Button from '../../components/ui/Button';
import OrDivider from '../../components/ui/OrDivider';
import Image from 'next/image';
import { useState } from 'react';
import data from '../../app/data/checkIn.json';
import { twMerge } from 'tailwind-merge';
import LoginBanner from '@/components/ui/LoginBanner';
import TextField from '@/components/ui/TextField';

export default function Page() {
  const [activeButton, setActiveButton] = useState('user');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="md:flex">
        <LoginBanner />

        <div className="bg-white-50 bg-cover md:pl-[42px] md:w-full">
            <div className={twMerge(`md:hidden`)}>
                <div className="flex gap-7 px-5 py-4 items-center">
                    <Image src={'assets/search.svg'} alt="Icon" height={18} width={16} />

                    <p className="text-base font-medium">Login</p>
                </div>
                <div className="border-b border-black opacity-15"></div>
            </div>
          <div className="px-5 pt-5">
            <div>
              <p className="font-semibold text-lg mt:pt-[82px]">Login</p>
            </div>

            <div className="border mt-14 border-black-900 flex p-1 rounded-lg">
              {data?.button?.map((item, key) => {
                return (
                  <button
                    key={key}
                    onClick={() => handleButtonClick(item.onclick)}
                    className={`px-4 py-2 w-full rounded-md ${activeButton === item.onclick ? 'bg-black-50 text-white-50' : ''}`}
                  >
                    <p className="font-normal text-sm">{item.label}</p>
                  </button>
                );
              })}
            </div>

            {data?.login?.map((item, key) => {
              return (
                <TextField
                  key={key}
                  label={item.label}
                  placeholder={item.placeholder}
                  type={item.type}
                  required={item.required}
                />
              );
            })}

            <p className="font-normal text-xs pt-3">Forgot password?</p>

            <Button variant="orange" btnText="Password" classNames="w-full my-5 border-black-50" />

            <Button
              noFill={true}
              btnText="Continue with google"
              imageSrc="/assets/google.svg"
              classNames="border w-full border-black-50"
            />

            <OrDivider className="" />

            <p className="py-3 text-black-100">
              Not a member?<a className="pl-1 underline">sign up</a>
            </p>

            <Button noFill={true} btnText="Create your account" classNames="border w-full border-black-50" />
          </div>
        </div>
      </div>
    </>
  );
}