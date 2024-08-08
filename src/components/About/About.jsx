import React from 'react'

export default function About() {
  return (
    <>
      <section className='bg-tial-400 pt-32 pb-5'>
        <div className='text-center' >
          <h2 className='text-white text-3xl md:text-4xl font-bold mb-2'>ABOUT COMPONENT </h2>
          <div className='w-56 flex justify-center items-center mx-auto mb-4'>
            <div className='h-1 w-20 bg-white'></div>
            <i className="fa-solid fa-star text-white mx-4"></i>
            <div className='h-1 w-20 bg-white'></div>
          </div>
        </div>
        <div className='myContainer py-4'>
          <div className='cards text-white p-4'>
            <div className='md:w-1/2 ps-11 pe-5'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
            </div>
            <div className='md:w-1/2 ps-11 pe-5'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
