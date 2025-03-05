import React, { useState, useEffect } from 'react'
import { useScreenWidth } from '../hooks/useScreenWidth'


export const CountdownCard = ({ label, value }) => {

    const width = useScreenWidth()

    return (
        <div className="flex flex-col items-center">

            <div className={`bg-[#2c2c44] rounded-lg ${width < 400 ? 'py-2 px-4 text-2xl' : width < 560 ? 'py-3 px-6 text-3xl' : 'py-4 px-8 text-5xl'} font-bold text-[#fa5d83] mb-2 shadow-lg`}>
                {value < 10 ? '0' + value : value}
            </div>
            <p className="text-[#5f5c78] uppercase text-sm font-extrabold">{label}</p>
        </div>
    )
}
