import React from 'react'

const IntroductionSection = () => {
    return (
        <section className='w-full h-[90vh] flex flex-col justify-center gap-10 text-[#2E186A] '
            style={{ alignItems: 'center' }} >

            <h2 className='text-6xl font-bold text-center' >
                Introduce your <br />
                product quickly & <br />
                effectively
            </h2>

            <p className='w-1/2 text-center text-xl font-light '>
                Landy comes with multi-lingual support, all of the content is stored in the JSON files, so that you can manage the texts without having any prior knowledge in developing web applications using React.js.
            </p>
            <button className='px-8 py-4 bg-[#2E186A] text-white font-bold rounded-lg hover:bg-amber-500'  >
                Get Started
            </button>
        </section>
    )
}

export default IntroductionSection