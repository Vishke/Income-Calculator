/* eslint-disable react/prop-types */
import React from 'react';

const GrossIncomePage = ({ income, tax, incomeInterval, incomeIntervalChangeHandler, netIncome }) => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex w-[50%] mb-5 justify-between">
                <button className="w-[6rem] h-[4rem] bg-gray text-white mt-5 rounded-xl text-medium" disabled>
                    {netIncome}
                </button>
                <div className="flex items-center w-[50%] justify-between">
                    <p>Your net</p>
                    <select
                        value={incomeInterval}
                        onChange={incomeIntervalChangeHandler}
                        className="w-[8rem] block px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    >
                        <option value="weekly">Weekly</option>
                        <option value="monthly" defaultValue="Monthly">
                            Monthly
                        </option>
                        <option value="fortnighly">Fortnighly</option>
                        <option value="annually">Annually</option>
                    </select>
                    <p>income</p>
                </div>
            </div>
            <table className="table-auto border-collapse border-gray w-[80%] h-[40%] bg-default rounded-xl">
                <thead>
                    <tr>
                        <th className="border border-gray">Frequency</th>
                        <th className="border border-gray">Gross Income</th>
                        <th className="border border-gray">Tax</th>
                        <th className="border border-gray">Net Income</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray">Weekly</td>
                        <td className="border border-gray">{income}</td>
                        <td className="border border-gray">{tax}</td>
                        <td className="border border-gray">{netIncome}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GrossIncomePage;
