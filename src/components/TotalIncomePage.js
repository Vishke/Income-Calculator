/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const TotalIncomePage = ({ income, incomeChangeHandler, incomeInterval, incomeIntervalChangeHandler, onChangeHandler, value, calculateHandler }) => {
    return (
        <div className="flex flex-col h-[80%] justify-between py-5">
            <h5 className="text-[2rem]">What is your total inocme?</h5>
            <div className="relative">
                <input
                    type="text"
                    id="floating_helper"
                    aria-describedby="floating_helper_text"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 dark:text-dray dark:border-gray-600 dark:focus:border-pink focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={income}
                    onChange={incomeChangeHandler}
                />
                <label
                    htmlFor="floating_helper"
                    className="absolute text-sm text-gray dark:text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-pink peer-focus:dark:text-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                    Total Inocme
                </label>
            </div>
            <label htmlFor="underline_select" className="sr-only">
                Choose your income
            </label>
            <label className="text-gray">Choose your income interval</label>
            <select
                value={incomeInterval}
                onChange={incomeIntervalChangeHandler}
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
                <option value="weekly">Weekly</option>
                <option value="monthly" defaultValue="Monthly">
                    Monthly
                </option>
                <option value="fortnighly">Fortnighly</option>
                <option value="annually">Annually</option>
            </select>
            <div>
                <label className="text-gray">Choose your income type</label>
                <select
                    onChange={onChangeHandler}
                    value={value}
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                    <option value="grossIncome" defaultValue="Gross Income">
                        Gross Income
                    </option>
                    <option value="netIncome">Net Income</option>
                </select>
                <button
                    onClick={calculateHandler}
                    className="w-full bg-gray text-white hover:bg-white hover:text-gray hover:border-4 hover:border-pink mt-5 h-[2rem] rounded-xl transition ease-in-out"
                >
                    Claculate
                </button>
            </div>
        </div>
    );
};

export default TotalIncomePage;
