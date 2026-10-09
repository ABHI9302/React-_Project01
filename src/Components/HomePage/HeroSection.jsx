import React from 'react'

const HeroSection = () => {
    return (
        <article className='w-full  h-[88vh] flex '>
            <section className='w-1/2 flex flex-col justify-center align-middle gap-5 '>
                <h1 className=' text-6xl font-bold text-[#2E186A]'>Landing page <br /> template for <br /> developers & <br /> startups
                </h1>

                <p className='text-2xl'>
                    Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.
                </p>
                <section className='flex gap-4'>
                    <button className='px-8 py-4 bg-[#2E186A] text-white font-bold rounded-lg hover:bg-amber-500'  >Explore</button>
                    
                    <button className='px-8 py-4 bg-white text-[#2E186A] font-bold rounded-lg hover:bg-amber-500 border-2 border-gray-200'  >Learn more</button>
                </section>
            </section>
            <section className='w-1/2  flex justify-center align-middle '>
                <img src="https://landy-web.netlify.app/img/svg/developer.svg" alt=""
                    className='w-[80%]'
                />
            </section>
        </article>
    )
}

export default HeroSection