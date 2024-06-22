/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark': "#0B0D17",
      'accent': "#D0D6F9",
      'white': "#FFFFFF",
      'dark-gray': "#3b3b3b"
    },
    extend: {
      spacing: {
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '40rem',
        '3xl': '44rem',
        '4xl': '48rem',
      },
      backgroundImage: {
        'home-desktop': "url('/src/assets/home/background-home-desktop.jpg')",
        'home-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/src/assets/home/background-tablet.jpg')",

        'destination-desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'destination-mobile': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",

        'crew-desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crew-mobile': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",

        'technology-desktop': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'technology-mobile': "url('/src/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/src/assets/technology/background-technology-tablet.jpg')",

      },
      fontFamily: {
        
      }
    },
  },
  plugins: [],
}

