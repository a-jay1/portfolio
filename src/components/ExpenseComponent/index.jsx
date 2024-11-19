import React, { useState } from 'react'
import Button from '../ui';

const track = [
    {
        id: 1,
        name: 'Rent',
        amount: 2000,
        date: new Date('2022-01-01'),
    },
    {
        id: 2,
        name: 'Groceries',
        amount: 500,
        date: new Date('2022-01-02'),
    },
    {
        id: 3,
        name: 'Transportation',
        amount: 1500,
        date: new Date('2022-01-03'),
    }
]

const ExpenseComponent = () => {

    const [value, setValue] = useState(track);

  return (
    <>
        <Button btnText={'Add Expense'}/>
        <div className='border-2 p-4'>
            {value?.map((item, index) => (
                <div key={index} className='flex gap-5'>
                    <input className='w-[100px]' value={item.name}/>
                    <input className='w-[100px]' value={item.amount}/>
                    <input className='w-[150px]' type='date' value={item.date}/>
                    <Button btnText={'Edit'}/>
                    <Button btnText={'Delete'}/>
                </div>
            ))}
        </div>
    </>
  ) 
}

export default ExpenseComponent