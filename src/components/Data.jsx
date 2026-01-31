import React from 'react'

const Data = () => {
  return (
    <>
    <section className='max-w-285 w-full flex flex-col lg:flex-row justify-between gap-15 lg:gap-0 items-center mx-auto pb-15 lg:pb-48.5 pt-15 lg:pt-8 px-5 xl:px-0' data-aos = "fade-up">
        <div className=''>
            <div className='w-full lg:max-w-125 xl:max-w-145 mb-5 p-7 border border-[#30322E] text-[#FFFFFF] bg-[#191B17] rounded-[22px]'>
               <h3 className='mb-3'>Data-Driven Approach</h3>
               <p>We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.</p>
            </div>
            <div className='w-full lg:max-w-125 xl:max-w-145 mb-5 p-7 border border-[#30322E] text-[#FFFFFF] bg-[#191B17] rounded-[22px]'>
               <h3 className='mb-3'>Data-Driven Approach</h3>
               <p>We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.</p>
            </div>
            <div className='w-full lg:max-w-125 xl:max-w-145 p-7 border border-[#30322E] text-[#FFFFFF] bg-[#191B17] rounded-[22px]'>
               <h3 className='mb-3'>Data-Driven Approach</h3>
               <p>We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.</p>
            </div>
        </div>
        <div>
            <img className='w-full lg:max-w-110  xl:max-w-121.25 sm:h-127.25 object-cover rounded-[22px]' src="./src/assets/png/metting.png" alt="" />
        </div>
    </section>
    </>
  )
}

export default Data