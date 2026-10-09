import React from 'react'

const Function_02 = () => {
  return (
    <section className='w-full h-[90vh] flex  text-[#2E186A] gap-6'>
      <section
        className=' w-1/2 flex flex-col justify-center gap-7'
      >
        <h2 className='font-bold text-6xl'>
          Ready made <br /> sections
        </h2>
        <p className=' font-light text-xl w-[90%] text-justify'>
          Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.
        </p>

      </section>

      <section className='w-1/2 flex justify-center'>
        <img src="https://landy-web.netlify.app/img/svg/product-launch.svg" />
      </section>
    </section>
  )
}

export default Function_02