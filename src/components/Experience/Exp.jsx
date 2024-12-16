import React, { useState } from 'react';
import Button from '../ui/Button';
import data from '../../data/info.json';
import brain from '../../../public/assets/brain.png';
import Image from 'next/image';

const ExperienceComponent = () => {

  const [currTab, setCurrTab] = useState(0);
  const {Experience} = data;
  console.log(Experience);

  return (
    <div className='exp'>
      <div className='flex m-5 mt-7 justify-center gap-5'>
        {
          Experience.map((item,index) => (
            <Button classname={`tab-btn ${currTab == index ? 'active': ''}`} txt={item.title} onClick={() => setCurrTab(index)} />
          ))
        }
      </div>
        {
          Experience[currTab].levels.map((item, index) => (
            <div key={index} className='flex'>
              <div className='icon-line relative flex flex-col items-center justify-center'>
                  <div className='p-2 bg-[#2C2F38] z-10 rounded-3xl'>
                    <div className='icon p-1 bg-[#666DDC] rounded-3xl opacity-50'>
                      <Image className='min-w-[18px]' src={brain} alt='img' width={18} height={18}/>
                    </div>
                  </div>
                <div className='line w-[3px] h-full bg-[#363636CC] absolute'>
                  </div>
              </div>
              <div className='card'>
                <h1 dangerouslySetInnerHTML={{__html: item.org}}></h1>
                <h2>{item.duration}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        }
    </div>
  );
};

export default ExperienceComponent;
