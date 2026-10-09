import React from 'react'

const Function_01 = () => {
  return (
 <section className='w-full h-[90vh]  flex flex-row text-[#2E186A] gap-5'>
            <section className='w-1/2 flex justify-center '
                style={{ alignItems: "center" }}
            >
                <img src="https://landy-web.netlify.app/img/svg/graphs.svg" alt="feature_01"
                    className='w-[90%]'
                />
            </section>

            <section className='w-1/2 flex flex-col justify-center  gap-6 p-7'            >
                <h2 className='font-medium text-6xl'>Light, fast & <br /> responsive</h2>

                <p className='font-normal text-xl'>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>

                <section className='w-full p-4 flex gap-10 '>
                    <section className='w-1/2  flex flex-col gap-3'>
                        <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt=""
                            className='w-[25%]'
                        />
                        <p>Why Antd?</p>
                        <p className=' text-[12px]'>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
                    </section>
                    <section className='w-1/2  flex flex-col gap-3'>
                        <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt=""
                            className='w-[25%]'
                        />
                        <p>Why styled-components?</p>
                        <p className=' text-[12px]' >Styled Components gives you total control over your components.</p>
                    </section>
                </section>

            </section>

        </section>
    )
}

export default Function_01