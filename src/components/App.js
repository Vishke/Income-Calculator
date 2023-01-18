/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import GrossIncomePage from './GrossIncomePage';
import Nav from './Nav';
import TotalIncomePage from './TotalIncomePage';

const App = () => {
    const [isShown, setIsShown] = useState(false);
    const [income, setIncome] = useState('');
    const [tax, setTax] = useState('');
    const [netIncome, setNetIncome] = useState('');
    const [incomeInterval, setIncomeInterval] = useState('');
    const [value, setValue] = useState('');

    const TAX_19_PERCENT = 0.19;

    const handleClick = () => {
        setIsShown(true);
    };

    const handleBack = () => {
        setIsShown(false);
    };

    const incomeIntervalChangeHandler = (e) => {
        setIncomeInterval(e.target.value);
    };

    const incomeChangeHandler = (e) => {
        setIncome(e.target.value);
    };

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const calculateHandler = () => {
        const calcTaxWeekly = income * TAX_19_PERCENT.toFixed(2);
        setTax(calcTaxWeekly);
        const totalNetIncome = income - calcTaxWeekly;
        setNetIncome(totalNetIncome);
        setIsShown(true);
    };

    return (
        <>
            <Nav handleBack={handleBack} handleClick={handleClick} />
            <section className="w-full h-screen bg-gray flex flex-col items-center justify-center">
                <div className="bg-gradient-to-br from-pink via-yellow-300 to-fuchia rounded-xl shadow-2xl shadow-yellow-600 h-[80%] w-[80%] container flex flex-col items-center justify-center">
                    {!isShown && (
                        <TotalIncomePage
                            income={income}
                            incomeInterval={incomeInterval}
                            incomeIntervalChangeHandler={incomeIntervalChangeHandler}
                            calculateHandler={calculateHandler}
                            incomeChangeHandler={incomeChangeHandler}
                            onChangeHandler={onChangeHandler}
                            value={value}
                        />
                    )}
                    {isShown && <GrossIncomePage income={income} incomeInterval={incomeInterval} tax={tax} netIncome={netIncome} incomeIntervalChangeHandler={incomeIntervalChangeHandler} />}
                </div>
            </section>
        </>
    );
};

export default App;
