


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {

//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: ['group-hover'],
      transformOrigin: {
        'center': 'center',
      },
      fontFamily: {
        edensor: ["Edensor", "serif"],
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
};

