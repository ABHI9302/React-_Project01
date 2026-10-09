import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-[90vh] flex justify-between  text-[#2E186A] gap-10'>
            <section
                className=' w-[40%] flex flex-col justify-center gap-7'
            >
                <h2 className='font-bold text-6xl'>
                    Contact form
                </h2>
                <p className=' font-light text-xl w-[90%] text-justify'>
                    The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.
                </p>

            </section>

            <section className='w-[50%] flex justify-center '
                style={{ alignItems: "center" }}>
                <form className='w-full h-fit flex flex-col gap-5 text-gray-500  '
                >
                    <section className='flex  flex-col gap-3'>
                        <label for="Name">Name</label>
                        <input type="text" name="Name" id="Name" placeholder='Your Name'
                            className=' w-[90%] py-3 ps-2 text-lg bg-gray-100'
                        />
                    </section>
                    <section className='flex  flex-col gap-3'>
                        <label for="Email">Email</label>
                        <input type="email" name="Email" id="Email" placeholder='Your Email'
                            className=' w-[90%] py-3 ps-2 text-lg bg-gray-100'
                        />
                    </section>
                    <section className='flex  flex-col gap-3'>
                        <label for="message">message</label>
                        <textarea rows={8} cols={10} className=' w-[90%] bg-gray-100 p-3' placeholder='Your message' ></textarea>
                    </section>
                    <section className=' w-[90%] flex justify-end'>
                        <button className='px-8 py-4 bg-[#2E186A] text-white font-bold  hover:bg-amber-500 w-[35%]'  >Submit</button>
                    </section>
                </form>
            </section>
        </section>
  )
}

export default Contact