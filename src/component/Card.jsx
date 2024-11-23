import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";

function Card() {
  return (
    <div className='h-[110px] w-[150px] bg-slate-400 rounded-3xl'>
      <h2 className='text-center text-[1.5rem] font-medium'>12:30</h2>
      <div className='pl-2 pt-4 flex gap-3'><IoSunnyOutline size={32} /><p className='pt-[.2rem]'>Sunny Day</p></div>
    </div>
  )
}

export default Card
