import React from 'react'

const Prize = () => {
    return (
        <div className="prize-main h-[40%] flex justify-center mb-[3rem] ">
            <canvas id="fire-works"></canvas>
            <div className='h-full w-[50%] text-white flex  flex-col items-center prize-inner rounded-tl-[40px] rounded-br-[40px] pt-[2rem]'>
                <div className="prize-Title  sponsor-main-title gfg-gradient">
                    <span>Exciting Prizes ahead!!</span>
                </div>
                <div className='flex justify-center items-center h-[100%] flex-col'>
                    <span className='text-[20px] font-800'>
                        Win Prizes Upto
                    </span>
                    <span className='text-[50px] font-black'>5000$</span>
                    <div className="prize-logo w-[150px] mt-[1rem]">
                        <img src="/assets/coin.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prize