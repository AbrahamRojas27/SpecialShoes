/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'adidas1': "url('../img/Adidas1.jpg')",
        'adidas2': "url('../img/Adidas2.jpg')",
        'adidas3': "url('../img/Adidas3')",
        'heroImg': "url('../img/HeroImg.jpg')",
        'nike1': "url('../img/Nike1.jpg')",
        'nike2': "url('../img/Nike2.jpg')",
        'nike3': "url('../img/Nike3.jpg')",
        'nike4': "url('../img/Nike4.jpg')",
        'nike5': "url('../img/Nike5.jpg')",
        'nike6': "url('../img/Nike6.jpg')",
        'nike7': "url('../img/Nike7.jpg')",
        'nike8': "url('../img/Nike8.jpg')",
        'nike9': "url('../img/Nike9.jpg')",
        'nikeBlack': "url('../img/nikeBlack-removebg-preview.png')", 
        'nikewhite': "url('../img/nikewhite-removebg-preview.png')", 
        'nikeWhite2': "url('../img/nikeWhite2-removebg-preview.png')", 
        'adidasBlack': "url('../img/adidasBlack-removebg-preview.png')", 
        'dcShoesWhite': "url('../img/dc_chueco-removebg-preview.png')", 
        'dcShoesBlack': "url('../img/dc_choes-removebg-preview.png')", 
        'adidasBlack2': "url('../img/adidasBlack2-removebg-preview.png')", 
        'vans1': "url('../img/Vans1.jpg')", 
        'vans2': "url('../img/Vans2.jpg')", 
        'vans3': "url('../img/Vans3.jpg')", 
        'vans4': "url('../img/Vans4.jpg')", 
        'hero-desktop': "url('../img/heroDesktop.jpg')", 
        'heart': "url('../icons/heart.svg')",
        'house': "url('../icons/house.svg')",
        'person': "url('../icons/person.svg')",
        'search': "url('../icons/search.svg')",
        'moon': "url('../icons/moon.svg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#61AEC9'
      }
    },
  },
  plugins: [],
}