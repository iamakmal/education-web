import React from 'react'

export default function Navbar() {
    return (
        <nav className="bg-transparent w-full mb-2">
            <div className="flex h-16">
                <div className="flex justify-start items-center">
                    <img src="logo.png" alt="Logo" className="h-12 mt-2 ml-2" />
                </div>
                <div className="hidden md:flex space-x-8 mx-auto items-center text-lg">
                    <a href="" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Home</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Programmes</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Events</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">About Us</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Contact Us</a>
                </div>
                <div className="flex ml-auto mt-2 justify-end md:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <a href="" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Home</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Programmes</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Events</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">About Us</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Contact Us</a>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}
