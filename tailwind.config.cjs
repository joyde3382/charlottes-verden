// import { join } from 'path'
// import forms from '@tailwindcss/forms'
// import typography from '@tailwindcss/typography'
// import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	darkMode: 'class',
// 	content: ["./src/**/*.{html,js,svelte,ts}",
//     "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
// 	theme: {
// 		extend: {
// 			colors: {
// 				primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},
// 			}
// 		},
// 	},
// 	plugins: [forms,typography,...skeleton(), require('flowbite/plugin')],
// }

import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	
	theme: {
		extend: {
			colors: {
				primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},
			}
		},
	},
	plugins: [forms,typography, ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}

