/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            optima: ['Optima', 'sans-serif'],
            colors: {
                fuchia: '#e879f9',
                purple: '#c084fc',
                pink: '#f472b6',
                default: '#fff',
                gray: '#1f2937',
                lightGray: '#e5e7eb',
            },
        },
    },
    plugins: [],
};
