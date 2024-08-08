/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        xl: '37.5rem',
      },
      maxWidth: {
        '4xl': '58.75rem',
      },
      width: {
        34: '8.5rem',
        68: '17.125rem',
      },
      borderRadius: {
        xl: '0.625rem',
      },
      padding: {
        25: '6.25rem',
      },
      backgroundImage: {
        'sidebar-desktop': "url('./assets/images/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('./assets/images/bg-sidebar-mobile.svg')",
      },
      fontSize: {
        '4xl': '2rem',
      },
    },
    colors: {
      'marine-blue': 'hsl(213, 96%, 18%)',
      'purplish-blue': 'hsl(243, 100%, 62%)',
      'pastel-blue': 'hsl(228, 100%, 84%)',
      'light-blue': 'hsl(206, 94%, 87%)',
      'strawberry-red': 'hsl(354, 84%, 57%)',

      'cool-gray': 'hsl(231, 11%, 63%)',
      'light-gray': 'hsl(229, 24%, 87%)',
      magnolia: 'hsl(217, 100%, 97%)',
      alabaster: 'hsl(231, 100%, 99%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: 'Ubuntu, sans-serif',
    },
  },
  plugins: [],
}
