/* eslint-disable react/prop-types */
import React from 'react';

const Nav = ({ handleClick, handleBack }) => {
    return (
        <nav className="w-auto flex items-center bg-gradient-to-br from-pink via-yellow-300 to-fuchia">
            <div className="flex items-center justify-start w-full mb-2 bg-gray">
                <div className="container flex items-center justify-evenly mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-12 h-12 mt-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                        />
                    </svg>
                    <h1 className="text-xl ml-5 mt-5 font-bold text-default">Income Tax Calculator</h1>
                </div>
                <div className="hidden space-x-6 md:flex">
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-default rounded-lg group bg-gradient-to-br from-pink via-yellow-300 to-fuchia dark:text-gray dark:hover:text-default focus:outline-none"
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-default bg-gray rounded-md group-hover:bg-opacity-0 group-focus:bg-gradient-to-br from-pink via-yellow-300 to-fuchia">
                            Income Details
                        </span>
                    </button>
                    <button
                        onClick={handleClick}
                        className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-default rounded-lg group bg-gradient-to-br from-pink via-yellow-300 to-fuchia dark:text-gray dark:hover:text-default focus:outline-none"
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-default bg-gray rounded-md group-hover:bg-opacity-0 group-focus:bg-gradient-to-br from-pink via-yellow-300 to-fuchia">
                            Income
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
