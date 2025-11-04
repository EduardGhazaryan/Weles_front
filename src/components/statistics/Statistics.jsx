"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

const Statistics = () => {
    const {t} = useTranslation()
    return (
        <div className='container' id='statistics'>
            <div className='py-[100px] flex gap-[30px] justify-between lg:flex-nowrap flex-wrap'>
                <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl lg:w-[22%] sm:w-[45%] w-[100%]'>
                    <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+10000</p>
                    <p className='text-[28px]'>{t("statistics.projects")}</p>
                </div>
                <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl lg:w-[22%] sm:w-[45%] w-[100%]'>
                    <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+5</p>
                    <p className='text-[28px]'>{t("statistics.branches")}</p>
                </div>
                <div className='flex flex-col items-center gap-2 shadow-[0px_0px_12px_#d1d1d1] p-[50px] rounded-2xl lg:w-[22%] sm:w-[45%] w-[100%]'>
                    <p className='text-[50px] text-[var(--mainGreen)] font-bold'>+100</p>
                    <p className='text-[28px]'>{t("statistics.employees")}</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics