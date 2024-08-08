import React from 'react'

export default function Contact() {
    return (
        <>
            <section className='pt-32 pb-5'>
                <div className='text-center'>
                    <h2 className='text-tial-800 text-3xl md:text-4xl font-bold mb-2'>CONTACT SECTION</h2>
                    <div className='w-56 flex justify-center items-center mx-auto mb-4'>
                        <div className='h-1 w-20 bg-tial-800'></div>
                        <i className="fa-solid fa-star text-tial-800 mx-4"></i>
                        <div className='h-1 w-20 bg-tial-800'></div>
                    </div>
                </div>
                <form className="md:w-1/2 mx-auto p-4 md">
                    <div className="mb-5">
                        <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="text" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userName" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="userAge" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="number" id="userAge" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='userAge' required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userEmail" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userPassword" required />
                    </div>
                    <button className="text-white bg-tial-400 focus:ring-4 focus:outline-none  rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center mb-4 cursor-pointer"> send Message </button>
                </form>
            </section>
        </>
    )
}
