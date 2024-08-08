import React from 'react'
import homeImg from '../../images/avataaars.svg'
export default function Home() {
  return (
    <>
    <section className='pt-32 pb-5  bg-tial-400' >
        <div className='flex justify-center items-center text-white'>
        <div className='myContainer text-center'>
        <div className='w-1/2 mx-auto mb-4 md:w-1/4'>
            <img src={homeImg} className='w-full' alt="Photo of the page owner" />
        </div>
        <div className='text-center mb-4'>
                <h2 className=' text-2xl font-bold mb-2 uppercase md:text-4xl'>Portfolio Component</h2>
                <div className='w-56 flex justify-center items-center mx-auto mb-4'>
                    <div className='h-1 w-20 bg-white'></div>
                    <i className="fa-solid fa-star  mx-4"></i>
                    <div className='h-1 w-20 bg-white'></div>
                </div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            </div>
    </section>
    
    
    </>
    
  )
}
