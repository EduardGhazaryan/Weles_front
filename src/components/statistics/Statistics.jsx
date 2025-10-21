import React from 'react'

const Statistics = () => {
    return (
        <div className='container'>
            <div className='py-[100px] flex gap-[30px] justify-between lg:flex-nowrap flex-wrap'>
                <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl lg:w-[22%] sm:w-[45%] w-[100%]'>
                    <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+459</p>
                    <p className='text-[28px]'>Projects</p>
                </div>
                <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl lg:w-[22%] sm:w-[45%] w-[100%]'>
                    <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+241</p>
                    <p className='text-[28px]'>Clients</p>
                </div>
                <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl lg:w-[22%] sm:w-[45%] w-[100%]'>
                    <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+56</p>
                    <p className='text-[28px]'>Countries</p>
                </div>
                <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl lg:w-[22%] sm:w-[45%] w-[100%]'>
                    <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+15</p>
                    <p className='text-[28px]'>Team</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics