/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			hborder: "#A6A6A6",
			primary: "#2A3236",
			bborder: "#DDDDDD",
			white: "#ffffff",
			blue: "#005AFF",
			cyan: "#EDF3FF",
		},
		extend: {
			fontFamily: {
				montserrat: ["Montserrat"],
			},
		},
	},
	plugins: [],
};
