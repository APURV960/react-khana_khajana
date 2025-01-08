import React from 'react';
import logo from "../assets/shann.jpg";
import Darktheme from './darktheme';


// Navbar
const Navbar = () => {
    return (
        <>
            <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container mx-auto flex justify-center items-center p-4">
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <a href="#" className='flex items-center gap-2 text-2xl sm:text-2xl font-bold'>
                                <img src={logo} alt="logo" className="h-12 rounded-lg" />Khana Khjana
                            </a>
                        </div>
                        <div className='flex justify-between items-center gap-3'>
                            <div>
                                <Darktheme />
                            </div>
                            <div>
                                <ul className="hidden sm:flex gap-4">
                                    <li className="inline-block px-4 py-4 hover:text-primary"><a href="#">Home</a></li>
                                    <li className="inline-block px-4 py-4 hover:text-primary"><a href="#">About</a></li>
                                    <li className="inline-block px-4 py-4 hover:text-primary"><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 cursor-pointer'>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
