import React from 'react'
import Settings from '../../../public/assets/settings.svg'
import MenuIcon from '../../../public/assets/menu.svg';
import menu from '../../data/info.json'
import { useDispatch } from 'react-redux';
import { setTheme } from '@/store/theme';

const Navbar = ({theme}) => {

  const dispatch = useDispatch();

  const {headerMenu} = menu;

  const headerList = headerMenu.map((item) => {
    <li><a className={`text-txt-dark`} href={item.link}>{item.name}</a></li>
  })

  const setMode = () => {
    let val = (theme === 'dark'? 'light' : 'dark');
    dispatch(setTheme(val));
  }

  return (
    <>
      <div className='flex justify-between p-3'>
        <div className='h-11'>
          <Settings className='' onClick={() => setMode() }/>
        </div>
        <div className={`bg-violet-dark-100 w-8 h-8 p-2 rounded-full flex justify-center`}>
          <MenuIcon className='w-[20px] h-[16px]'/>
        </div>
      </div>
      <div className='bg-white'>
          <ul>{headerList}</ul>
      </div>
    </>
  )
}

export default Navbar;