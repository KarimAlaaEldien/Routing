import React from 'react'

export default function Footer() {
  return ( 
    <>
    <footer className=' bg-tial-800 py-12 '>
    <div className='footer  mx-auto p-5'>
        <div className="cards text-center text-white p-3">

        <div className="card p-2">
            <h3 className='text-3xl font-semibold mb-1'>LOCATION</h3>
            <p className='mb-2'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className='card p-2'>
            <h3 className='text-3xl font-semibold mb-1'>AROUND THE WEB</h3>
            <div className='icons'>
            <span className="fa-stack" >
                <i className="fa-regular fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-facebook fa-stack-1x"></i>
            </span>
            <span className="fa-stack" >
                <i className="fa-regular fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-twitter fa-stack-1x"></i>
            </span>
            <span className="fa-stack" >
                <i className="fa-regular fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-linkedin-in fa-stack-1x"></i>
            </span>
            <span className="fa-stack">
                <i className="fa-regular fa-circle fa-stack-2x"></i>
                <i className="fa-solid fa-globe fa-stack-1x"></i>
            </span>
            </div>
        </div>
        <div className='card p-2'>
            <h3 className='text-3xl font-semibold mb-1'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div>
    </div>
    </footer>
    </>
    
  )
}
