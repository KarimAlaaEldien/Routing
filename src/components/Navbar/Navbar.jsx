import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 bg-tial-800 border-gray-200 dark:bg-gray-900 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-3'}`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/home' className="text-3xl font-semibold text-white">Start Framework</Link>
                <button 
                    onClick={handleToggle} 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden" 
                    aria-controls="navbar-default" 
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`} id="navbar-default">
                    <ul className="font-medium flex justify-center items-center flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
                        <li>
                            <NavLink 
                                to='/about' 
                                className={({isActive})=> isActive?'block bg-tial-400 p-1 rounded':`block p-2 rounded md:bg-transparent text-white md:p-0 `}
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/portfolio' 
                                className={({isActive})=> isActive?'block bg-tial-400 p-1 rounded':`block p-2 rounded md:bg-transparent text-white md:p-0 `}
                            >
                                PORTFOLIO
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/contact' 
                                className={({isActive})=> isActive?'block bg-tial-400 p-1 rounded':`block p-2 rounded md:bg-transparent text-white md:p-0 `}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}