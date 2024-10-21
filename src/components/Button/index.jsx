import React from 'react'

const Button = (props) => {

    const { label } = props;

  return (
    <a className='bg-black rounded-3xl w-24 text-center text-white py-[10px] text-xs gap-6 font-medium' href={label?.split('-')[1]}>{label?.split('-')[0]}</a>
  )
}

export default Button;