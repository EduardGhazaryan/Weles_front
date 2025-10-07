import React from 'react'

const Statistics = () => {
  return (
    <div className='container flex gap-[30px] py-[100px] justify-between'>
        <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl w-[22%]'>
            <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+459</p>
            <p className='text-[28px]'>Projects</p>
        </div>
        <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl w-[22%]'>
            <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+241</p>
            <p className='text-[28px]'>Clients</p>
        </div>
        <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl w-[22%]'>
            <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+56</p>
            <p className='text-[28px]'>Countries</p>
        </div>
        <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl w-[22%]'>
            <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+15</p>
            <p className='text-[28px]'>Team</p>
        </div>
    </div>
  )
}

export default Statistics