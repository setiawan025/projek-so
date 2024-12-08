/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './*.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 0px 15.2px 0px rgba(0, 0, 0, 0.39)',
        'custom-shadow-2': '0px 0px 8.1px 0px rgba(0, 0, 0, 0.25)',
        'custom-drop': '0px 0px 42.821px rgba(37, 153, 208, 0.83)', 
      },
    
      backgroundImage: {
        'custom-gradient': 'linear-gradient(177deg, #2599D0 25.21%, #134E6A 122.71%)',
        'custom-gradient-2': 'linear-gradient(1deg, #00ADFF 7.13%, #006899 140.78%)',
       'custom-gradient-3': 'linear-gradient(90deg, #8BD3F5 0.3%, #3B9FCF 105.24%)',
       'white-37': 'rgba(255, 255, 255, 0.37)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
    
      colors: {
        tr: 'var(--tr, #086895)',
        customBlue: 'rgba(37, 153, 208, 0.83)', // Menambahkan warna khusus untuk fill
      },
     
    },
  },
  plugins: [],
}