/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '50.5px',
      },
      boxShadow: {
        'customer-light': '0px 1px 9px 3px rgba(0, 0, 0, 0.13);',
        'customer-dark': ' 0px 11px 82px rgba(3, 6, 18, 0.64);',
        'lg-light': '0px 21px 103px rgba(0, 0, 0, 0.13);',
        'blog-card': '0px 23px 72px rgba(0, 0, 0, 0.06);',
      },
      colors: {
        'bg-white': 'rgba(255, 255, 255, 1)',
        'white-tl': '#fff',
        'black-tl': '#000',
        'footer-contact': 'rgba(194, 196, 198, 28%)',
        'teal-blue': '#008AAE',
        'plantium-silver': '#E1E1E1',
        'granite-black': '#191919',
        arrow: '#E5E5E5',
        abr: {
          DEFAULT: '#008aae',
          50: '#edfdfd',
          100: '#d1f7fa',
          200: '#aceff6',
          300: '#70dff0',
          400: '#2dc6e1',
          500: '#00bbe0',
          600: '#008db1',
          700: '#057799',
          800: '#0d617d',
          900: '#10516a',
          950: '#033449',
        },
        primary1: {
          50: '#13172E',
          100: 'rgba(19, 23, 46, 0.62)',
          200: '#0BA2E3',
          300: '#08A1E3',
          400: 'rgb(233, 233, 233)',
          500: 'rgba(255, 255, 255, 0.24)',
        },
        bluePallete: {
          50: 'rgba(11, 162, 227, 1)',
          100: 'rgba(11, 146, 174, 1)',
          200: '#08A1E3',
          300: '#07A1E3',
          400: 'rgba(19, 23, 46, 0.62)',
        },
        blackPallete: {
          50: '#7E7E7E',
          100: '#FFFFFF9E',
          200: '#E5E5E5',
          300: '#000000d9',
          400: '#333647',
          500: ' #747474',
          600: 'rgba(0, 0, 0, 0.47)',
          700: 'rgba(48, 46, 46, 1)',
          800: '#121212',
          900: 'rgba(15, 15, 15, 0.03)',
          910: 'rgba(0, 0, 0, 0.62)',
          920: '#f5f5f5',
        },
        customerCard: {
          50: '#030612',
        },
      },
      backgroundImage: {
        'gradient-bg': 'radial-gradient(circle, #000, #02060b 75%)',
        'border-gradient': 'linear-gradient(to left, #ffffff3b, transparent)',
        'gradient-bg-1': 'linear-gradient(125.15deg,black,rgba(38, 71, 119, 0.48) 148.76%)',
        'gradinet-glass':
          'linear-gradient(125.15deg, rgba(11, 11, 12, 0.747), rgba(38, 71, 119, 0.48) 148.76%)',
        'bg-gradient-app': 'rgba(19, 19, 19, 0.24)',
        'gradient-card': ' radial-gradient(rgb(21 43 76 / 48%), black)',
        'gradient-blue': 'linear-gradient(to right, rgba(0, 159, 251, 0.158), rgba(19, 23, 46, 0.62) 60%)',
        'gradient-border-blue': 'linear-gradient(to left, rgba(7, 161, 227, 1), rgb(232 225 225 / 17%))',
        'circle-gray':
          'radial-gradient(87.48% 87.48% at 49.91% 49.91%, rgba(0, 0, 0, 0.055) 0%, rgba(0, 0, 0, 0) 100%)',
        'circle-blue':
          ' radial-gradient(87.48% 87.48% at 49.91% 49.91%, rgba(77, 125, 152, 0.18) 0%, rgba(73, 101, 117, 0) 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: ['class'],
}
