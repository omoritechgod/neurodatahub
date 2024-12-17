/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // "primary": "#073362",
        "primary": "#102f5b",
        // "primary": "#0b4380",
        "primary-10": "#19416Eff",
        "primary-20": "#145298ff",
        "primary-30": "#4E89B7ff",
        "primary-40": "#CFDBE2ff",
        
      },
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
}
