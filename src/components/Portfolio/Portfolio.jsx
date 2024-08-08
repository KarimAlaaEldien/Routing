import React, { useState } from 'react';
import imgHome from '../../images/port1.png';
import imgCake from '../../images/port2.png';
import imgTent from '../../images/port3.png';

export default function Portfolio() {
    const images = [imgHome, imgCake, imgTent, imgHome, imgCake, imgTent];
    const [isShow, setIsShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    function layerIsShow(index) {
        setCurrentIndex(index);
        setIsShow(true);
    }

    function closeLayer() {
        setIsShow(false);
        setCurrentIndex(null);
    }

    return (
        <section className='pt-32 pb-5'>
            <div className='text-center'>
                <h2 className='text-tial-800 text-3xl md:text-4xl font-bold mb-2 uppercase'>Portfolio Component</h2>
                <div className='w-56 flex justify-center items-center mx-auto mb-4'>
                    <div className='h-1 w-20 bg-tial-800'></div>
                    <i className="fa-solid fa-star text-tial-800 mx-4"></i>
                    <div className='h-1 w-20 bg-tial-800'></div>
                </div>
            </div>
            <div className='myContainer'>
                <div className='cards'>
                    {images.map((ele, index) => (
                        <div className='card p-4 cursor-pointer' onClick={() => layerIsShow(index)} key={index}>
                            <div className='relative rounded-lg overflow-hidden'>
                                <img src={ele} className='w-full' alt="Portfolio" />
                                <div className='absolute top-0 right-0 left-0 bottom-0 bg-tial-400 flex justify-center items-center opacity-0 hover:opacity-95 transition-opacity duration-700'>
                                    <i className="fa-solid fa-plus text-white text-8xl"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isShow && currentIndex !== null && (
                <div className='fixed top-0 left-0 right-0 bottom-0 bg-blue-300 bg-opacity-40 z-10 h-full flex justify-center items-center'>
                    <img src={images[currentIndex]} className='w-2/3 md:w-1/2' alt="Current Portfolio" />
                    <button onClick={closeLayer} className='absolute top-3 right-3'>
                        <i className="fa-regular fa-circle-xmark text-xl"></i>
                    </button>
                </div>
            )}
        </section>
    );
}