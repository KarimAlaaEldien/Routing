import React from 'react'
import catchErr from '../../images/404-error.jpg'
export default function CatchError() {
  return (
    <>
    <div className='h-screen flex justify-center items-center py-32 '>
        <div className='w-1/2 md:w-1/3 mx-auto '>
            <img src={catchErr} className='w-full' alt="page not found" />
        </div>
    </div>
    </>
  )
}
